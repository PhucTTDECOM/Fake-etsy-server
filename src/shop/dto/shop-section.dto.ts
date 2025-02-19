import { EtsyShopSection } from '../entities/shop-section.entity';

export class EtsyShopSectionDto {
    shop_section_id: number;
    title: string;
    rank: number;
    user_id: number;
    active_listing_count: number;

    constructor(section: EtsyShopSection) {
        this.shop_section_id = Number(section.shopSectionId);
        this.title = section.title || '';
        this.rank = section.rank || 0;
        this.user_id = Number(section.userId);
        this.active_listing_count = section.activeListingCount || 0;
    }
}
