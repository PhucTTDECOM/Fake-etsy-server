import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Shop } from './entities/shop.entity';
import { EtsyShopRefund } from './entities/shop-refund.entity';
import { EtsyShopSection } from './entities/shop-section.entity';
import { EtsyShopProductionPartner } from './entities/shop-product-partner.entity';
import { EtsyShopShippingProfile } from './entities/shop-shipping.entity';
import { EtsyShopShippingProfileDestination } from './entities/shop-shipping-destination.entity';
import { EtsyShopShippingProfileUpgrade } from './entities/shop-shipping-upgrade.entity';
import { EtsyShopShippingProfileCost } from './entities/shop-shipping-cost.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Shop,
            EtsyShopRefund,
            EtsyShopSection,
            EtsyShopProductionPartner,
            EtsyShopShippingProfile,
            EtsyShopShippingProfileDestination,
            EtsyShopShippingProfileUpgrade,
            EtsyShopShippingProfileCost
        ])
    ],
    providers: [ShopService],
    controllers: [ShopController],
    exports: [
        ShopService,
        TypeOrmModule
    ]
})
export class ShopModule {}

