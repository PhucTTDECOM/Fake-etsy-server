import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_production_partner_v3')
export class EtsyShopProductionPartner {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

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
