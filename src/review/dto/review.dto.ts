import { toTimeStamp } from 'src/utils/utils';
import { EtsyReview } from '../entities/review.entity';

export class EtsyReviewDto {
    shop_id: number;
    listing_id: number;
    transaction_id: number;
    buyer_user_id: number;
    rating: number;
    review: string;
    language: string;
    image_url_fullxfull: string;
    create_timestamp: number;
    created_timestamp: number;
    update_timestamp: number;
    updated_timestamp: number;

    constructor(review: EtsyReview) {
        this.shop_id = Number(review.shopId);
        this.listing_id = Number(review.listingId);
        this.transaction_id = Number(review.transactionId);
        this.buyer_user_id = Number(review.buyerUserId);
        this.rating = review.rating || 0;
        this.review = review.review || '';
        this.language = review.language || '';
        this.image_url_fullxfull = review.imageUrlFullxfull || '';
        this.create_timestamp = toTimeStamp(review.createTimestamp);
        this.created_timestamp = toTimeStamp(review.createdTimestamp);
        this.update_timestamp = toTimeStamp(review.updateTimestamp);
        this.updated_timestamp = toTimeStamp(review.updatedTimestamp);
    }
}
