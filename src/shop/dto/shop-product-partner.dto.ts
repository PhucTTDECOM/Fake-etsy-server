import { EtsyShopProductionPartner } from '../entities/shop-product-partner.entity';

export class EtsyProductionPartnerDto {
    production_partner_id: number;
    partner_name: string;
    location: string;

    constructor(partner: EtsyShopProductionPartner) {
        this.production_partner_id = Number(partner.productionPartnerId);
        this.partner_name = partner.partnerName || '';
        this.location = partner.location || '';
    }
}
