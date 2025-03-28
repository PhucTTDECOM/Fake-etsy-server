import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { EtsyListing } from './entities/listing.entity';
import { EtsyListingImage } from './entities/listing-image.entity';
import { EtsyListingVideo } from './entities/listing-video.entity';
import listingInventoryMock from 'src/mock/listing-invetory.mock';
import { ListingDto, ListingImageDto, VideoDto } from './dto/listing.dto';
import ListingQuery from 'src/query/listing.query';
import { ListResponse } from 'src/common/api.payload';

@Injectable()
export class ListingService {
    constructor(
        @InjectRepository(EtsyListing)
        private readonly listingRepository: Repository<EtsyListing>,
        @InjectRepository(EtsyListingImage)
        private readonly listingImageRepository: Repository<EtsyListingImage>,
        @InjectRepository(EtsyListingVideo)
        private readonly listingVideoRepository: Repository<EtsyListingVideo>
    ) {}

    async getListing(listingId: string, includes?: string[]): Promise<ListingDto> {
        const listing = await this.listingRepository.findOne({ where: { listingId: listingId } });
        if (!listing) {
            throw new BadRequestException('Listing not found');
        }
        const listingDto = new ListingDto(listing);
        if (includes?.length > 0) {
            includes = includes.map((include) => include.toLowerCase());
            if (includes.includes('images')) {
                const listingImages = await this.listingImageRepository.find({ where: { listingId: listingId } });
                listingDto.images = listingImages.map((image) => new ListingImageDto(image));
            }

            if (includes.includes('videos')) {
                const listingVideos = await this.listingVideoRepository.find({ where: { etsyListingId: listingId } });
                listingDto.videos = listingVideos.map((video) => new VideoDto(video)).reduce((acc, video, index) => {
                    return {
                        ...acc,
                        [index]: video
                    }
                }, {})
            }

            if (includes.includes('inventory')) {
                listingDto.inventory = this.getListingInventory(listingId);
            }
        }
        return listingDto;
    }

    async getListingById(listingId: string): Promise<ListingDto> {
        const listing = await this.listingRepository.findOne({ where: { listingId: listingId } });
        if (!listing) {
            throw new BadRequestException('Listing not found');
        }
        const listingDto = new ListingDto(listing);
        return listingDto;
    }

    async getListings(query: ListingQuery, shopId?: string): Promise<ListResponse> {
        let builder = this.listingRepository.createQueryBuilder('listing');
        if (shopId) {
            builder = builder.where('listing.etsyShopId = :shopId', { shopId });
        }
        builder = query.buildQuery(builder);
        console.log('query: ', query);
        const listings = await builder.getMany();
        if (listings.length === 0) {
            return {
                count: 0,
                results: []
            };
        }
        const listingIds = listings.map((listing) => listing.listingId);

        let listingImages = [];
        let listingVideos = [];
        if (query.includes.length > 0) {
            if (query.includes.includes('Images')) {
                listingImages = await this.getListingImages(listingIds);
            }
            if (query.includes.includes('videos')) {
                listingVideos = await this.getListingVideos(listingIds);
            }
        }
        const listingDtos = [];
        for (const listing of listings) {
            const listingDto = new ListingDto(listing);
            if (listingImages.length > 0) {
                listingDto.images = listingImages.filter((image) => image.listingId === listing.listingId).map((image) => new ListingImageDto(image));
            }
            if (listingVideos.length > 0) {
                listingDto.videos = listingVideos.filter((video) => video.etsyListingId === listing.listingId)
                .map((video) => new VideoDto(video))
                .reduce((acc, video, index) => {
                    return {
                        ...acc,
                        [index]: video
                    }
                }, {})
            }
            if (query.includes.includes('Inventory')) {
                listingDto.inventory = this.getListingInventory(listing.listingId);
            } else {
                listingDto.inventory = null;
            }
            listingDtos.push(listingDto);
        }

        builder = this.listingRepository.createQueryBuilder('listing');
        builder = query.buildCountQuery(builder);
        builder = builder.where('listing.etsyShopId = :shopId', { shopId });
        const count = await builder.getCount();

        return {
            count: listings.length,
            results: listingDtos
        };
    }

    getListingImages(listingIds: string[]) {
        return this.listingImageRepository.find({
            where: {
                listingId: In(listingIds)
            }
        });
    }

    getListingImage(listingImageId: string): Promise<EtsyListingImage> {
        return this.listingImageRepository.findOne({
            where: {
                listingImageId: listingImageId
            }
        });
    }

    getListingVideos(listingIds: string[]) {
        return this.listingVideoRepository.find({
            where: {
                etsyListingId: In(listingIds)
            }
        });
    }

    getListingInventory(listingId: string) {
        const mod = parseInt(listingId) % 3;
        return listingInventoryMock[mod];
    }

    generateRandomListingImageId(): number {
        return Math.floor(100000000000 + Math.random() * 900000000000);
    }

    async getRandomListingOfShop(query: ListingQuery, shopId?: string): Promise<any> {
        let builder = this.listingRepository.createQueryBuilder('listing');
        if (shopId) {
            builder = builder.where('listing.etsyShopId = :shopId', { shopId });
        }
        builder = query.buildQuery(builder);
        console.log('query: ', query);
        const listings = await builder.getMany();
        if (listings.length === 0) {
            return {
                count: 0,
                results: []
            };
        }
        const randomIndex = Math.floor(Math.random() * listings.length);
        return new ListingDto(listings[randomIndex]);
    }
}
