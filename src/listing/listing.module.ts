import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';
import { EtsyListing } from './entities/listing.entity';
import { EtsyListingImage } from './entities/listing-image.entity';
import { EtsyListingVideo } from './entities/listing-video.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EtsyListing, EtsyListingImage, EtsyListingVideo])],
    controllers: [ListingController],
    providers: [ListingService]
})
export class ListingModule {}
