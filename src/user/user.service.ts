import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopToken } from 'src/common/entities/token.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(ShopToken) private readonly tokenRepository: Repository<ShopToken>,
        @InjectRepository(Shop) private readonly shopRepository: Repository<Shop>
    ) {}

    public async getUser(tokenBase: string): Promise<any> {
        const token = await this.tokenRepository.findOne({
            where: { accessToken: Like(`%${tokenBase}%`) }
        });

        if (!token) {
            throw new Error('Invalid token');
        }

        const shop = await this.shopRepository.findOne({
            where: { etsyShopId: token.etsyShopId }
        });
        if (!shop) {
            throw new Error('Shop not found');
        }
        return {
            user_id: shop.etsyUserId,
            shop_id: shop.etsyShopId
        };
    }
}
