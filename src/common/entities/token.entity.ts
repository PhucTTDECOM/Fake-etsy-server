import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tbl_etsy_token_v3' })
export class ShopToken {
    @PrimaryColumn({ type: 'varchar', length: 45, name: 'etsy_shop_id' })
    etsyShopId: string;
    @Column({ name: 'access_token', type: 'varchar', length: 255 })
    accessToken: string;

    @Column({ name: 'refresh_token', type: 'varchar', length: 255 })
    refreshToken: string;

    @Column({ name: 'date_issued', type: 'datetime' })
    dateIssued: Date;

    @Column({ name: 'last_sync', type: 'datetime' })
    lastSync: Date;

    @Column({ name: 'is_syncing', type: 'boolean' })
    isSyncing: boolean;

    @Column({ name: '_is_app_deleted', type: 'boolean' })
    isAppDeleted: boolean;
}
