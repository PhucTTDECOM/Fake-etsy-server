import { isPositiveStrNumber } from 'src/utils/utils';
import { LedgerService } from './ledger.service';
import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import LedgerQuery from 'src/query/ledger.query';

@Controller('/v3/application')
export class LedgerController {
    constructor(private readonly ledgerService: LedgerService) {}

    @Get('/shops/:shopId/payment-account/ledger-entries')
    async getLedgers(@Param('shopId') shopId: string, @Query() query: any) {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }
        const ledgerQuery = new LedgerQuery();
        Object.assign(ledgerQuery, query);
        return this.ledgerService.getLedgers(shopId, ledgerQuery);
    }
}
