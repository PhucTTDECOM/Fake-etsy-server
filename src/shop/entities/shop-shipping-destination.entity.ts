import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_shipping_profile_destination_v3')
export class EtsyShopShippingProfileDestination {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: 'shipping_profile_destination_id', type: 'varchar', length: 45 })
    shippingProfileDestinationId: string;

    @PrimaryColumn({ name: 'shipping_profile_id', type: 'varchar', length: 45 })
    shippingProfileId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'origin_country_iso', type: 'varchar', length: 10, nullable: true })
    originCountryIso?: string;

    @Column({ name: 'destination_country_iso', type: 'varchar', length: 10, nullable: true })
    destinationCountryIso?: string;

    @Column({ name: 'destination_region', type: 'varchar', length: 10, nullable: true })
    destinationRegion?: string;

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
