import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopDto } from './dto/shop.dto';
import { isPositiveStrNumber } from 'src/utils/utils';

@Controller('/v3/application/shops')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Get('/:etsyShopId')
    async getShopById(@Param('etsyShopId') etsyShopId: string): Promise<ShopDto> {
        if (!isPositiveStrNumber(etsyShopId)) {
            throw new BadRequestException('Invalid shop ID');
        }
        return this.shopService.getShopById(etsyShopId);
    }

    @Get('/:etsyShopId/policies/return')
    async getShopReturnPolicies(@Param('etsyShopId') etsyShopId: string): Promise<any> {
        if (!isPositiveStrNumber(etsyShopId)) {
            throw new BadRequestException('Invalid shop ID');
        }
        return this.shopService.getShopReturnPolicies(etsyShopId);
    }

    @Get('/:etsyShopId/sections')
    async getShopSections(@Param('etsyShopId') etsyShopId: string): Promise<any> {
        if (!isPositiveStrNumber(etsyShopId)) {
            throw new BadRequestException('Invalid shop ID');
        }
        return this.shopService.getShopSections(etsyShopId);
    }

    @Get('/:etsyShopId/production-partners')
    async getShopProductionPartners(@Param('etsyShopId') etsyShopId: string): Promise<any> {
        if (!isPositiveStrNumber(etsyShopId)) {
            throw new BadRequestException('Invalid shop ID');
        }
        return this.shopService.getShopProductionPartners(etsyShopId);
    }

    @Get('/:etsyShopId/shipping-profiles')
    async getShopShippingProfiles(@Param('etsyShopId') etsyShopId: string): Promise<any> {
        if (!isPositiveStrNumber(etsyShopId)) {
            throw new BadRequestException('Invalid shop ID');
        }
        return this.shopService.getShopShippingProfiles(etsyShopId);
    }
}
