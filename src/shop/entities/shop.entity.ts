import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_etsy_shop_v3' })
export class Shop {
    @PrimaryColumn({ type: 'varchar', length: 45, name: 'etsy_shop_id' })
    etsyShopId: string;

    @PrimaryColumn({ type: 'varchar', length: 45, name: 'etsy_user_id' })
    etsyUserId: string;

    @Column({ type: 'datetime', nullable: true, name: '_date_connected' })
    dateConnected: Date;

    @Column({ type: 'varchar', length: 150, nullable: true, name: 'etsy_shop_name' })
    etsyShopName: string;

    @Column({ type: 'datetime', nullable: true, name: 'etsy_created_date' })
    etsyCreatedDate: Date;

    @Column({ type: 'datetime', nullable: true, name: 'etsy_updated_date' })
    etsyUpdatedDate: Date;

    @Column({ type: 'varchar', length: 10, nullable: true, name: 'currency_code' })
    currencyCode: string;

    @Column({ type: 'varchar', length: 10, nullable: true, name: 'shop_country_code' })
    shopCountryCode: string;

    @Column({ type: 'boolean', nullable: true, name: 'is_vacation' })
    isVacation: number;

    @Column({ type: 'varchar', length: 250, nullable: true, name: 'shop_url' })
    shopUrl: string;

    @Column({ type: 'varchar', length: 250, nullable: true, name: 'image_url' })
    imageUrl: string;

    @Column({ type: 'int', nullable: true, name: 'listing_active_cnt' })
    listingActiveCnt: number;

    @Column({ type: 'int', nullable: true, name: 'favorited_cnt' })
    favoritedCnt: number;

    @Column({ type: 'int', nullable: true, name: 'sold_cnt' })
    soldCnt: number;

    @Column({ type: 'int', nullable: true, name: 'review_cnt' })
    reviewCnt: number;

    @Column({ type: 'varchar', length: 45, nullable: true, name: 'review_avg' })
    reviewAvg: string;

    @Column({ type: 'boolean', default: 0, name: '_is_app_deleted' })
    isAppDeleted: number;
}
