import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('tbl_etsy_listing_v3')
export class EtsyListing {
    @PrimaryColumn({ name: '_app_user_id', type: 'varchar', length: 45 })
    appUserId: string;

    @PrimaryColumn({ name: '_etsy_user_id', type: 'varchar', length: 45 })
    etsyUserId: string;

    @PrimaryColumn({ name: '_etsy_shop_name', type: 'varchar', length: 150 })
    etsyShopName: string;

    @PrimaryColumn({ name: 'listing_id', type: 'varchar', length: 45 })
    listingId: string;

    @Column({ name: '_date_crawled', type: 'datetime', nullable: true })
    dateCrawled: Date;

    @Column({ name: 'shop_id', type: 'varchar', length: 45, nullable: true })
    shopId: string;

    @Column({ name: 'title', type: 'varchar', length: 200, nullable: true })
    title: string;

    @Column({ name: 'description', type: 'varchar', length: 6000, nullable: true })
    description: string;

    @Column({ name: 'state', type: 'varchar', length: 20, nullable: true })
    state: string;

    @Column({ name: 'original_creation_timestamp', type: 'datetime', nullable: true })
    originalCreationTimestamp: Date;

    @Column({ name: 'ending_timestamp', type: 'datetime', nullable: true })
    endingTimestamp: Date;

    @Column({ name: 'updated_timestamp', type: 'datetime', nullable: true })
    updatedTimestamp: Date;

    @Column({ name: 'state_timestamp', type: 'datetime', nullable: true })
    stateTimestamp: Date;

    @Column({ name: 'quantity', type: 'int', nullable: true })
    quantity: number;

    @Column({ name: 'shop_section_id', type: 'varchar', length: 45, nullable: true })
    shopSectionId: string;

    @Column({ name: 'featured_rank', type: 'int', nullable: true })
    featuredRank: number;

    @Column({ name: 'url', type: 'varchar', length: 200, nullable: true })
    url: string;

    @Column({ name: 'num_favorers', type: 'int', nullable: true })
    numFavorers: number;

    @Column({ name: 'non_taxable', type: 'boolean', nullable: true })
    nonTaxable: boolean;

    @Column({ name: 'is_taxable', type: 'boolean', nullable: true })
    isTaxable: boolean;

    @Column({ name: 'is_customizable', type: 'boolean', nullable: true })
    isCustomizable: boolean;

    @Column({ name: 'is_personalizable', type: 'boolean', nullable: true })
    isPersonalizable: boolean;

    @Column({ name: 'personalization_is_required', type: 'boolean', nullable: true })
    personalizationIsRequired: boolean;

    @Column({ name: 'personalization_char_count_max', type: 'int', nullable: true })
    personalizationCharCountMax: number;

    @Column({ name: 'personalization_instructions', type: 'varchar', length: 500, nullable: true })
    personalizationInstructions: string;

    @Column({ name: 'listing_type', type: 'varchar', length: 20, nullable: true })
    listingType: string;

    @Column({ name: 'tags', type: 'varchar', length: 300, nullable: true })
    tags: string;

    @Column({ name: 'materials', type: 'varchar', length: 300, nullable: true })
    materials: string;

    @Column({ name: 'shipping_profile_id', type: 'varchar', length: 45, nullable: true })
    shippingProfileId: string;

    @Column({ name: 'return_policy_id', type: 'varchar', length: 45, nullable: true })
    returnPolicyId: string;

    @Column({ name: 'processing_min', type: 'int', nullable: true })
    processingMin: number;

    @Column({ name: 'processing_max', type: 'int', nullable: true })
    processingMax: number;

    @Column({ name: 'who_made', type: 'varchar', length: 20, nullable: true })
    whoMade: string;

    @Column({ name: 'when_made', type: 'varchar', length: 20, nullable: true })
    whenMade: string;

    @Column({ name: 'is_supply', type: 'boolean', nullable: true })
    isSupply: boolean;

    @Column({ name: 'item_weight', type: 'varchar', length: 50, nullable: true })
    itemWeight: string;

    @Column({ name: 'item_weight_unit', type: 'varchar', length: 20, nullable: true })
    itemWeightUnit: string;

    @Column({ name: 'item_length', type: 'varchar', length: 50, nullable: true })
    itemLength: string;

    @Column({ name: 'item_width', type: 'varchar', length: 50, nullable: true })
    itemWidth: string;

    @Column({ name: 'item_height', type: 'varchar', length: 50, nullable: true })
    itemHeight: string;

    @Column({ name: 'item_dimensions_unit', type: 'varchar', length: 20, nullable: true })
    itemDimensionsUnit: string;

    @Column({ name: 'is_private', type: 'boolean', nullable: true })
    isPrivate: boolean;

    @Column({ name: 'style', type: 'varchar', length: 300, nullable: true })
    style: string;

    @Column({ name: 'file_data', type: 'varchar', length: 500, nullable: true })
    fileData: string;

    @Column({ name: 'has_variations', type: 'boolean', nullable: true })
    hasVariations: boolean;

    @Column({ name: 'should_auto_renew', type: 'boolean', nullable: true })
    shouldAutoRenew: boolean;

    @Column({ name: 'language', type: 'varchar', length: 10, nullable: true })
    language: string;

    @Column({ name: '_price_amt', type: 'varchar', length: 50, nullable: true })
    priceAmt: string;

    @Column({ name: '_price_divisor', type: 'int', nullable: true })
    priceDivisor: number;

    @Column({ name: '_price_currency_code', type: 'varchar', length: 10, nullable: true })
    priceCurrencyCode: string;

    @Column({ name: 'taxonomy_id', type: 'varchar', length: 45, nullable: true })
    taxonomyId: string;

    @Column({ name: '_production_partner_ids', type: 'varchar', length: 200, nullable: true })
    productionPartnerIds: string;

    @Column({ name: 'skus', type: 'varchar', length: 300, nullable: true })
    skus: string;

    @Column({ name: 'views', type: 'int', nullable: true })
    views: number;

    @Column({ name: '_is_app_deleted', type: 'boolean', default: 0 })
    isAppDeleted: boolean;
}
