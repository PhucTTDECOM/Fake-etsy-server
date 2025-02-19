import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EtsyReview } from './entities/review.entity';
import { Repository } from 'typeorm';
import ReviewQuery from 'src/query/review.query';
import { ListResponse } from 'src/common/api.payload';
import { EtsyReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(EtsyReview)
        private reviewRepository: Repository<EtsyReview>
    ) {}

    async findByShops(query: ReviewQuery): Promise<ListResponse> {
        let queryBuilder = this.reviewRepository.createQueryBuilder('review');
        queryBuilder = query.buildQuery(queryBuilder);

        const reviews = await queryBuilder.getMany();
        let countQueryBuilder = this.reviewRepository.createQueryBuilder('review');
        countQueryBuilder = query.buildCountQuery(countQueryBuilder);
        const count = await countQueryBuilder.getCount();

        return {
            count,
            results: reviews.map((review) => new EtsyReviewDto(review))
        };
    }
}
