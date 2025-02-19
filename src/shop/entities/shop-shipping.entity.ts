import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_shipping_profile_v3')
export class EtsyShopShippingProfile {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @PrimaryColumn({ name: 'shipping_profile_id', type: 'varchar', length: 45 })
    shippingProfileId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'title', type: 'varchar', length: 500, nullable: true })
    title?: string;

    @Column({ name: 'user_id', type: 'varchar', length: 45, nullable: true })
    userId?: string;

    @Column({ name: 'min_processing_days', type: 'int' })
    minProcessingDays: number;

    @Column({ name: 'max_processing_days', type: 'int' })
    maxProcessingDays: number;

    @Column({ name: 'processing_days_display_label', type: 'varchar', length: 500, nullable: true })
    processingDaysDisplayLabel?: string;

    @Column({ name: 'origin_country_iso', type: 'varchar', length: 10, nullable: true })
    originCountryIso?: string;

    @Column({ name: 'is_deleted', type: 'boolean', nullable: true })
    isDeleted?: boolean;

    @Column({ name: 'origin_postal_code', type: 'varchar', length: 20, nullable: true })
    originPostalCode?: string;

    @Column({ name: 'profile_type', type: 'varchar', length: 20, nullable: true })
    profileType?: string;

    @Column({ name: 'domestic_handling_fee', type: 'varchar', length: 45, nullable: true })
    domesticHandlingFee?: string;

    @Column({ name: 'international_handling_fee', type: 'varchar', length: 45, nullable: true })
    internationalHandlingFee?: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
