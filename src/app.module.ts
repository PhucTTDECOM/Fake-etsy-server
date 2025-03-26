import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { ReceiptModule } from './receipt/receipt.module';
import { AuthModule } from './auth/auth.module';
import { ListingModule } from './listing/listing.module';
import { LedgerModule } from './ledger/ledger.module';
import { ReviewModule } from './review/review.module';
import { UploadModule } from './upload/upload.module';
import { PaymentModule } from './payment/payment.module';
import { TaxonomyModule } from './taxonomy/taxonomy.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'sellerbox_test_2',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            logging: true,
            logger: 'advanced-console',
            synchronize: false
        }),
        ShopModule,
        ReceiptModule,
        AuthModule,
        ListingModule,
        LedgerModule,
        ReviewModule,
        UploadModule,
        PaymentModule,
        TaxonomyModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
