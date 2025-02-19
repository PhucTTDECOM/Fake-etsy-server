import { Module } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { ReceiptController } from './receipt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtsyReceipt } from './entities/receipt.entity';
import { EtsyReceiptTransaction } from './entities/receipt.transaction.entity';
import { EtsyReceiptTransactionVariation } from './entities/receipt.transaction-variation.entity';
import { EtsyReceiptRefund } from './entities/receipt.refund.entity';
import { EtsyReceiptShipment } from './entities/receipt.shipment.entity';
import { Shop } from 'src/shop/entities/shop.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EtsyReceipt, EtsyReceiptTransaction, EtsyReceiptTransactionVariation, EtsyReceiptRefund, EtsyReceiptShipment, Shop])],
    providers: [ReceiptService],
    controllers: [ReceiptController],
    exports: [ReceiptService]
})
export class ReceiptModule {}
