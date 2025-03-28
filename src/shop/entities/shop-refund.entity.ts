import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_shop_refund_policy_v3')
export class EtsyShopRefund {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: 'return_policy_id', type: 'varchar', length: 45 })
    returnPolicyId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'accepts_returns', type: 'boolean', nullable: true })
    acceptsReturns?: boolean;

    @Column({ name: 'accepts_exchanges', type: 'boolean', nullable: true })
    acceptsExchanges?: boolean;

    @Column({ name: 'return_deadline', type: 'int', nullable: true })
    returnDeadline?: number;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
