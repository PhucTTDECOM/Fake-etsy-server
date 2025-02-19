import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import ReceiptQuery from 'src/query/receipt.query';
import { isPositiveStrNumber } from 'src/utils/utils';

@Controller('/v3/application/shops/')
export class ReceiptController {
    constructor(private readonly receiptService: ReceiptService) {}

    @Get(':shopId/receipts/:receiptId')
    async getReceipt(@Param('shopId') shopId: string, @Param('receiptId') receiptId: string) {
        if (!isPositiveStrNumber(receiptId) || !isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid receipt id or shop id');
        }
        return this.receiptService.getReceipt(receiptId);
    }

    @Get(':shopId/receipts')
    async getReceipts(@Param('shopId') shopId: string, @Query() query: ReceiptQuery) {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }
        const queryString = new ReceiptQuery();
        Object.assign(queryString, query);
        return this.receiptService.getReceipts(shopId, queryString);
    }
}
