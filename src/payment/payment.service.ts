import { Injectable } from '@nestjs/common';
import { toTimeStamp } from 'src/utils/utils';
import { AmountDto, PaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentService {
    getSamplePaymentDto(shopId: string, receiptId: string, paymentId: string): PaymentDto {
        let paymentAdjustmentId = Math.floor(Math.random() * 99999999999) + 90000000000;
        return {
            payment_id: Number(paymentId),
            buyer_user_id: Math.floor(Math.random() * 99999999) + 10000000,
            shop_id: Number(shopId),
            receipt_id: Number(receiptId),
            amount_gross: new AmountDto('' + Math.floor(Math.random() * (300 - 10 + 1)) + 10, 100, 'USD'),
            amount_fees: new AmountDto('' + Math.floor(Math.random() * (300 - 10 + 1)) + 10, 100, 'USD'),
            amount_net: new AmountDto('' + Math.floor(Math.random() * (300 - 10 + 1)) + 10, 100, 'USD'),
            posted_gross: new AmountDto('' + Math.floor(Math.random() * (300 - 10 + 1)) + 10, 100, 'USD'),
            posted_fees: new AmountDto('' + Math.floor(Math.random() * (300 - 10 + 1)) + 10, 100, 'USD'),
            posted_net: new AmountDto('' + Math.floor(Math.random() * (300 - 10 + 1)) + 10, 100, 'USD'),
            adjusted_gross: null,
            adjusted_fees: null,
            adjusted_net: null,
            currency: 'USD',
            shop_currency: 'USD',
            buyer_currency: 'USD',
            shipping_user_id: Math.floor(Math.random() * 900000) + 100000,
            shipping_address_id: Math.floor(Math.random() * 900000) + 100000,
            billing_address_id: Math.floor(Math.random() * 900000) + 100000,
            status: 'SETTLED',
            shipped_timestamp: toTimeStamp(new Date()),
            create_timestamp: toTimeStamp(new Date()),
            created_timestamp: toTimeStamp(new Date()),
            update_timestamp: toTimeStamp(new Date()),
            updated_timestamp: toTimeStamp(new Date()),
            payment_adjustments: [
                {
                    payment_adjustment_id: paymentAdjustmentId,
                    payment_id: Number(paymentId),
                    status: 'SUCCESS',
                    is_success: true,
                    user_id: Math.floor(Math.random() * 900000000) + 100000000,
                    reason_code: 'SELLER_REFUSES',
                    total_adjustment_amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                    shop_total_adjustment_amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                    buyer_total_adjustment_amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                    total_fee_adjustment_amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                    create_timestamp: toTimeStamp(new Date()),
                    created_timestamp: toTimeStamp(new Date()),
                    update_timestamp: toTimeStamp(new Date()),
                    updated_timestamp: toTimeStamp(new Date()),
                    payment_adjustment_items: [
                        {
                            payment_adjustment_id: paymentAdjustmentId,
                            payment_adjustment_item_id: Math.floor(Math.random() * 99999999999) + 100000000000,
                            adjustment_type: 'TRANS',
                            amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                            shop_amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                            transaction_id: Math.floor(Math.random() * 900000) + 100000,
                            bill_payment_id: Math.floor(Math.random() * 900000) + 100000,
                            created_timestamp: toTimeStamp(new Date()),
                            updated_timestamp: toTimeStamp(new Date())
                        },
                        {
                            payment_adjustment_id: paymentAdjustmentId,
                            payment_adjustment_item_id: Math.floor(Math.random() * 99999999999) + 100000000000,
                            adjustment_type: 'SHIP',
                            amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                            shop_amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                            transaction_id: Math.floor(Math.random() * 900000) + 100000,
                            bill_payment_id: Math.floor(Math.random() * 900000) + 100000,
                            created_timestamp: toTimeStamp(new Date()),
                            updated_timestamp: toTimeStamp(new Date())
                        },
                        {
                            payment_adjustment_id: paymentAdjustmentId,
                            payment_adjustment_item_id: Math.floor(Math.random() * 99999999999) + 100000000000,
                            adjustment_type: 'VAT',
                            amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                            shop_amount: Math.floor(Math.random() * (300 - 10 + 1)) + 10,
                            transaction_id: Math.floor(Math.random() * 900000) + 100000,
                            bill_payment_id: Math.floor(Math.random() * 900000) + 100000,
                            created_timestamp: toTimeStamp(new Date()),
                            updated_timestamp: toTimeStamp(new Date())
                        }
                    ]
                }
            ]
        };
    }
}
