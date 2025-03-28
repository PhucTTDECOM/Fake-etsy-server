import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_review_v3')
export class EtsyReview {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: '_date_crawled', type: 'datetime' })
    dateCrawled: Date;

    @PrimaryColumn({ name: 'create_timestamp', type: 'datetime' })
    createTimestamp: Date;

    @PrimaryColumn({ name: 'created_timestamp', type: 'datetime' })
    createdTimestamp: Date;

    @PrimaryColumn({ name: 'listing_id', type: 'varchar', length: 45 })
    listingId: string;

    @Column({ name: 'transaction_id', type: 'varchar', length: 45, nullable: true })
    transactionId?: string;

    @Column({ name: 'buyer_user_id', type: 'varchar', length: 45, nullable: true })
    buyerUserId?: string;

    @Column({ name: 'rating', type: 'int', nullable: true })
    rating?: number;

    @Column({ name: 'review', type: 'varchar', length: 1000, nullable: true })
    review?: string;

    @Column({ name: 'language', type: 'varchar', length: 50, nullable: true })
    language?: string;

    @Column({ name: 'image_url_fullxfull', type: 'varchar', length: 200, nullable: true })
    imageUrlFullxfull?: string;

    @Column({ name: 'update_timestamp', type: 'datetime', nullable: true })
    updateTimestamp?: Date;

    @Column({ name: 'updated_timestamp', type: 'datetime', nullable: true })
    updatedTimestamp?: Date;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
