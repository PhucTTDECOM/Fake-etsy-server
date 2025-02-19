import { SelectQueryBuilder } from 'typeorm';
import BaseQuery from './base.query';
import { isPositiveStrNumber } from 'src/utils/utils';

class ListingQuery extends BaseQuery {
    state?: 'active' | 'inactive' | 'sold_out' | 'expired' | 'draft';
    includes?: string[];
    listingIds?: string;
    offset?: string;

    public buildQuery(builder: SelectQueryBuilder<any>): SelectQueryBuilder<any> {
        builder = super.buildQuery(builder);
        if (this.state) {
            builder.andWhere('listing.state = :state', { state: this.state });
        }
        if (this.listingIds?.trim()) {
            const listingIds = this.listingIds
                .split(',')
                .map((listingId) => listingId?.trim() || '')
                .filter((listing) => isPositiveStrNumber(listing));
            builder.andWhere('listing.listingId IN (:listingIds)', { listingIds: listingIds });
        }
        return builder;
    }

    public buildCountQuery(builder: SelectQueryBuilder<any>): SelectQueryBuilder<any> {
        if (this.state) {
            builder.andWhere('listing.state = :state', { state: this.state });
        }
        if (this.listingIds?.trim()) {
            const listingIds = this.listingIds
                .split(',')
                .map((listingId) => listingId?.trim() || '')
                .filter((listing) => isPositiveStrNumber(listing));
            builder.andWhere('listing.listingId IN (:listingIds)', { listingIds: listingIds });
        }
        return builder;
    }
}

export default ListingQuery;
