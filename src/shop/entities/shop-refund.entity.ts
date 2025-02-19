import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_refund_policy_v3')
export class EtsyShopRefund {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @PrimaryColumn({ name: 'return_policy_id', type: 'varchar', length: 45 })
    returnPolicyId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'shop_id', type: 'varchar', length: 45, nullable: true })
    shopId?: string;

    @Column({ name: 'accepts_returns', type: 'boolean', nullable: true })
    acceptsReturns?: boolean;

    @Column({ name: 'accepts_exchanges', type: 'boolean', nullable: true })
    acceptsExchanges?: boolean;

    @Column({ name: 'return_deadline', type: 'int', nullable: true })
    returnDeadline?: number;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
