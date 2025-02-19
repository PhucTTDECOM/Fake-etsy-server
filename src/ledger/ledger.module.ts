import { Module } from '@nestjs/common';
import { LedgerController } from './ledger.controller';
import { LedgerService } from './ledger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtsyLedgerEntry } from './entities/ledger.entity';
import { EtsyLedgerEntryPaymentAdjustmentItem } from './entities/ledger-payment-adjustment-item.entity';
import { EtsyLedgerEntryPaymentAdjustment } from './entities/ledger-payment-adjustment.entity';
import { Shop } from 'src/shop/entities/shop.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EtsyLedgerEntry, EtsyLedgerEntryPaymentAdjustmentItem, EtsyLedgerEntryPaymentAdjustment, Shop])],
    controllers: [LedgerController],
    providers: [LedgerService],
    exports: [LedgerService]
})
export class LedgerModule {}
