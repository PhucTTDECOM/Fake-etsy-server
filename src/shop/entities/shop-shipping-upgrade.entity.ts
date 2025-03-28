import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_shipping_profile_upgrade_v3')
export class EtsyShopShippingProfileUpgrade {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: 'upgrade_id', type: 'varchar', length: 45 })
    upgradeId: string;

    @PrimaryColumn({ name: 'shipping_profile_id', type: 'varchar', length: 45 })
    shippingProfileId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'upgrade_name', type: 'varchar', length: 150, nullable: true })
    upgradeName?: string;

    @Column({ name: 'type', type: 'varchar', length: 10, nullable: true })
    type?: string;

    @Column({ name: 'rank', type: 'int', nullable: true })
    rank?: number;

    @Column({ name: 'language', type: 'varchar', length: 10, nullable: true })
    language?: string;

    @Column({ name: 'shipping_carrier_id', type: 'varchar', length: 150, nullable: true })
    shippingCarrierId?: string;

    @Column({ name: 'mail_class', type: 'varchar', length: 150, nullable: true })
    mailClass?: string;

    @Column({ name: 'min_delivery_days', type: 'int', nullable: true })
    minDeliveryDays?: number;

    @Column({ name: 'max_delivery_days', type: 'int', nullable: true })
    maxDeliveryDays?: number;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
