import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_receipt_transaction_variation_v3')
export class EtsyReceiptTransactionVariation {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: '_etsy_transaction_id', type: 'varchar', length: 45 })
    etsyTransactionId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @Column({ name: '_etsy_receipt_id', type: 'varchar', length: 45 })
    etsyReceiptId: string;

    @Column({ name: 'property_id', type: 'varchar', length: 45 })
    propertyId: string;

    @Column({ name: 'value_id', type: 'varchar', length: 45, nullable: true })
    valueId: string;

    @Column({ name: 'formatted_name', type: 'varchar', length: 100, nullable: true })
    formattedName: string;

    @Column({ name: 'formatted_value', type: 'varchar', length: 350, nullable: true })
    formattedValue: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: 0 })
    isAppDeleted: boolean;
}
