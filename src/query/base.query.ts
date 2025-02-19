import { isPositiveStrNumber } from 'src/utils/utils';
import { SelectQueryBuilder } from 'typeorm';

class BaseQuery {
    limit?: string;
    offset?: string;

    public buildQuery(builder: SelectQueryBuilder<any>): SelectQueryBuilder<any> {
        if (isPositiveStrNumber(this.limit)) {
            builder.limit(parseInt(this.limit));
        } else {
            builder.limit(100);
        }
        if (isPositiveStrNumber(this.offset)) {
            builder.offset(parseInt(this.offset));
        } else {
            builder.offset(0);
        }
        return builder;
    }

    public buildCountQuery(builder: SelectQueryBuilder<any>): SelectQueryBuilder<any> {
        return builder;
    }
}

export default BaseQuery;
