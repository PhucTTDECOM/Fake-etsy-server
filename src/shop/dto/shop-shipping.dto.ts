import { EtsyShopShippingProfileDestination } from '../entities/shop-shipping-destination.entity';
import { EtsyShopShippingProfileUpgrade } from '../entities/shop-shipping-upgrade.entity';
import { EtsyShopShippingProfile } from '../entities/shop-shipping.entity';

class Price {
    amount: number;
    divisor: number;
    currency_code: string;
}

export class ShippingProfileDestinationDto {
    shipping_profile_destination_id: number;
    shipping_profile_id: number;
    origin_country_iso: string;
    destination_country_iso: string;
    destination_region: string;
    primary_cost: Price;
    secondary_cost: Price;
    shipping_carrier_id: number;
    mail_class: string;
    min_delivery_days: number;
    max_delivery_days: number;

    constructor(data: EtsyShopShippingProfileDestination) {
        this.shipping_profile_destination_id = Number(data.shippingProfileDestinationId);
        this.shipping_profile_id = Number(data.shippingProfileId);
        this.origin_country_iso = data.originCountryIso || '';
        this.destination_country_iso = data.destinationCountryIso || '';
        this.destination_region = data.destinationRegion || '';
        this.primary_cost = { amount: 0, currency_code: '', divisor: 0 };
        this.secondary_cost = { amount: 0, currency_code: '', divisor: 0 };
        this.shipping_carrier_id = Number(data.shippingCarrierId);
        this.mail_class = data.mailClass || '';
        this.min_delivery_days = data.minDeliveryDays || 0;
        this.max_delivery_days = data.maxDeliveryDays || 0;
    }
}

export class ShippingProfileUpgradeDto {
    shipping_profile_id: number;
    upgrade_id: number;
    upgrade_name: string;
    type: string;
    rank: number;
    language: string;
    price: Price;
    secondary_price: Price;
    shipping_carrier_id: number;
    mail_class: string;
    min_delivery_days: number;
    max_delivery_days: number;

    constructor(data: EtsyShopShippingProfileUpgrade) {
        this.shipping_profile_id = Number(data.shippingProfileId);
        this.upgrade_id = Number(data.upgradeId);
        this.upgrade_name = data.upgradeName || '';
        this.type = data.type || '';
        this.rank = data.rank || 0;
        this.language = data.language || '';
        this.price = { amount: 0, currency_code: '', divisor: 0 };
        this.secondary_price = { amount: 0, currency_code: '', divisor: 0 };
        this.shipping_carrier_id = Number(data.shippingCarrierId);
        this.mail_class = data.mailClass || '';
        this.min_delivery_days = data.minDeliveryDays || 0;
        this.max_delivery_days = data.maxDeliveryDays || 0;
    }
}

export class EtsyShippingProfileDto {
    shipping_profile_id: number;
    title: string;
    user_id: number;
    min_processing_days: number;
    max_processing_days: number;
    processing_days_display_label: string;
    origin_country_iso: string;
    is_deleted: boolean;
    shipping_profile_destinations: ShippingProfileDestinationDto[];
    shipping_profile_upgrades: ShippingProfileUpgradeDto[];
    origin_postal_code: string;
    profile_type: string;
    domestic_handling_fee: number;
    international_handling_fee: number;

    constructor(data: EtsyShopShippingProfile) {
        this.shipping_profile_id = Number(data.shippingProfileId);
        this.title = data.title || '';
        this.user_id = Number(data.userId);
        this.min_processing_days = data.minProcessingDays || 0;
        this.max_processing_days = data.maxProcessingDays || 0;
        this.processing_days_display_label = data.processingDaysDisplayLabel || '';
        this.origin_country_iso = data.originCountryIso || '';
        this.is_deleted = Boolean(data.isDeleted);
        this.origin_postal_code = data.originPostalCode || '';
        this.profile_type = data.profileType || '';
        this.domestic_handling_fee = Number(data.domesticHandlingFee);
        this.international_handling_fee = Number(data.internationalHandlingFee);
        this.shipping_profile_destinations = [];
        this.shipping_profile_upgrades = [];
    }
}
