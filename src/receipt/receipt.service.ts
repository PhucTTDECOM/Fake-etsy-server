// receipt.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { EtsyReceipt } from './entities/receipt.entity';
import { EtsyReceiptTransaction } from './entities/receipt.transaction.entity';
import { EtsyReceiptTransactionVariation } from './entities/receipt.transaction-variation.entity';
import { EtsyReceiptRefund } from './entities/receipt.refund.entity';
import { EtsyReceiptShipment } from './entities/receipt.shipment.entity';
import { ReceiptDto, RefundDto, ShipmentDto, TransactionDto, VariationDto } from './dto/receipt.dto';
import ReceiptQuery from 'src/query/receipt.query';
import { Shop } from 'src/shop/entities/shop.entity';
import { ListResponse } from 'src/common/api.payload';
import BaseQuery from 'src/query/base.query';

@Injectable()
export class ReceiptService {
    constructor(
        @InjectRepository(EtsyReceipt)
        private readonly receiptRepository: Repository<EtsyReceipt>,
        @InjectRepository(EtsyReceiptTransaction)
        private readonly transactionRepository: Repository<EtsyReceiptTransaction>,
        @InjectRepository(EtsyReceiptShipment)
        private readonly shipmentRepository: Repository<EtsyReceiptShipment>,
        @InjectRepository(EtsyReceiptRefund)
        private readonly refundRepository: Repository<EtsyReceiptRefund>,
        @InjectRepository(EtsyReceiptTransactionVariation)
        private readonly variationRepository: Repository<EtsyReceiptTransactionVariation>,
        @InjectRepository(Shop)
        private readonly shopRepository: Repository<Shop>
    ) {}

    async getReceipt(receiptId: string): Promise<ReceiptDto> {
        const receipt = await this.receiptRepository.findOne({
            where: { receiptId: receiptId }
        });

        if (!receipt) {
            throw new NotFoundException('Receipt not found');
        }
        const receiptDto = new ReceiptDto(receipt);
        receiptDto.transactions = await this.getTransactions([receiptId]);
        receiptDto.refunds = await this.getRefunds([receiptId]);
        receiptDto.shipments = await this.getShipment([receiptId]);
        return receiptDto;
    }

    async getReceipts(shopId: string, queryString: ReceiptQuery): Promise<ListResponse> {
        const shop = await this.shopRepository.findOne({
            where: { etsyShopId: shopId }
        });
        if (!shop) {
            throw new NotFoundException('Shop not found');
        }
        let queryBuilder = this.receiptRepository.createQueryBuilder('receipt');
        queryBuilder = queryString.buildQuery(queryBuilder);
        queryBuilder.andWhere('receipt._etsy_shop_name = :shopName', { shopName: shop.etsyShopName });
        const receipts = await queryBuilder.getMany();
        const receiptIds = receipts.map((receipt) => receipt.receiptId);
        if (receipts.length === 0) {
            return {
                count: 0,
                results: []
            };
        }
        const receiptDtos: ReceiptDto[] = [];
        const allReceiptTransactions = await this.getTransactions(receiptIds);
        const allReceiptRefunds = await this.getRefunds(receiptIds);
        const allReceiptShipments = await this.getShipment(receiptIds);
        receipts.forEach((receipt) => {
            const receiptDto = new ReceiptDto(receipt);
            receiptDto.transactions = allReceiptTransactions.filter((transaction) => transaction.receipt_id.toString() === receipt.receiptId);
            receiptDto.refunds = allReceiptRefunds.filter((refund) => refund.receipt_id.toString() === receipt.receiptId);
            receiptDto.shipments = allReceiptShipments.filter((shipment) => shipment.receipt_id === receipt.receiptId);
            receiptDtos.push(receiptDto);
        });
        const totalItems = await this.countReceipts(queryString, shop.etsyShopName);
        return {
            count: totalItems,
            results: receiptDtos
        };
    }

    async getReceiptIdsByShop(shopId: string): Promise<string[]> {
        const shop = await this.shopRepository.findOne({
            where: { etsyShopId: shopId }
        });
        if (!shop) {
            throw new NotFoundException('Shop not found');
        }
        let queryBuilder = this.receiptRepository.createQueryBuilder('receipt');
        let queryString: ReceiptQuery = new ReceiptQuery();
        queryBuilder = queryString.buildQuery(queryBuilder);
        queryBuilder.andWhere('receipt._etsy_shop_name = :shopName', { shopName: shop.etsyShopName });
        const receipts = await queryBuilder.getMany();
        const receiptIds = receipts.map((receipt) => receipt.receiptId);
        return receiptIds;
    }

    private async getTransactions(receiptIds: string[]): Promise<TransactionDto[]> {
        const transactions = await this.transactionRepository.find({
            where: {
                receiptId: In(receiptIds)
            }
        });
        const transactionIds = transactions.map((transaction) => transaction.transactionId);
        const variations = await this.getVariations(transactionIds);

        const transactionDtos: TransactionDto[] = [];
        transactions.forEach((transaction) => {
            const transactionDto = new TransactionDto(transaction);
            transactionDto.variations = variations
                .filter((variation) => variation.etsyTransactionId === transaction.transactionId)
                .map((variation) => new VariationDto(variation));
            transactionDtos.push(transactionDto);
        });
        return transactionDtos;
    }

    private async getVariations(transactionIds: string[]): Promise<EtsyReceiptTransactionVariation[]> {
        const variations = await this.variationRepository.find({
            where: {
                id: In(transactionIds)
            }
        });
        return variations;
    }

    private async getRefunds(receiptIds: string[]): Promise<RefundDto[]> {
        const refunds = await this.refundRepository.find({
            where: {
                etsyReceiptId: In(receiptIds)
            }
        });
        return refunds.map((refund) => new RefundDto(refund));
    }

    async getShipment(receiptIds: string[]): Promise<ShipmentDto[]> {
        const shipments = await this.shipmentRepository.find({
            where: {
                etsyReceiptId: In(receiptIds)
            }
        });
        return shipments.map((shipment) => new ShipmentDto(shipment));
    }

    async countReceipts(queryString: ReceiptQuery, shopName: string): Promise<number> {
        let queryBuilder = this.receiptRepository.createQueryBuilder('receipt');
        queryBuilder = queryString.buildCountQuery(queryBuilder);
        queryBuilder.andWhere('receipt._etsy_shop_name = :shopName', { shopName });
        return queryBuilder.getCount();
    }
}
