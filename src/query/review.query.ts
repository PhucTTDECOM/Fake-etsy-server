import { SelectQueryBuilder } from 'typeorm';
import BaseQuery from './base.query';
import { EtsyReview } from 'src/review/entities/review.entity';

class ReviewQuery extends BaseQuery {
    min_created?: number;
    shop_id?: string;

    public buildQuery(builder: SelectQueryBuilder<EtsyReview>): SelectQueryBuilder<EtsyReview> {
        builder = super.buildQuery(builder);
        if (this.shop_id) {
            builder.andWhere('review.shop_id = :shop_id', { shop_id: this.shop_id });
        }
        if (this.min_created) {
            builder.andWhere('review.createdTimestamp >= FROM_UNIXTIME(:min_created)', { min_created: this.min_created });
        }
        return builder;
    }

    public buildCountQuery(builder: SelectQueryBuilder<EtsyReview>): SelectQueryBuilder<EtsyReview> {
        builder = super.buildCountQuery(builder);
        if (this.shop_id) {
            builder.andWhere('review.shop_id = :shop_id', { shop_id: this.shop_id });
        }
        if (this.min_created) {
            builder.andWhere('review.createdTimestamp >= FROM_UNIXTIME(:min_created)', { min_created: this.min_created });
        }
        return builder;
    }
}

export default ReviewQuery;
