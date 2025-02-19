import { SelectQueryBuilder } from 'typeorm';
import BaseQuery from './base.query';

class ReceiptQuery extends BaseQuery {
    max_last_modified?: string;
    was_cancelled?: string;

    public buildQuery(builder: SelectQueryBuilder<any>): SelectQueryBuilder<any> {
        builder = super.buildQuery(builder);
        if (this.max_last_modified) {
            builder.andWhere('receipt.updated_timestamp <= FROM_UNIXTIME(:max_last_modified)', { max_last_modified: this.max_last_modified });
        }
        if (this.was_cancelled) {
            builder.andWhere('receipt.was_cancelled = :was_cancelled', { was_cancelled: this.was_cancelled });
        }
        return builder;
    }

    public buildCountQuery(builder: SelectQueryBuilder<any>): SelectQueryBuilder<any> {
        builder = super.buildCountQuery(builder);
        if (this.max_last_modified) {
            builder.andWhere('receipt.updated_timestamp <= FROM_UNIXTIME(:max_last_modified)', { max_last_modified: this.max_last_modified });
        }
        if (this.was_cancelled) {
            builder.andWhere('receipt.was_cancelled = :was_cancelled', { was_cancelled: this.was_cancelled });
        }
        return builder;
    }
}

export default ReceiptQuery;
