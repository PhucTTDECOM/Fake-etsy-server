import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_receipt_shipment_v3')
export class EtsyReceiptShipment {
    @PrimaryColumn({ name: 'receipt_shipping_id', type: 'varchar', length: 45 })
    receiptShippingId: string;

    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @Column({ name: '_etsy_receipt_id', type: 'varchar', length: 45 })
    etsyReceiptId: string;

    @Column({ name: 'shipment_notification_timestamp', type: 'datetime', nullable: true })
    shipmentNotificationTimestamp: Date;

    @Column({ name: 'carrier_name', type: 'varchar', length: 250, nullable: true })
    carrierName: string;

    @Column({ name: 'tracking_code', type: 'varchar', length: 250, nullable: true })
    trackingCode: string;

    @Column({ name: '_submit_pic', type: 'varchar', length: 250, nullable: true })
    submitPic: string;

    @Column({ name: '_submit_date', type: 'datetime', nullable: true })
    submitDate: Date;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: 0 })
    isAppDeleted: boolean;
}
