import { LedgerService } from './../ledger/ledger.service';
import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { isPositiveStrNumber } from 'src/utils/utils';
import { PaymentService } from './payment.service';
import { ReceiptService } from 'src/receipt/receipt.service';
import { EtsyLedgerEntry } from 'src/ledger/entities/ledger.entity';

@Controller('/v3/application')
export class PaymentController {
    constructor(
        private readonly paymentService: PaymentService,
        private readonly receiptService: ReceiptService,
        private readonly ledgerService: LedgerService
    ) {}
    @Get('/shops/:shopId/receipts/:receiptId/payments')
    async getPaymentByReceipt(@Param('shopId') shopId: string, @Param('receiptId') receiptId: string, @Query() query: any) {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }
        if (!isPositiveStrNumber(receiptId)) {
            throw new BadRequestException('Invalid receipt id');
        }
        return {
            count: 1,
            results: [this.paymentService.getSamplePaymentDto(shopId, receiptId, '1234567')]
        };
    }

    @Get('/shops/:shopId/payment-account/ledger-entries/payments')
    async getPaymentByLedger(@Param('shopId') shopId: string, @Query() query: any) {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }

        let arrEntryIds = query.ledger_entry_ids.split(',');
        let arrReceiptIds: string[] = await this.receiptService.getReceiptIdsByShop(shopId);
        let arrLedger: EtsyLedgerEntry[] = await this.ledgerService.getByIds(arrEntryIds);

        return {
            count: arrEntryIds.length,
            results: arrLedger.map((ledger: EtsyLedgerEntry) => {
                let receiptId: string = arrReceiptIds[Math.floor(Math.random() * arrReceiptIds.length)];
                let paymentId: string = ledger.referenceId;
                return this.paymentService.getSamplePaymentDto(shopId, receiptId, paymentId);
            })
        };
    }

    @Get('/shops/:shopId/payments')
    async getPaymentByPaymentIds(@Param('shopId') shopId: string, @Query() query: any) {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }
        const paymentIds: string[] = query.payment_ids
            .split(',')
            .map((paymentId: string) => paymentId?.trim() || '')
            .filter((paymentId: string) => isPositiveStrNumber(paymentId));
        const results = paymentIds.map((paymentId) => {
            let receiptId = Math.floor(Math.random() * (3000000000 - 2000000000)) + 2000000000;
            return this.paymentService.getSamplePaymentDto(shopId, paymentId, '' + receiptId);
        });
        return {
            count: paymentIds.length,
            results: results
        };
    }
}
