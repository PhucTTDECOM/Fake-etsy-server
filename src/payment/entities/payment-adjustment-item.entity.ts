import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tbl_etsy_payment_adjustment_item_v3')
export class EtsyPaymentAdjustmentItem {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @Column({ name: 'date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @PrimaryColumn({ name: 'payment_adjustment_id', type: 'varchar', length: 45 })
    paymentAdjustmentId: string;

    @PrimaryColumn({ name: 'payment_adjustment_item_id', type: 'varchar', length: 45 })
    paymentAdjustmentItemId: string;

    @Column({ name: 'adjustment_type', type: 'varchar', length: 20, nullable: true })
    adjustmentType: string;

    @Column({ name: 'amount', type: 'varchar', length: 50, nullable: true })
    amount: string;

    @Column({ name: 'shop_amount', type: 'varchar', length: 50, nullable: true })
    shopAmount: string;

    @Column({ name: 'transaction_id', type: 'varchar', length: 45 })
    transactionId: string;

    @Column({ name: 'bill_payment_id', type: 'varchar', length: 45 })
    billPaymentId: string;

    @Column({ name: 'created_timestamp', type: 'datetime', nullable: true })
    createdTimestamp: Date;

    @Column({ name: 'updated_timestamp', type: 'datetime', nullable: true })
    updatedTimestamp: Date;

    @Column({ name: '_is_app_deleted', type: 'tinyint', default: 0 })
    isAppDeleted: boolean;
}
