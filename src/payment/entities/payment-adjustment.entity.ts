import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tbl_etsy_payment_adjustment_v3')
export class EtsyPaymentAdjustment {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;


    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @PrimaryColumn({ name: 'payment_adjustment_id', type: 'varchar', length: 45 })
    paymentAdjustmentId: string;

    @PrimaryColumn({ name: 'payment_id', type: 'varchar', length: 45 })
    paymentId: string;

    @Column({ name: 'status', type: 'varchar', length: 20, nullable: true })
    status: string;

    @Column({ name: 'is_success', type: 'tinyint', nullable: true })
    isSuccess: boolean;

    @Column({ name: 'user_id', type: 'varchar', length: 45 })
    userId: string;

    @Column({ name: 'reason_code', type: 'varchar', length: 45, nullable: true })
    reasonCode: string;

    @Column({ name: 'total_adjustment_amount', type: 'varchar', length: 50, nullable: true })
    totalAdjustmentAmount: string;

    @Column({ name: 'shop_total_adjustment_amount', type: 'varchar', length: 50, nullable: true })
    shopTotalAdjustmentAmount: string;

    @Column({ name: 'buyer_total_adjustment_amount', type: 'varchar', length: 50, nullable: true })
    buyerTotalAdjustmentAmount: string;

    @Column({ name: 'total_fee_adjustment_amount', type: 'varchar', length: 50, nullable: true })
    totalFeeAdjustmentAmount: string;

    @Column({ name: 'create_timestamp', type: 'datetime', nullable: true })
    createTimestamp: Date;

    @Column({ name: 'created_timestamp', type: 'datetime', nullable: true })
    createdTimestamp: Date;

    @Column({ name: 'update_timestamp', type: 'datetime', nullable: true })
    updateTimestamp: Date;

    @Column({ name: 'updated_timestamp', type: 'datetime', nullable: true })
    updatedTimestamp: Date;

    @Column({ name: '_is_app_deleted', type: 'tinyint', default: 0 })
    isAppDeleted: boolean;
}
