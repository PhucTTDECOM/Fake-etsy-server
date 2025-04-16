import { Injectable } from '@nestjs/common';
import { ShopService } from 'src/shop/shop.service';
import { IToken } from 'src/types/token.type';

@Injectable()
export class AuthService {
    constructor(private readonly shopService: ShopService) {}
    public async token(body: any): Promise<IToken> {
        const grantType = body.grant_type;
        let refreshToken = '';
        if (grantType === 'refresh_token') {
            refreshToken = body.refresh_token;
        }
        console.log(body);
        return this.shopService.token(refreshToken);
    }
}
