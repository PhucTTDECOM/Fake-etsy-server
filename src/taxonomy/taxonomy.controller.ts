import { Controller, Get } from '@nestjs/common';
import { TaxonomyNode, TaxonomyService } from './taxonomy.service';

interface TaxonomyResponse {
    count: number;
    results: TaxonomyNode[];
}

@Controller('/v3/application/')
export class TaxonomyController {
    constructor(private readonly taxonomyService: TaxonomyService) {}
    @Get('seller-taxonomy/nodes')
    getSellerTaxonomy(): TaxonomyResponse {
        return this.taxonomyService.getSellerTaxonomyData();
    }

    @Get('buyer-taxonomy/nodes')
    getBuyerTaxonomy(): TaxonomyResponse {
        return this.taxonomyService.getBuyerTaxonomyData();
    }
}
