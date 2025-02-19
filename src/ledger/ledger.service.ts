import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EtsyLedgerEntry } from './entities/ledger.entity';
import { In, Repository } from 'typeorm';
import { EtsyLedgerEntryPaymentAdjustment } from './entities/ledger-payment-adjustment.entity';
import { EtsyLedgerEntryPaymentAdjustmentItem } from './entities/ledger-payment-adjustment-item.entity';
import LedgerQuery from 'src/query/ledger.query';
import { Shop } from 'src/shop/entities/shop.entity';
import { ListResponse } from 'src/common/api.payload';
import { EtsyLedgerEntryDto, PaymentAdjustmentDto, PaymentAdjustmentItemDto } from './dto/ledger.dto';
import BaseQuery from 'src/query/base.query';

@Injectable()
export class LedgerService {
    constructor(
        @InjectRepository(EtsyLedgerEntry)
        private readonly ledgerRepository: Repository<EtsyLedgerEntry>,
        @InjectRepository(EtsyLedgerEntryPaymentAdjustment)
        private readonly ledgerPaymentAdjustmentRepository: Repository<EtsyLedgerEntryPaymentAdjustment>,
        @InjectRepository(EtsyLedgerEntryPaymentAdjustmentItem)
        private readonly ledgerPaymentAdjustmentItemRepository: Repository<EtsyLedgerEntryPaymentAdjustmentItem>,
        @InjectRepository(Shop)
        private readonly shopRepository: Repository<Shop>
    ) {}

    async getLedgers(shopId: string, query: LedgerQuery): Promise<ListResponse> {
        const shop = await this.shopRepository.findOne({ where: { etsyShopId: shopId } });
        if (!shop) {
            throw new NotFoundException('Shop not found');
        }
        let queryBuilder = this.ledgerRepository.createQueryBuilder('ledger');
        queryBuilder = queryBuilder.andWhere('ledger._etsy_shop_name = :shopName', { shopName: shop.etsyShopName });
        queryBuilder = query.buildQuery(queryBuilder);

        const ledgers = await queryBuilder.getMany();
        if (ledgers.length === 0) {
            return {
                count: 0,
                results: []
            };
        }

        const ledgerEntryIds = ledgers.map((ledger) => ledger.entryId);
        const allPaymentAdjustments = await this.ledgerPaymentAdjustmentRepository.find({ where: { ledgerEntryId: In(ledgerEntryIds) } });
        console.log(allPaymentAdjustments.length);

        const ledgerPaymentAdjustmentsIds = allPaymentAdjustments.map((paymentAdjustment) => paymentAdjustment.paymentAdjustmentId);
        const allPaymentAdjustmentsItems = await this.ledgerPaymentAdjustmentItemRepository.find({
            where: { paymentAdjustmentId: In(ledgerPaymentAdjustmentsIds) }
        });
        const lsLedgerDtos = [];
        for (const ledger of ledgers) {
            const ledgerDto = new EtsyLedgerEntryDto(ledger);
            ledgerDto.payment_adjustments = allPaymentAdjustments
                .filter((paymentAdjustment) => paymentAdjustment.ledgerEntryId === ledger.entryId)
                .map((paymentAdjustment) => {
                    const paymentAdjustmentDto = new PaymentAdjustmentDto(paymentAdjustment);
                    paymentAdjustmentDto.payment_adjustment_items = allPaymentAdjustmentsItems
                        .filter((paymentAdjustmentItem) => paymentAdjustmentItem.paymentAdjustmentId === paymentAdjustment.paymentAdjustmentId)
                        .map((paymentAdjustmentItem) => new PaymentAdjustmentItemDto(paymentAdjustmentItem));
                    return paymentAdjustmentDto;
                });

            lsLedgerDtos.push(ledgerDto);
        }
        const count = await this.countLedgers(query, shop.etsyShopName);
        return {
            count,
            results: lsLedgerDtos
        };
    }

    async countLedgers(queryString: LedgerQuery, shopName: string): Promise<number> {
        let queryBuilder = this.ledgerRepository.createQueryBuilder('ledger');
        queryBuilder = queryString.buildCountQuery(queryBuilder);
        queryBuilder.andWhere('ledger._etsy_shop_name = :shopName', { shopName });
        return queryBuilder.getCount();
    }

    async getByIds(entryIds: string[]): Promise<EtsyLedgerEntry[]> {
        if (!entryIds || entryIds.length === 0) {
            return [];
        }

        return await this.ledgerRepository.find({
            where: { entryId: In(entryIds) }
        });
    }
}
