import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import ReviewQuery from 'src/query/review.query';
import { isPositiveStrNumber } from 'src/utils/utils';

@Controller('/v3/application/shops')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Get('/:shopId/reviews')
    async findByShops(@Param('shopId') shopId: string, @Query() query: any) {
        if (!isPositiveStrNumber(shopId)) {
            throw new BadRequestException('Invalid shopId');
        }
        const queryString = new ReviewQuery();
        Object.assign(queryString, query);
        queryString.shop_id = shopId;
        return this.reviewService.findByShops(queryString);
    }
}
