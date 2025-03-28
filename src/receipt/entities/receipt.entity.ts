import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_receipt_v3')
export class EtsyReceipt {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @PrimaryColumn({ name: 'receipt_id' })
    receiptId: string;

    @Column({ name: 'receipt_type', type: 'varchar', length: 20, nullable: true })
    receiptType: string;

    @Column({ name: 'seller_user_id', type: 'varchar', length: 45, nullable: true })
    sellerUserId: string;

    @Column({ name: 'seller_email', type: 'varchar', length: 100, nullable: true })
    sellerEmail: string;

    @Column({ name: 'buyer_user_id', type: 'varchar', length: 45, nullable: true })
    buyerUserId: string;

    @Column({ name: 'buyer_email', type: 'varchar', length: 100, nullable: true })
    buyerEmail: string;

    @Column({ name: 'name', type: 'varchar', length: 150, nullable: true })
    name: string;

    @Column({ name: 'first_line', type: 'varchar', length: 150, nullable: true })
    firstLine: string;

    @Column({ name: 'second_line', type: 'varchar', length: 150, nullable: true })
    secondLine: string;

    @Column({ name: 'city', type: 'varchar', length: 150, nullable: true })
    city: string;

    @Column({ name: 'state', type: 'varchar', length: 150, nullable: true })
    state: string;

    @Column({ name: 'zip', type: 'varchar', length: 150, nullable: true })
    zip: string;

    @Column({ name: 'status', type: 'varchar', length: 40, nullable: true })
    status: string;

    @Column({ name: 'formatted_address', type: 'varchar', length: 400, nullable: true })
    formattedAddress: string;

    @Column({ name: 'country_iso', type: 'varchar', length: 10, nullable: true })
    countryIso: string;

    @Column({ name: 'payment_method', type: 'varchar', length: 40, nullable: true })
    paymentMethod: string;

    @Column({ name: 'payment_email', type: 'varchar', length: 100, nullable: true })
    paymentEmail: string;

    @Column({ name: 'message_from_seller', type: 'varchar', length: 1248, nullable: true })
    messageFromSeller: string;

    @Column({ name: 'message_from_buyer', type: 'varchar', length: 1248, nullable: true })
    messageFromBuyer: string;

    @Column({ name: 'message_from_payment', type: 'varchar', length: 256, nullable: true })
    messageFromPayment: string;

    @Column({ name: 'is_paid', type: 'boolean', nullable: true })
    isPaid: boolean;

    @Column({ name: 'is_shipped', type: 'boolean', nullable: true })
    isShipped: boolean;

    @Column({ name: 'create_timestamp', type: 'datetime', nullable: true })
    createTimestamp: Date;

    @Column({ name: 'created_timestamp', type: 'datetime', nullable: true })
    createdTimestamp: Date;

    @Column({ name: 'update_timestamp', type: 'datetime', nullable: true })
    updateTimestamp: Date;

    @Column({ name: 'updated_timestamp', type: 'datetime', nullable: true })
    updatedTimestamp: Date;

    @Column({ name: 'is_gift', type: 'boolean', nullable: true })
    isGift: boolean;

    @Column({ name: 'gift_message', type: 'varchar', length: 512, nullable: true })
    giftMessage: string;

    @Column({ name: '_grandtotal_amt', type: 'varchar', length: 50, nullable: true })
    grandtotalAmt: string;

    @Column({ name: '_grandtotal_divisor', type: 'int', nullable: true })
    grandtotalDivisor: number;

    @Column({ name: '_grandtotal_currency_code', type: 'varchar', length: 10, nullable: true })
    grandtotalCurrencyCode: string;

    @Column({ name: '_subtotal_amt', type: 'varchar', length: 50, nullable: true })
    subtotalAmt: string;

    @Column({ name: '_subtotal_divisor', type: 'int', nullable: true })
    subtotalDivisor: number;

    @Column({ name: '_subtotal_currency_code', type: 'varchar', length: 10, nullable: true })
    subtotalCurrencyCode: string;

    @Column({ name: '_total_price_amt', type: 'varchar', length: 50, nullable: true })
    totalPriceAmt: string;

    @Column({ name: '_total_price_divisor', type: 'int', nullable: true })
    totalPriceDivisor: number;

    @Column({ name: '_total_price_currency_code', type: 'varchar', length: 10, nullable: true })
    totalPriceCurrencyCode: string;

    @Column({ name: '_total_shipping_cost_amt', type: 'varchar', length: 50, nullable: true })
    totalShippingCostAmt: string;

    @Column({ name: '_total_shipping_cost_divisor', type: 'int', nullable: true })
    totalShippingCostDivisor: number;

    @Column({ name: '_total_shipping_cost_currency_code', type: 'varchar', length: 10, nullable: true })
    totalShippingCostCurrencyCode: string;

    @Column({ name: '_total_tax_cost_amt', type: 'varchar', length: 50, nullable: true })
    totalTaxCostAmt: string;

    @Column({ name: '_total_tax_cost_divisor', type: 'int', nullable: true })
    totalTaxCostDivisor: number;

    @Column({ name: '_total_tax_cost_currency_code', type: 'varchar', length: 10, nullable: true })
    totalTaxCostCurrencyCode: string;

    @Column({ name: '_total_vat_cost_amt', type: 'varchar', length: 50, nullable: true })
    totalVatCostAmt: string;

    @Column({ name: '_total_vat_cost_divisor', type: 'int', nullable: true })
    totalVatCostDivisor: number;

    @Column({ name: '_total_vat_cost_currency_code', type: 'varchar', length: 10, nullable: true })
    totalVatCostCurrencyCode: string;

    @Column({ name: '_discount_amt_amt', type: 'varchar', length: 50, nullable: true })
    discountAmtAmt: string;

    @Column({ name: '_discount_amt_divisor', type: 'int', nullable: true })
    discountAmtDivisor: number;

    @Column({ name: '_discount_amt_currency_code', type: 'varchar', length: 10, nullable: true })
    discountAmtCurrencyCode: string;

    @Column({ name: '_gift_wrap_price_amt', type: 'varchar', length: 50, nullable: true })
    giftWrapPriceAmt: string;

    @Column({ name: '_gift_wrap_price_divisor', type: 'int', nullable: true })
    giftWrapPriceDivisor: number;

    @Column({ name: '_gift_wrap_price_currency_code', type: 'varchar', length: 10, nullable: true })
    giftWrapPriceCurrencyCode: string;

    @Column({ name: '_min_expected_ship_date', type: 'datetime', nullable: true })
    minExpectedShipDate: Date;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: 0 })
    isAppDeleted: boolean;
}
