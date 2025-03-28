import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_listing_image_v3')
export class EtsyListingImage {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: 'listing_id', type: 'varchar', length: 45 })
    listingId: string;

    @PrimaryColumn({ name: 'listing_image_id', type: 'varchar', length: 45 })
    listingImageId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'hex_code', type: 'varchar', length: 10, nullable: true })
    hexCode?: string;

    @Column({ name: 'is_black_and_white', type: 'boolean', nullable: true })
    isBlackAndWhite?: boolean;

    @Column({ name: 'rank', type: 'int', nullable: true })
    rank?: number;

    @Column({ name: 'url_75x75', type: 'varchar', length: 200, nullable: true })
    url75x75?: string;

    @Column({ name: 'url_170x135', type: 'varchar', length: 200, nullable: true })
    url170x135?: string;

    @Column({ name: 'url_570xN', type: 'varchar', length: 200, nullable: true })
    url570xN?: string;

    @Column({ name: 'url_fullxfull', type: 'varchar', length: 200, nullable: true })
    urlFullxfull?: string;

    @Column({ name: 'full_height', type: 'int', nullable: true })
    fullHeight?: number;

    @Column({ name: 'full_width', type: 'int', nullable: true })
    fullWidth?: number;

    @Column({ name: 'alt_text', type: 'varchar', length: 500, nullable: true })
    altText?: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
