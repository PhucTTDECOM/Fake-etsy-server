import { Injectable } from '@nestjs/common';
import { TokenService } from 'src/common/services/token.service';
import { IToken } from 'src/types/token.type';

@Injectable()
export class AuthService {
    constructor(private readonly tokenService: TokenService) {}
    public async token(body: any): Promise<IToken> {
        const grantType = body.grant_type;
        let refreshToken = '';
        if (grantType === 'refresh_token') {
            refreshToken = body.refresh_token;
        }
        console.log(body);
        return this.tokenService.token(refreshToken);
    }
}
