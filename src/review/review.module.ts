import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtsyReview } from './entities/review.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EtsyReview])],
    controllers: [ReviewController],
    providers: [ReviewService]
})
export class ReviewModule {}
