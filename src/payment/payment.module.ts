import { Module } from '@nestjs/common';
import { LedgerModule } from 'src/ledger/ledger.module';
import { ReceiptModule } from 'src/receipt/receipt.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
    controllers: [PaymentController],
    providers: [PaymentService],
    imports: [ReceiptModule, LedgerModule]
})
export class PaymentModule {}
