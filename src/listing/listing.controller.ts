import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ListResponse } from 'src/common/api.payload';
import ListingQuery from 'src/query/listing.query';
import { isPositiveStrNumber } from 'src/utils/utils';
import { ListingDto } from './dto/listing.dto';
import { UploadImageDto } from './dto/upload-image.dto';
import { EtsyListingImage } from './entities/listing-image.entity';
import { ListingService } from './listing.service';

@Controller('/v3/application')
export class ListingController {
    constructor(private readonly listingService: ListingService) {}

    @Get('/listings/:listingId')
    async getListing(
        @Query('listing_ids') listingIds: string,
        @Param('listingId') listingId: string,
        @Query('includes') includes: string
    ): Promise<ListingDto | ListResponse> {
        let includesArray = [];
        if (includes?.trim()) {
            includesArray = includes.split(',').map((include) => include.trim());
        }
        if (listingId === 'batch') {
            const listingQuery = new ListingQuery();
            listingQuery.listingIds = listingIds;
            console.log('listingIds', listingIds);
            listingQuery.includes = includesArray;
            console.log('includes', includes);
            return this.listingService.getListings(listingQuery);
        }
        if (!isPositiveStrNumber(listingId)) {
            throw new BadRequestException('Invalid listing id');
        }
        return this.listingService.getListing(listingId, includesArray);
    }

    @Get('/shops/:shopId/listings')
    async getListingsByShop(@Param('shopId') shopId: string, @Query() query: any): Promise<any> {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }
        const listingQuery = new ListingQuery();
        Object.assign(listingQuery, query);
        if (query?.includes?.trim() && typeof query.includes === 'string') {
            listingQuery.includes = query.includes.split(',').map((include: string) => include.trim().toLowerCase());
        } else {
            listingQuery.includes = [];
        }
        return this.listingService.getListings(listingQuery, shopId);
    }

    @Post('/shops/:shopId/listings')
    async getFirstListingOfShop(@Param('shopId') shopId: string, @Query() query: any): Promise<any> {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }
        const listingQuery = new ListingQuery();
        Object.assign(listingQuery, query);
        return this.listingService.getRandomListingOfShop(listingQuery, shopId);
    }

    @Delete('/shops/:shopId/listings/:listing_id/images/:listing_image_id')
    async deleteListingImage(
        @Param('shopId') shopId: string,
        @Param('listing_id') listingId: string,
        @Param('listing_image_id') listingImageId: string,
        @Res() res: Response
    ): Promise<any> {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shop id');
        }
        if (!isPositiveStrNumber(listingId)) {
            throw new BadRequestException('Invalid listing id');
        }
        if (!isPositiveStrNumber(listingImageId)) {
            throw new BadRequestException('Invalid listing Image id');
        }
        return res.status(200).json('Delete listing image successfully');
    }

    @Delete('listings/:listing_id')
    async deleteListing(@Param('listing_id') listingId: string, @Res() res: Response): Promise<any> {
        if (!isPositiveStrNumber(listingId)) {
            throw new BadRequestException('Invalid listing id');
        }
        // Xác suất 50% trả về lỗi 400
        if (Math.random() < 0.4) {
            throw new BadRequestException('Random failure: Unable to delete listing');
        }
        return res.status(200).json('The Listing resource was correctly deleted');
    }

    @Post('/shops/:shop_id/listings/:listing_id/images')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
                }
            }),
            limits: {
                fileSize: 50 * 1024 * 1024
            }
        })
    )
    async uploadImage(
        @Param('shop_id') shopId: number,
        @Param('listing_id') listingId: number,
        @UploadedFile() image: Express.Multer.File,
        @Body() uploadImageDto: UploadImageDto,
        @Res() res: Response
    ) {
        if (!image && !uploadImageDto.listing_image_id) {
            return res.status(400).json({ message: 'File is required' });
        }
        // Update image
        if (!image && uploadImageDto.listing_image_id) {
            let listingImage: EtsyListingImage = await this.listingService.getListingImage('' + uploadImageDto.listing_image_id);
            console.log('listingImage', listingImage);

            return res.status(200).json({
                listing_id: parseInt('' + listingId),
                listing_image_id: parseInt(listingImage.listingImageId),
                hex_code: listingImage.hexCode,
                red: 0,
                green: 0,
                blue: 0,
                hue: 0,
                saturation: 0,
                brightness: 0,
                is_black_and_white: listingImage.isBlackAndWhite,
                creation_tsz: Date.now(),
                created_timestamp: Date.now(),
                rank: uploadImageDto.rank,
                url_75x75: listingImage.url75x75,
                url_170x135: listingImage.url170x135,
                url_570xN: listingImage.url570xN,
                url_fullxfull: listingImage.urlFullxfull,
                full_height: listingImage.fullHeight,
                full_width: listingImage.fullWidth,
                alt_text: uploadImageDto.alt_text
            });
        }
        // Upload image
        return res.status(200).json({
            listing_id: parseInt('' + listingId),
            listing_image_id: this.listingService.generateRandomListingImageId(),
            hex_code: 'string',
            red: 0,
            green: 0,
            blue: 0,
            hue: 0,
            saturation: 0,
            brightness: 0,
            is_black_and_white: false,
            creation_tsz: Date.now(),
            created_timestamp: Date.now(),
            rank: uploadImageDto.rank,
            url_75x75: `http://localhost:9999/uploads/${image.filename}`,
            url_170x135: `http://localhost:9999/uploads/${image.filename}`,
            url_570xN: `http://localhost:9999/uploads/${image.filename}`,
            url_fullxfull: `http://localhost:9999/uploads/${image.filename}`,
            full_height: 0,
            full_width: 0,
            alt_text: uploadImageDto.alt_text
        });
    }

    @Patch('/shops/:shop_id/listings/:listing_id')
    async updateListing(@Param('shop_id') string: number, @Param('listing_id') listingId: string, @Res() res: Response) {
        const listingDto = await this.listingService.getListingById(listingId);
        return res.status(200).json(listingDto);
    }

    @Get('/listings/:listing_id/inventory')
    async getListingInventory(@Param('listing_id') listingId: string) {
        return this.listingService.getListingInventory(listingId);
    }

    @Put('/listings/:listing_id/inventory')
    async updateListingInventory(@Param('listing_id') listingId: string, @Res() res: Response) {
        const mock = this.listingService.getListingInventory(listingId);
        return res.status(200).json(mock);
    }
}
