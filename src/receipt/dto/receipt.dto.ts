import { toTimeStamp } from 'src/utils/utils';
import { EtsyReceiptRefund } from '../entities/receipt.refund.entity';
import { EtsyReceiptShipment } from '../entities/receipt.shipment.entity';
import { EtsyReceiptTransactionVariation } from '../entities/receipt.transaction-variation.entity';
import { EtsyReceiptTransaction } from '../entities/receipt.transaction.entity';
import { EtsyReceipt } from './../entities/receipt.entity';
// dto/receipt.dto.ts
export class ReceiptDto {
    receipt_id: number;
    receipt_type: number;
    seller_user_id: number;
    seller_email: string;
    buyer_user_id: number;
    buyer_email: string;
    name: string;
    first_line: string;
    second_line: string;
    city: string;
    state: string;
    zip: string;
    status: string;
    formatted_address: string;
    country_iso: string;
    payment_method: string;
    payment_email: string;
    message_from_seller: string;
    message_from_buyer: string;
    message_from_payment: string;
    is_paid: boolean;
    is_shipped: boolean;
    create_timestamp: number;
    created_timestamp: number;
    update_timestamp: number;
    updated_timestamp: number;
    is_gift: boolean;
    gift_message: string;
    gift_sender: string;
    grandtotal: AmountDto;
    subtotal: AmountDto;
    total_price: AmountDto;
    total_shipping_cost: AmountDto;
    total_tax_cost: AmountDto;
    total_vat_cost: AmountDto;
    discount_amt: AmountDto;
    gift_wrap_price: AmountDto;
    shipments: ShipmentDto[];
    transactions: TransactionDto[];
    refunds: RefundDto[];

    constructor(receipt: EtsyReceipt) {
        this.receipt_id = parseInt(receipt.receiptId, 10);
        this.receipt_type = receipt.receiptType ? parseInt(receipt.receiptType, 10) : 0; // Default to 0 if not set
        this.seller_user_id = parseInt(receipt.sellerUserId, 10);
        this.seller_email = receipt.sellerEmail;
        this.buyer_user_id = parseInt(receipt.buyerUserId, 10);
        this.buyer_email = receipt.buyerEmail;
        this.name = receipt.name;
        this.first_line = receipt.firstLine;
        this.second_line = receipt.secondLine;
        this.city = receipt.city;
        this.state = receipt.state;
        this.zip = receipt.zip;
        this.status = receipt.status;
        this.formatted_address = receipt.formattedAddress;
        this.country_iso = receipt.countryIso;
        this.payment_method = receipt.paymentMethod;
        this.payment_email = receipt.paymentEmail;
        this.message_from_seller = receipt.messageFromSeller;
        this.message_from_buyer = receipt.messageFromBuyer;
        this.message_from_payment = receipt.messageFromPayment;
        this.is_paid = receipt.isPaid; // Convert boolean to boolean
        this.is_shipped = receipt.isShipped; // Convert boolean to boolean
        this.create_timestamp = toTimeStamp(receipt.createTimestamp);
        // this.created_timestamp = toTimeStamp(receipt.createdTimestamp);
        this.created_timestamp = toTimeStamp(new Date());
        this.update_timestamp = toTimeStamp(receipt.updateTimestamp);
        this.updated_timestamp = toTimeStamp(receipt.updatedTimestamp);
        this.is_gift = receipt.isGift; // Convert boolean to boolean
        this.gift_message = receipt.giftMessage;
        this.gift_sender = '';
        this.grandtotal = this.createAmountDto(receipt.grandtotalAmt, receipt.grandtotalDivisor, receipt.grandtotalCurrencyCode);
        this.subtotal = this.createAmountDto(receipt.subtotalAmt, receipt.subtotalDivisor, receipt.subtotalCurrencyCode);
        this.total_price = this.createAmountDto(receipt.totalPriceAmt, receipt.totalPriceDivisor, receipt.totalPriceCurrencyCode);
        this.total_shipping_cost = this.createAmountDto(receipt.totalShippingCostAmt, receipt.totalShippingCostDivisor, receipt.totalShippingCostCurrencyCode);
        this.total_tax_cost = this.createAmountDto(receipt.totalTaxCostAmt, receipt.totalTaxCostDivisor, receipt.totalTaxCostCurrencyCode);
        this.total_vat_cost = this.createAmountDto(receipt.totalVatCostAmt, receipt.totalVatCostDivisor, receipt.totalVatCostCurrencyCode);
        this.discount_amt = this.createAmountDto(receipt.discountAmtAmt, receipt.discountAmtDivisor, receipt.discountAmtCurrencyCode);
        this.gift_wrap_price = this.createAmountDto(receipt.giftWrapPriceAmt, receipt.giftWrapPriceDivisor, receipt.giftWrapPriceCurrencyCode);
        this.shipments = []; // Initialize with an empty array, fill later
        this.transactions = []; // Initialize with an empty array, fill later
        this.refunds = []; // Initialize with an empty array, fill later
    }

    private createAmountDto(amount: string, divisor: number, currencyCode: string): AmountDto {
        return {
            amount: parseFloat(amount) / divisor,
            currency_code: currencyCode,
            divisor
        };
    }
}

export class AmountDto {
    amount: number;
    divisor: number;
    currency_code: string;

    constructor(amount: string, divisor: number, currencyCode: string) {
        this.amount = parseFloat(amount) / divisor;
        this.divisor = divisor;
        this.currency_code = currencyCode;
    }
}

export class ShipmentDto {
    receipt_shipping_id: number;
    shipment_notification_timestamp: number;
    carrier_name: string;
    tracking_code: string;
    receipt_id: string;

    constructor(shipment: EtsyReceiptShipment) {
        this.receipt_shipping_id = Number(shipment.receiptShippingId);
        this.shipment_notification_timestamp = toTimeStamp(shipment.shipmentNotificationTimestamp);
        this.carrier_name = shipment.carrierName;
        this.tracking_code = shipment.trackingCode;
        this.receipt_id = shipment.etsyReceiptId;
    }
}

export class TransactionDto {
    transaction_id: number;
    title: string;
    description: string;
    seller_user_id: number;
    buyer_user_id: number;
    create_timestamp: number;
    created_timestamp: number;
    paid_timestamp: number;
    shipped_timestamp: number;
    quantity: number;
    listing_image_id: number;
    receipt_id: number;
    is_digital: boolean;
    file_data: string;
    listing_id: number;
    transaction_type: string;
    product_id: number;
    sku: string;
    price: AmountDto;
    shipping_cost: AmountDto;
    variations: VariationDto[];
    product_data: ProductDataDto[];
    shipping_profile_id: number;
    min_processing_days: number;
    max_processing_days: number;
    shipping_method: string;
    shipping_upgrade: string;
    expected_ship_date: number;
    buyer_coupon: number;
    shop_coupon: number;

    constructor(transaction: EtsyReceiptTransaction) {
        this.transaction_id = Number(transaction.transactionId);
        this.title = transaction.title;
        this.description = transaction.description;
        this.seller_user_id = Number(transaction.sellerUserId);
        this.buyer_user_id = Number(transaction.buyerUserId);
        this.create_timestamp = toTimeStamp(transaction.createTimestamp);
        this.created_timestamp = toTimeStamp(transaction.createdTimestamp);
        this.paid_timestamp = toTimeStamp(transaction.paidTimestamp);
        this.shipped_timestamp = toTimeStamp(transaction.shippedTimestamp);
        this.quantity = transaction.quantity;
        this.listing_image_id = Number(transaction.listingImageId);
        this.receipt_id = Number(transaction.receiptId);
        this.is_digital = transaction.isDigital;
        this.file_data = transaction.fileData;
        this.listing_id = Number(transaction.listingId);
        this.transaction_type = transaction.transactionType;
        this.product_id = Number(transaction.productId);
        this.sku = transaction.sku;

        // Initialize AmountDto for price and shipping cost
        this.price = new AmountDto(transaction.priceAmt, transaction.priceDivisor, transaction.priceCurrencyCode);
        this.shipping_cost = new AmountDto(transaction.shippingCostAmt, transaction.shippingCostDivisor, transaction.shippingCostCurrencyCode);

        this.variations = []; // Initialize variations array if needed
        this.product_data = []; // Initialize product data array if needed
        this.shipping_profile_id = Number(transaction.shippingProfileId);
        this.min_processing_days = transaction.minProcessingDays;
        this.max_processing_days = transaction.maxProcessingDays;
        this.shipping_method = transaction.shippingMethod;
        this.shipping_upgrade = transaction.shippingUpgrade;
        this.expected_ship_date = toTimeStamp(transaction.expectedShipDate);
        this.buyer_coupon = Number(transaction.buyerCoupon);
        this.shop_coupon = Number(transaction.shopCoupon);
    }
}

export class VariationDto {
    property_id: number;
    value_id: number;
    formatted_name: string;
    formatted_value: string;

    constructor(variation: EtsyReceiptTransactionVariation) {
        this.property_id = Number(variation.propertyId);
        this.value_id = Number(variation.valueId);
        this.formatted_name = variation.formattedName;
        this.formatted_value = variation.formattedValue;
    }
}

export class ProductDataDto {
    property_id: number;
    property_name: string;
    scale_id: number;
    scale_name: string;
    value_ids: number[];
    values: string[];
}

export class RefundDto {
    amount: AmountDto;
    created_timestamp: number;
    reason: string;
    note_from_issuer: string;
    status: string;
    receipt_id: string;

    constructor(refund: EtsyReceiptRefund) {
        this.amount = new AmountDto(refund.amountAmt, refund.amountDivisor, refund.amountCurrencyCode);
        this.created_timestamp = toTimeStamp(refund.createdTimestamp);
        this.reason = refund.reason;
        this.note_from_issuer = refund.noteFromIssuer;
        this.status = refund.status;
        this.receipt_id = refund.etsyReceiptId;
    }
}
