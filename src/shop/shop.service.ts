import { Shop } from 'src/shop/entities/shop.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Repository } from 'typeorm';
import { ShopDto } from './dto/shop.dto';
import { ListResponse } from 'src/common/api.payload';
import { EtsyShopRefund } from './entities/shop-refund.entity';
import { EtsyShopRefundDto } from './dto/shop-refund.dto';
import { EtsyShopSection } from './entities/shop-section.entity';
import { EtsyShopSectionDto } from './dto/shop-section.dto';
import { EtsyShopProductionPartner } from './entities/shop-product-partner.entity';
import { EtsyProductionPartnerDto } from './dto/shop-product-partner.dto';
import { EtsyShopShippingProfile } from './entities/shop-shipping.entity';
import { EtsyShopShippingProfileDestination } from './entities/shop-shipping-destination.entity';
import { EtsyShopShippingProfileCost } from './entities/shop-shipping-cost.entity';
import { EtsyShopShippingProfileUpgrade } from './entities/shop-shipping-upgrade.entity';
import { EtsyShippingProfileDto, ShippingProfileDestinationDto, ShippingProfileUpgradeDto } from './dto/shop-shipping.dto';
import { IToken } from 'src/types/token.type';

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(Shop)
        private readonly shopRepository: Repository<Shop>,
        @InjectRepository(EtsyShopRefund)
        private readonly shopRefundRepository: Repository<EtsyShopRefund>,
        @InjectRepository(EtsyShopSection)
        private readonly shopSectionRepository: Repository<EtsyShopSection>,
        @InjectRepository(EtsyShopProductionPartner)
        private readonly shopProductionPartnerRepository: Repository<EtsyShopProductionPartner>,
        @InjectRepository(EtsyShopShippingProfile)
        private readonly shopShippingProfileRepository: Repository<EtsyShopShippingProfile>,
        @InjectRepository(EtsyShopShippingProfileDestination)
        private readonly shopShippingProfileDestinationRepository: Repository<EtsyShopShippingProfileDestination>,
        @InjectRepository(EtsyShopShippingProfileCost)
        private readonly shopShippingProfileCostRepository: Repository<EtsyShopShippingProfileCost>,
        @InjectRepository(EtsyShopShippingProfileUpgrade)
        private readonly shopShippingProfileUpgradeRepository: Repository<EtsyShopShippingProfileUpgrade>
    ) {}

    async token(refreshToken: string): Promise<IToken> {
        if (!refreshToken?.trim()) {
            refreshToken = '';
        }

        if (!refreshToken) {
            return {
                refresh_token: '768590523.sr4FaG-w3AQM1OuG3MA6_OFX7--nf9BO5LGFs93dUcGFJF30VqqcyCb2DbeB3o9-5VQds76bK4NEdRDU8-h9WlndK7',
                access_token: '768590523.PXpIyBJiBGKOUZXBEoM7dnNDrvHgJsqQKoaBZu3h5oqMpPrYDC_yCm9f2y-OjjZfpnLzmQGE04n9AOEzZ_E0MLUeT0',
                expires_in: 3600,
                token_type: 'Bearer'
            };
        }
        const [tokenBase] = refreshToken.split('.');
        const token = await this.shopRepository.findOne({
            where: { accessToken: Like(`%${tokenBase}%`) }
        });
        if (!token) {
            throw new Error('Invalid token');
        }
        return {
            refresh_token: token.refreshToken,
            access_token: token.accessToken,
            expires_in: 3600,
            token_type: 'Bearer'
        };
    }

    async getShopById(etsyShopId: string): Promise<ShopDto> {
        const shop = await this.shopRepository.findOne({ where: { etsyShopId } });
        if (!shop) {
            throw new NotFoundException(`Shop with ID ${etsyShopId} not found`);
        }
        return new ShopDto(shop);
    }

    async getShopReturnPolicies(etsyShopId: string): Promise<ListResponse> {
        const refunds = await this.shopRefundRepository.find({ where: { etsyShopId: etsyShopId } });
        return {
            results: refunds.map((refund) => new EtsyShopRefundDto(refund)),
            count: refunds.length
        };
    }

    async getShopSections(etsyShopId: string): Promise<ListResponse> {
        const sections = await this.shopSectionRepository.find({ where: { etsyShopId: etsyShopId } });
        return {
            results: sections.map((section) => new EtsyShopSectionDto(section)),
            count: sections.length
        };
    }

    async getShopProductionPartners(etsyShopId: string): Promise<ListResponse> {
        const partners = await this.shopProductionPartnerRepository.find({ where: { etsyShopId: etsyShopId } });
        return {
            results: partners.map((partner) => new EtsyProductionPartnerDto(partner)),
            count: partners.length
        };
    }

    async getShopShippingProfiles(etsyShopId: string): Promise<ListResponse> {
        const profiles = await this.shopShippingProfileRepository.find({ where: { etsyShopId: etsyShopId } });
        if (profiles.length === 0) {
            return { results: [], count: 0 };
        }
        const profileIds = profiles.map((profile) => profile.shippingProfileId);

        const destinations = await this.shopShippingProfileDestinationRepository.find({ where: { shippingProfileId: In(profileIds) } });
        const upgrades = await this.shopShippingProfileUpgradeRepository.find({ where: { shippingProfileId: In(profileIds) } });

        const destinationOrUpgradesIds = [
            ...destinations.map((destination) => destination.shippingProfileId),
            ...upgrades.map((upgrade) => upgrade.shippingProfileId)
        ];
        const costs = await this.shopShippingProfileCostRepository.find({ where: { destinationOrUpgradeId: In(destinationOrUpgradesIds) } });

        // Convert to dto
        const lsProfilesDto = profiles.map((profile) => {
            const profileDto = new EtsyShippingProfileDto(profile);
            const profileDestinations = destinations.filter((destination) => destination.shippingProfileId === profile.shippingProfileId);
            const profileUpgrades = upgrades.filter((upgrade) => upgrade.shippingProfileId === profile.shippingProfileId);

            profileDto.shipping_profile_destinations = profileDestinations.map((destination) => {
                const allCost = costs.filter((cost) => cost.destinationOrUpgradeId === destination.shippingProfileDestinationId);
                const destinationDto = new ShippingProfileDestinationDto(destination);
                allCost.forEach((cost, index) => {
                    if (index === 0) {
                        destinationDto.primary_cost = { amount: parseFloat(cost.amount), currency_code: cost.currencyCode, divisor: cost.divisor };
                    } else {
                        destinationDto.secondary_cost = { amount: parseFloat(cost.amount), currency_code: cost.currencyCode, divisor: cost.divisor };
                    }
                });
                return destinationDto;
            });

            profileDto.shipping_profile_upgrades = profileUpgrades.map((upgrade) => {
                const allCost = costs.filter((cost) => cost.destinationOrUpgradeId === upgrade.upgradeId);
                const upgradeDto = new ShippingProfileUpgradeDto(upgrade);
                allCost.forEach((cost, index) => {
                    if (index === 0) {
                        upgradeDto.price = { amount: parseFloat(cost.amount), currency_code: cost.currencyCode, divisor: cost.divisor };
                    } else {
                        upgradeDto.secondary_price = { amount: parseFloat(cost.amount), currency_code: cost.currencyCode, divisor: cost.divisor };
                    }
                });
                return upgradeDto;
            });
            return profileDto;
        });

        return {
            results: lsProfilesDto,
            count: lsProfilesDto.length
        };
    }
}
