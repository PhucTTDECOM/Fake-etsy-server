import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_listing_video_v3')
export class EtsyListingVideo {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @PrimaryColumn({ name: '_etsy_listing_id', type: 'varchar', length: 45 })
    etsyListingId: string;

    @PrimaryColumn({ name: 'video_id', type: 'varchar', length: 45 })
    videoId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'width', type: 'int', nullable: true })
    width?: number;

    @Column({ name: 'height', type: 'int', nullable: true })
    height?: number;

    @Column({ name: 'video_url', type: 'varchar', length: 200, nullable: true })
    videoUrl?: string;

    @Column({ name: 'thumbnail_url', type: 'varchar', length: 200, nullable: true })
    thumbnailUrl?: string;

    @Column({ name: 'video_state', type: 'varchar', length: 20, nullable: true })
    videoState?: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
