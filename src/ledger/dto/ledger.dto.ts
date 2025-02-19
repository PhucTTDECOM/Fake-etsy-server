import { toTimeStamp } from 'src/utils/utils';
import { EtsyLedgerEntryPaymentAdjustmentItem } from '../entities/ledger-payment-adjustment-item.entity';
import { EtsyLedgerEntryPaymentAdjustment } from '../entities/ledger-payment-adjustment.entity';
import { EtsyLedgerEntry } from '../entities/ledger.entity';

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

    constructor(data: EtsyLedgerEntryPaymentAdjustmentItem) {
        this.payment_adjustment_id = Number(data.paymentAdjustmentId);
        this.payment_adjustment_item_id = Number(data.paymentAdjustmentItemId);
        this.adjustment_type = data.adjustmentType;
        this.amount = Number(data.amount);
        this.shop_amount = Number(data.shopAmount);
        this.transaction_id = Number(data.transactionId);
        this.bill_payment_id = Number(data.billPaymentId);
        this.created_timestamp = toTimeStamp(data.createdTimestamp);
        this.updated_timestamp = toTimeStamp(data.updatedTimestamp);
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

    constructor(data: EtsyLedgerEntryPaymentAdjustment) {
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
        this.create_timestamp = toTimeStamp(data.createTimestamp);
        this.created_timestamp = toTimeStamp(data.createdTimestamp);
        this.update_timestamp = toTimeStamp(data.updateTimestamp);
        this.updated_timestamp = toTimeStamp(data.updatedTimestamp);
    }
}

export class EtsyLedgerEntryDto {
    entry_id: number;
    ledger_id: number;
    sequence_number: number;
    amount: number;
    currency: string;
    description: string;
    balance: number;
    create_date: number;
    created_timestamp: number;
    ledger_type: string;
    reference_type: string;
    reference_id: string;
    payment_adjustments: PaymentAdjustmentDto[];

    constructor(data: EtsyLedgerEntry) {
        this.entry_id = Number(data.entryId);
        this.ledger_id = Number(data.ledgerId);
        this.sequence_number = data.sequenceNumber;
        this.amount = Number(data.amount);
        this.currency = data.currency;
        this.description = data.description;
        this.balance = Number(data.balance);
        this.create_date = toTimeStamp(data.createDate);
        this.created_timestamp = toTimeStamp(data.createdTimestamp);
        this.ledger_type = data.ledgerType;
        this.reference_type = data.referenceType;
        this.reference_id = data.referenceId;
        this.payment_adjustments = [];
    }
}
