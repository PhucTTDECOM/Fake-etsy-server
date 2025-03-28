import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_ledger_entry_payment_adjustment_item_v3')
export class EtsyLedgerEntryPaymentAdjustmentItem {
    @PrimaryColumn({ name: '_date_crawled', type: 'datetime' })
    dateCrawled: Date;

    @PrimaryColumn({ name: 'payment_adjustment_id', type: 'varchar', length: 45 })
    paymentAdjustmentId: string;

    @PrimaryColumn({ name: 'payment_adjustment_item_id', type: 'varchar', length: 45 })
    paymentAdjustmentItemId: string;

    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @Column({ name: 'adjustment_type', type: 'varchar', length: 100, nullable: true })
    adjustmentType?: string;

    @Column({ name: 'amount', type: 'varchar', length: 50, nullable: true })
    amount?: string;

    @Column({ name: 'shop_amount', type: 'varchar', length: 50, nullable: true })
    shopAmount?: string;

    @Column({ name: 'transaction_id', type: 'varchar', length: 45, nullable: true })
    transactionId?: string;

    @Column({ name: 'bill_payment_id', type: 'varchar', length: 45, nullable: true })
    billPaymentId?: string;

    @Column({ name: 'created_timestamp', type: 'datetime', nullable: true })
    createdTimestamp?: Date;

    @Column({ name: 'updated_timestamp', type: 'datetime', nullable: true })
    updatedTimestamp?: Date;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
