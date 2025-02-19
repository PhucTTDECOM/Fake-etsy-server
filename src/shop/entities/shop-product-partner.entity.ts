import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_production_partner_v3')
export class EtsyShopProductionPartner {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @PrimaryColumn({ name: 'production_partner_id', type: 'varchar', length: 45 })
    productionPartnerId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'partner_name', type: 'varchar', length: 200, nullable: true })
    partnerName?: string;

    @Column({ name: 'location', type: 'varchar', length: 200, nullable: true })
    location?: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
