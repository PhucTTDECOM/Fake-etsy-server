import { SelectQueryBuilder } from 'typeorm';
import BaseQuery from './base.query';
import { EtsyLedgerEntry } from 'src/ledger/entities/ledger.entity';

class LedgerQuery extends BaseQuery {
    min_created?: string;
    max_created?: string;
    public buildQuery(builder: SelectQueryBuilder<EtsyLedgerEntry>): SelectQueryBuilder<EtsyLedgerEntry> {
        builder = super.buildQuery(builder);
        if (this.min_created) {
            builder.andWhere('ledger.created_timestamp >= FROM_UNIXTIME(:min_created)', { min_created: this.min_created });
        }
        if (this.max_created) {
            builder.andWhere('ledger.created_timestamp <= FROM_UNIXTIME(:max_created)', { max_created: this.max_created });
        }
        return builder;
    }
    public buildCountQuery(builder: SelectQueryBuilder<EtsyLedgerEntry>): SelectQueryBuilder<EtsyLedgerEntry> {
        if (this.min_created) {
            builder.andWhere('ledger.created_timestamp >= FROM_UNIXTIME(:min_created)', { min_created: this.min_created });
        }
        if (this.max_created) {
            builder.andWhere('ledger.created_timestamp <= FROM_UNIXTIME(:max_created)', { max_created: this.max_created });
        }
        return builder;
    }
}

export default LedgerQuery;
