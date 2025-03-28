import { EtsyPaymentAdjustment } from './payment-adjustment.entity';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_payment_v3')
export class EtsyPayment {
    @PrimaryColumn({ name: '_etsy_shop_id', type: 'varchar', length: 45 })
    etsyShopId: string;

    @PrimaryColumn({ name: 'payment_id', type: 'varchar', length: 45 })
    paymentId: string;

    @PrimaryColumn({ name: 'receipt_id', type: 'varchar', length: 45 })
    receiptId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled?: Date;

    @Column({ name: '_amount_gross_amt', type: 'varchar', length: 50, nullable: true })
    amountGrossAmt?: string;

    @Column({ name: '_amount_gross_divisor', type: 'int', nullable: true })
    amountGrossDivisor?: number;

    @Column({ name: '_amount_gross_currency_code', type: 'varchar', length: 10, nullable: true })
    amountGrossCurrencyCode?: string;

    @Column({ name: '_amount_fees_amt', type: 'varchar', length: 50, nullable: true })
    amountFeesAmt?: string;

    @Column({ name: '_amount_fees_divisor', type: 'int', nullable: true })
    amountFeesDivisor?: number;

    @Column({ name: '_amount_fees_currency_code', type: 'varchar', length: 10, nullable: true })
    amountFeesCurrencyCode?: string;

    @Column({ name: '_amount_net_amt', type: 'varchar', length: 50, nullable: true })
    amountNetAmt?: string;

    @Column({ name: '_amount_net_divisor', type: 'int', nullable: true })
    amountNetDivisor?: number;

    @Column({ name: '_amount_net_currency_code', type: 'varchar', length: 10, nullable: true })
    amountNetCurrencyCode?: string;

    @Column({ name: '_posted_gross_amt', type: 'varchar', length: 50, nullable: true })
    postedGrossAmt?: string;

    @Column({ name: '_posted_gross_divisor', type: 'int', nullable: true })
    postedGrossDivisor?: number;

    @Column({ name: '_posted_gross_currency_code', type: 'varchar', length: 10, nullable: true })
    postedGrossCurrencyCode?: string;

    @Column({ name: '_posted_fees_amt', type: 'varchar', length: 50, nullable: true })
    postedFeesAmt?: string;

    @Column({ name: '_posted_fees_divisor', type: 'int', nullable: true })
    postedFeesDivisor?: number;

    @Column({ name: '_posted_fees_currency_code', type: 'varchar', length: 10, nullable: true })
    postedFeesCurrencyCode?: string;

    @Column({ name: '_posted_net_amt', type: 'varchar', length: 50, nullable: true })
    postedNetAmt?: string;

    @Column({ name: '_posted_net_divisor', type: 'int', nullable: true })
    postedNetDivisor?: number;

    @Column({ name: '_posted_net_currency_code', type: 'varchar', length: 10, nullable: true })
    postedNetCurrencyCode?: string;

    @Column({ name: '_adjusted_gross_amt', type: 'varchar', length: 50, nullable: true })
    adjustedGrossAmt?: string;

    @Column({ name: '_adjusted_gross_divisor', type: 'int', nullable: true })
    adjustedGrossDivisor?: number;

    @Column({ name: '_adjusted_gross_currency_code', type: 'varchar', length: 10, nullable: true })
    adjustedGrossCurrencyCode?: string;

    @Column({ name: '_adjusted_fees_amt', type: 'varchar', length: 50, nullable: true })
    adjustedFeesAmt?: string;

    @Column({ name: '_adjusted_fees_divisor', type: 'int', nullable: true })
    adjustedFeesDivisor?: number;

    @Column({ name: '_adjusted_fees_currency_code', type: 'varchar', length: 10, nullable: true })
    adjustedFeesCurrencyCode?: string;

    @Column({ name: '_adjusted_net_amt', type: 'varchar', length: 50, nullable: true })
    adjustedNetAmt?: string;

    @Column({ name: '_adjusted_net_divisor', type: 'int', nullable: true })
    adjustedNetDivisor?: number;

    @Column({ name: '_adjusted_net_currency_code', type: 'varchar', length: 10, nullable: true })
    adjustedNetCurrencyCode?: string;

    @Column({ name: 'currency', type: 'varchar', length: 3, nullable: true })
    currency?: string;

    @Column({ name: 'shop_currency', type: 'varchar', length: 3, nullable: true })
    shopCurrency?: string;

    @Column({ name: 'buyer_currency', type: 'varchar', length: 3, nullable: true })
    buyerCurrency?: string;

    @Column({ name: 'shipping_user_id', type: 'varchar', length: 45, nullable: true })
    shippingUserId?: string;

    @Column({ name: 'shipping_address_id', type: 'varchar', length: 45, nullable: true })
    shippingAddressId?: string;

    @Column({ name: 'billing_address_id', type: 'varchar', length: 45, nullable: true })
    billingAddressId?: string;

    @Column({ name: 'status', type: 'varchar', length: 20, nullable: true })
    status?: string;

    @Column({ name: 'shipped_timestamp', type: 'datetime', nullable: true })
    shippedTimestamp?: Date;

    @Column({ name: 'create_timestamp', type: 'datetime', nullable: true })
    createTimestamp?: Date;

    @Column({ name: 'created_timestamp', type: 'datetime', nullable: true })
    createdTimestamp?: Date;

    @Column({ name: 'update_timestamp', type: 'datetime', nullable: true })
    updateTimestamp?: Date;

    @Column({ name: 'updated_timestamp', type: 'datetime', nullable: true })
    updatedTimestamp?: Date;

    @Column({ name: '_is_app_deleted', type: 'tinyint', default: () => '0' })
    isAppDeleted: boolean;

    payment_adjustments: EtsyPaymentAdjustment[];
}
