import { Injectable } from '@nestjs/common';
import { TokenService } from 'src/common/services/token.service';
import { IToken } from 'src/types/token.type';

@Injectable()
export class AuthService {
    constructor(private readonly tokenService: TokenService) {}
    public refreshToken(): IToken {
        return this.tokenService.doRefreshToken();
    }
}
