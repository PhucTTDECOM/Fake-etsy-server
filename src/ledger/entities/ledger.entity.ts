import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity('tbl_etsy_ledger_entry_v3')
@Index('IDX_RPT', ['appUserId', 'etsyShopName', 'createdTimestamp'])
export class EtsyLedgerEntry {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @PrimaryColumn({ name: 'entry_id', type: 'varchar', length: 45 })
    entryId: string;

    @PrimaryColumn({ name: 'ledger_id', type: 'varchar', length: 45 })
    ledgerId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: 'sequence_number', type: 'int', nullable: true })
    sequenceNumber?: number;

    @Column({ name: 'amount', type: 'varchar', length: 50, nullable: true })
    amount?: string;

    @Column({ name: 'currency', type: 'varchar', length: 10, nullable: true })
    currency?: string;

    @Column({ name: 'description', type: 'varchar', length: 100, nullable: true })
    description?: string;

    @Column({ name: 'balance', type: 'varchar', length: 50, nullable: true })
    balance?: string;

    @Column({ name: 'create_date', type: 'datetime', nullable: true })
    createDate?: Date;

    @Column({ name: 'created_timestamp', type: 'datetime', nullable: true })
    createdTimestamp?: Date;

    @Column({ name: 'ledger_type', type: 'varchar', length: 80, nullable: true })
    ledgerType?: string;

    @Column({ name: 'reference_type', type: 'varchar', length: 80, nullable: true })
    referenceType?: string;

    @Column({ name: 'reference_id', type: 'varchar', length: 45, nullable: true })
    referenceId?: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: () => "'0'" })
    isAppDeleted: boolean;
}
