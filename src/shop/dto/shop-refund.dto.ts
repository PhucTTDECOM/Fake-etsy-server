import { EtsyShopRefund } from '../entities/shop-refund.entity';

export class EtsyShopRefundDto {
    return_policy_id: number;
    shop_id: number;
    accepts_returns: boolean;
    accepts_exchanges: boolean;
    return_deadline: number;

    constructor(refund: EtsyShopRefund) {
        this.return_policy_id = Number(refund.returnPolicyId);
        this.shop_id = Number(refund.shopId);
        this.accepts_returns = Boolean(refund.acceptsReturns);
        this.accepts_exchanges = Boolean(refund.acceptsExchanges);
        this.return_deadline = refund.returnDeadline || 0;
    }
}
