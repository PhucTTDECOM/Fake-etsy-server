import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_shipping_profile_cost_v3')
export class EtsyShopShippingProfileCost {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @PrimaryColumn({ name: '_destination_or_upgrade_id', type: 'varchar', length: 45 })
    destinationOrUpgradeId: string;

    @PrimaryColumn({ name: '_type', type: 'varchar', length: 45 })
    type: string;

    @PrimaryColumn({ name: '_is_primary', type: 'boolean' })
    isPrimary: boolean;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'amount', type: 'varchar', length: 50, nullable: true })
    amount?: string;

    @Column({ name: 'divisor', type: 'int', nullable: true })
    divisor?: number;

    @Column({ name: 'currency_code', type: 'varchar', length: 10, nullable: true })
    currencyCode?: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
