import { toTimeStamp } from 'src/utils/utils';
import { EtsyPaymentAdjustmentItem } from '../entities/payment-adjustment-item.entity';
import { EtsyPaymentAdjustment } from '../entities/payment-adjustment.entity';
import { EtsyPayment } from '../entities/payment.entity';

export class PaymentDto {
    payment_id: number;
    buyer_user_id: number;
    shop_id: number;
    receipt_id: number;
    amount_gross: AmountDto;
    amount_fees: AmountDto;
    amount_net: AmountDto;
    posted_gross: AmountDto;
    posted_fees: AmountDto;
    posted_net: AmountDto;
    adjusted_gross: AmountDto;
    adjusted_fees: AmountDto;
    adjusted_net: AmountDto;
    currency: string;
    shop_currency: string;
    buyer_currency: string;
    shipping_user_id: number;
    shipping_address_id: number;
    billing_address_id: number;
    status: string;
    shipped_timestamp: number;
    create_timestamp: number;
    created_timestamp: number;
    update_timestamp: number;
    updated_timestamp: number;
    payment_adjustments: PaymentAdjustmentDto[];
    constructor(data: EtsyPayment) {
        this.payment_id = Number(data.paymentId);
        this.buyer_user_id = Number(data.etsyUserId);
        this.shop_id = Number(data.shopId);
        this.receipt_id = Number(data.receiptId);
        this.amount_gross = new AmountDto(data.amountGrossAmt, data.amountGrossDivisor, data.amountGrossCurrencyCode);
        this.amount_fees = new AmountDto(data.amountFeesAmt, data.amountFeesDivisor, data.amountFeesCurrencyCode);
        this.amount_net = new AmountDto(data.amountNetAmt, data.amountNetDivisor, data.amountNetCurrencyCode);
        this.posted_gross = new AmountDto(data.postedGrossAmt, data.postedGrossDivisor, data.postedGrossCurrencyCode);
        this.posted_fees = new AmountDto(data.postedFeesAmt, data.postedFeesDivisor, data.postedFeesCurrencyCode);
        this.posted_net = new AmountDto(data.postedNetAmt, data.postedNetDivisor, data.postedNetCurrencyCode);
        this.adjusted_gross = new AmountDto(data.adjustedGrossAmt, data.adjustedGrossDivisor, data.adjustedGrossCurrencyCode);
        this.adjusted_fees = new AmountDto(data.adjustedFeesAmt, data.adjustedFeesDivisor, data.adjustedFeesCurrencyCode);
        this.adjusted_net = new AmountDto(data.adjustedNetAmt, data.adjustedNetDivisor, data.adjustedNetCurrencyCode);
        this.currency = data.currency;
        this.buyer_currency = data.buyerCurrency;
        this.shipping_user_id = Number(data.shippingUserId);
        this.shipping_address_id = Number(data.shippingAddressId);
        this.billing_address_id = Number(data.billingAddressId);
        this.status = data.status;
        this.shipped_timestamp = toTimeStamp(new Date());
        this.create_timestamp = toTimeStamp(new Date());
        this.created_timestamp = toTimeStamp(new Date());
        this.update_timestamp = toTimeStamp(new Date());
        this.updated_timestamp = toTimeStamp(new Date());
        this.payment_adjustments = [];
    }
}

export class PaymentAdjustmentDto {
    payment_adjustment_id: number;
    payment_id: number;
    status: string;
    is_success: boolean;
    user_id: number;
    reason_code: string;
    total_adjustment_amount: number;
    shop_total_adjustment_amount: number;
    buyer_total_adjustment_amount: number;
    total_fee_adjustment_amount: number;
    create_timestamp: number;
    created_timestamp: number;
    update_timestamp: number;
    updated_timestamp: number;
    payment_adjustment_items: PaymentAdjustmentItemDto[];
    constructor(data: EtsyPaymentAdjustment) {
        this.payment_adjustment_id = Number(data.paymentAdjustmentId);
        this.payment_id = Number(data.paymentId);
        this.status = data.status;
        this.is_success = data.isSuccess;
        this.user_id = Number(data.userId);
        this.reason_code = data.reasonCode;
        this.total_adjustment_amount = Number(data.totalAdjustmentAmount);
        this.shop_total_adjustment_amount = Number(data.shopTotalAdjustmentAmount);
        this.buyer_total_adjustment_amount = Number(data.buyerTotalAdjustmentAmount);
        this.total_fee_adjustment_amount = Number(data.totalFeeAdjustmentAmount);
        this.create_timestamp = toTimeStamp(new Date());
        this.created_timestamp = toTimeStamp(new Date());
        this.update_timestamp = toTimeStamp(new Date());
        this.updated_timestamp = toTimeStamp(new Date());
        this.payment_adjustment_items = [];
    }
}

export class PaymentAdjustmentItemDto {
    payment_adjustment_id: number;
    payment_adjustment_item_id: number;
    adjustment_type: string;
    amount: number;
    shop_amount: number;
    transaction_id: number;
    bill_payment_id: number;
    created_timestamp: number;
    updated_timestamp: number;
    constructor(data: EtsyPaymentAdjustmentItem) {
        this.payment_adjustment_id = Number(data.paymentAdjustmentId);
        this.payment_adjustment_item_id = Number(data.paymentAdjustmentItemId);
        this.adjustment_type = data.adjustmentType;
        this.amount = Number(data.amount);
        this.shop_amount = Number(data.shopAmount);
        this.transaction_id = Number(data.transactionId);
        this.bill_payment_id = Number(data.billPaymentId);
        this.created_timestamp = Number(data.createdTimestamp);
        this.updated_timestamp = Number(data.updatedTimestamp);
    }
}

export class AmountDto {
    amount: number;
    divisor: number;
    currency_code: string;

    constructor(amount: string, divisor: number, currencyCode: string) {
        this.amount = parseFloat(amount);
        this.divisor = divisor;
        this.currency_code = currencyCode;
    }
}
