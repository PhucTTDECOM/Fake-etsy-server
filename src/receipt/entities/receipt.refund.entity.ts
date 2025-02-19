import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_receipt_refund_v3')
export class EtsyReceiptRefund {
    @PrimaryColumn({ name: '_etsy_receipt_id', type: 'varchar' })
    etsyReceiptId: string;

    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @Column({ name: '_amount_amt', type: 'varchar', length: 50, nullable: true })
    amountAmt: string;

    @Column({ name: '_amount_divisor', type: 'int', nullable: true })
    amountDivisor: number;

    @Column({ name: '_amount_currency_code', type: 'varchar', length: 10, nullable: true })
    amountCurrencyCode: string;

    @PrimaryColumn({ name: 'created_timestamp', type: 'datetime' })
    createdTimestamp: Date;

    @Column({ name: 'reason', type: 'varchar', length: 100, nullable: true })
    reason: string;

    @Column({ name: 'note_from_issuer', type: 'varchar', length: 1000, nullable: true })
    noteFromIssuer: string;

    @Column({ name: 'status', type: 'varchar', length: 100, nullable: true })
    status: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: 0 })
    isAppDeleted: boolean;
}
