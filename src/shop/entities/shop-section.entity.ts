import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_section_v3')
export class EtsyShopSection {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: 'shop_section_id', type: 'varchar', length: 45 })
    shopSectionId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'title', type: 'varchar', length: 100, nullable: true })
    title?: string;

    @Column({ name: 'rank', type: 'int', nullable: true })
    rank?: number;

    @Column({ name: 'user_id', type: 'varchar', length: 45, nullable: true })
    userId?: string;

    @Column({ name: 'active_listing_count', type: 'int', nullable: true })
    activeListingCount?: number;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
