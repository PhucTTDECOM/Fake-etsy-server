import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_etsy_receipt_transaction_v3')
export class EtsyReceiptTransaction {
    @PrimaryGeneratedColumn({ name: 'transaction_id' })
    id: number;

    @Column({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @Column({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @Column({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @Column({ name: 'transaction_id', type: 'varchar', length: 45 })
    transactionId: string;

    @Column({ name: 'title', type: 'varchar', length: 200, nullable: true })
    title: string;

    @Column({ name: '_description', type: 'varchar', length: 5, nullable: true })
    description: string;

    @Column({ name: 'seller_user_id', type: 'varchar', length: 45, nullable: true })
    sellerUserId: string;

    @Column({ name: 'buyer_user_id', type: 'varchar', length: 45, nullable: true })
    buyerUserId: string;

    @Column({ name: 'create_timestamp', type: 'datetime', nullable: true })
    createTimestamp: Date;

    @Column({ name: 'created_timestamp', type: 'datetime', nullable: true })
    createdTimestamp: Date;

    @Column({ name: 'paid_timestamp', type: 'datetime', nullable: true })
    paidTimestamp: Date;

    @Column({ name: 'shipped_timestamp', type: 'datetime', nullable: true })
    shippedTimestamp: Date;

    @Column({ name: 'quantity', type: 'int', nullable: true })
    quantity: number;

    @Column({ name: 'listing_image_id', type: 'varchar', length: 45, nullable: true })
    listingImageId: string;

    @Column({ name: 'receipt_id', type: 'varchar', length: 45 })
    receiptId: string;

    @Column({ name: 'is_digital', type: 'boolean', nullable: true })
    isDigital: boolean;

    @Column({ name: 'file_data', type: 'varchar', length: 500, nullable: true })
    fileData: string;

    @Column({ name: 'listing_id', type: 'varchar', length: 45, nullable: true })
    listingId: string;

    @Column({ name: 'transaction_type', type: 'varchar', length: 40, nullable: true })
    transactionType: string;

    @Column({ name: 'product_id', type: 'varchar', length: 45, nullable: true })
    productId: string;

    @Column({ name: 'sku', type: 'varchar', length: 50, nullable: true })
    sku: string;

    @Column({ name: '_price_amt', type: 'varchar', length: 50, nullable: true })
    priceAmt: string;

    @Column({ name: '_price_divisor', type: 'int', nullable: true })
    priceDivisor: number;

    @Column({ name: '_price_currency_code', type: 'varchar', length: 10, nullable: true })
    priceCurrencyCode: string;

    @Column({ name: '_shipping_cost_amt', type: 'varchar', length: 50, nullable: true })
    shippingCostAmt: string;

    @Column({ name: '_shipping_cost_divisor', type: 'int', nullable: true })
    shippingCostDivisor: number;

    @Column({ name: '_shipping_cost_currency_code', type: 'varchar', length: 10, nullable: true })
    shippingCostCurrencyCode: string;

    @Column({ name: 'shipping_profile_id', type: 'varchar', length: 45, nullable: true })
    shippingProfileId: string;

    @Column({ name: 'min_processing_days', type: 'int', nullable: true })
    minProcessingDays: number;

    @Column({ name: 'max_processing_days', type: 'int', nullable: true })
    maxProcessingDays: number;

    @Column({ name: 'shipping_method', type: 'varchar', length: 250, nullable: true })
    shippingMethod: string;

    @Column({ name: 'shipping_upgrade', type: 'varchar', length: 250, nullable: true })
    shippingUpgrade: string;

    @Column({ name: 'expected_ship_date', type: 'datetime', nullable: true })
    expectedShipDate: Date;

    @Column({ name: 'buyer_coupon', type: 'varchar', length: 50, nullable: true })
    buyerCoupon: string;

    @Column({ name: 'shop_coupon', type: 'varchar', length: 50, nullable: true })
    shopCoupon: string;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: 0 })
    isAppDeleted: boolean;
}
