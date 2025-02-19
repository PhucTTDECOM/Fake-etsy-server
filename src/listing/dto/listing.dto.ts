import { toTimeStamp } from 'src/utils/utils';
import { EtsyListingImage } from '../entities/listing-image.entity';
import { EtsyListingVideo } from '../entities/listing-video.entity';
import { EtsyListing } from '../entities/listing.entity';

class Price {
    amount: number;
    divisor: number;
    currency_code: string;
}

export class ListingImageDto {
    listing_id: number;
    listing_image_id: number;
    hex_code: string;
    red: number;
    green: number;
    blue: number;
    hue: number;
    saturation: number;
    brightness: number;
    is_black_and_white: boolean;
    creation_tsz: number;
    created_timestamp: number;
    rank: number;
    url_75x75: string;
    url_170x135: string;
    url_570xN: string;
    url_fullxfull: string;
    full_height: number;
    full_width: number;
    alt_text: string;

    constructor(image: EtsyListingImage) {
        this.listing_id = Number(image.listingId);
        this.listing_image_id = Number(image.listingImageId);
        this.hex_code = image.hexCode;
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.hue = 0;
        this.saturation = 0;
        this.brightness = 0;
        this.is_black_and_white = image.isBlackAndWhite;
        this.creation_tsz = toTimeStamp(image.dateCrawled);
        this.created_timestamp = toTimeStamp(image.dateCrawled);
        this.rank = image.rank;
        this.url_75x75 = image.url75x75;
        this.url_170x135 = image.url170x135;
        this.url_570xN = image.url570xN;
        this.url_fullxfull = image.urlFullxfull;
        this.full_height = image.fullHeight;
        this.full_width = image.fullWidth;
        this.alt_text = image.altText;
    }
}

export class VideoDto {
    video_id: number;
    height: number;
    width: number;
    thumbnail_url: string;
    video_url: string;
    video_state: string;

    constructor(video: EtsyListingVideo) {
        this.video_id = Number(video.videoId);
        this.height = video.height;
        this.width = video.width;
        this.thumbnail_url = video.thumbnailUrl;
        this.video_url = video.videoUrl;
        this.video_state = video.videoState;
    }
}

export class ListingDto {
    listing_id: number;
    user_id: number;
    shop_id: number;
    title: string;
    description: string;
    state: string;
    creation_timestamp: number;
    created_timestamp: number;
    ending_timestamp: number;
    original_creation_timestamp: number;
    last_modified_timestamp: number;
    updated_timestamp: number;
    state_timestamp: number;
    quantity: number;
    shop_section_id: number;
    featured_rank: number;
    url: string;
    num_favorers: number;
    non_taxable: boolean;
    is_taxable: boolean;
    is_customizable: boolean;
    is_personalizable: boolean;
    personalization_is_required: boolean;
    personalization_char_count_max: number;
    personalization_instructions: string;
    listing_type: string;
    tags: string[];
    materials: string[];
    shipping_profile_id: number;
    return_policy_id: number;
    processing_min: number;
    processing_max: number;
    who_made: string;
    when_made: string;
    is_supply: boolean;
    item_weight: number;
    item_weight_unit: string;
    item_length: number;
    item_width: number;
    item_height: number;
    item_dimensions_unit: string;
    is_private: boolean;
    style: string[];
    file_data: string;
    has_variations: boolean;
    should_auto_renew: boolean;
    language: string;
    price: Price;
    taxonomy_id: number;
    images: ListingImageDto[];
    inventory: any | null;
    videos: VideoDto[];
    skus: string[];
    views: number;

    constructor(etsyListing: EtsyListing) {
        this.listing_id = Number(etsyListing.listingId);
        this.user_id = Number(etsyListing.etsyUserId);
        this.shop_id = Number(etsyListing.shopId);
        this.title = etsyListing.title;
        this.description = etsyListing.description;
        this.state = etsyListing.state;
        this.creation_timestamp = toTimeStamp(etsyListing.dateCrawled);
        this.created_timestamp = toTimeStamp(etsyListing.originalCreationTimestamp);
        this.ending_timestamp = toTimeStamp(etsyListing.endingTimestamp);
        // this.original_creation_timestamp = toTimeStamp(etsyListing.originalCreationTimestamp);
        this.original_creation_timestamp = toTimeStamp(new Date());
        this.last_modified_timestamp = toTimeStamp(etsyListing.updatedTimestamp);
        this.updated_timestamp = toTimeStamp(etsyListing.updatedTimestamp);
        this.state_timestamp = toTimeStamp(etsyListing.stateTimestamp);
        this.quantity = etsyListing.quantity;
        this.shop_section_id = Number(etsyListing.shopSectionId);
        this.featured_rank = etsyListing.featuredRank;
        this.url = etsyListing.url;
        // this.num_favorers = etsyListing.numFavorers;
        this.num_favorers = Math.floor(Math.random() * 10) + 1;
        this.views = Math.floor(Math.random() * 10) + 1;
        this.non_taxable = etsyListing.nonTaxable;
        this.is_taxable = etsyListing.isTaxable;
        this.is_customizable = etsyListing.isCustomizable;
        this.is_personalizable = etsyListing.isPersonalizable;
        this.personalization_is_required = etsyListing.personalizationIsRequired;
        this.personalization_char_count_max = etsyListing.personalizationCharCountMax;
        this.personalization_instructions = etsyListing.personalizationInstructions;
        this.listing_type = etsyListing.listingType;
        this.tags = etsyListing.tags ? etsyListing.tags.split(',') : [];
        this.materials = etsyListing.materials ? etsyListing.materials.split(',') : [];
        this.shipping_profile_id = Number(etsyListing.shippingProfileId);
        this.return_policy_id = Number(etsyListing.returnPolicyId);
        this.processing_min = etsyListing.processingMin;
        this.processing_max = etsyListing.processingMax;
        this.who_made = etsyListing.whoMade;
        this.when_made = etsyListing.whenMade;
        this.is_supply = etsyListing.isSupply;
        this.item_weight = etsyListing.itemWeight ? parseFloat(etsyListing.itemWeight) : null;
        this.item_weight_unit = etsyListing.itemWeightUnit;
        this.item_length = etsyListing.itemLength ? parseFloat(etsyListing.itemLength) : null;
        this.item_width = etsyListing.itemWidth ? parseFloat(etsyListing.itemWidth) : null;
        this.item_height = etsyListing.itemHeight ? parseFloat(etsyListing.itemHeight) : null;
        this.item_dimensions_unit = etsyListing.itemDimensionsUnit;
        this.is_private = etsyListing.isPrivate;
        this.style = etsyListing.style ? etsyListing.style.split(',') : [];
        this.file_data = etsyListing.fileData;
        this.has_variations = etsyListing.hasVariations;
        this.should_auto_renew = etsyListing.shouldAutoRenew;
        this.language = etsyListing.language;
        this.price = {
            amount: Number(etsyListing.priceAmt),
            divisor: etsyListing.priceDivisor,
            currency_code: etsyListing.priceCurrencyCode
        };
        this.taxonomy_id = Number(etsyListing.taxonomyId);
        this.images = [];
        this.inventory = null;
        this.videos = [];
        this.skus = etsyListing.skus ? etsyListing.skus.split(',') : [];
    }
}
