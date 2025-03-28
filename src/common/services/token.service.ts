import { Injectable } from '@nestjs/common';
import { IToken } from 'src/types/token.type';
import { ShopToken } from 'src/common/entities/token.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class TokenService {
    constructor(@InjectRepository(ShopToken) private readonly tokenRepository: Repository<ShopToken>) {}
    public async token(refreshToken: string): Promise<IToken> {
        if (!refreshToken?.trim()) {
            refreshToken = '';
        }

        if (!refreshToken) {
            return {
                refresh_token: '768590523.sr4FaG-w3AQM1OuG3MA6_OFX7--nf9BO5LGFs93dUcGFJF30VqqcyCb2DbeB3o9-5VQds76bK4NEdRDU8-h9WlndK7',
                access_token: '768590523.PXpIyBJiBGKOUZXBEoM7dnNDrvHgJsqQKoaBZu3h5oqMpPrYDC_yCm9f2y-OjjZfpnLzmQGE04n9AOEzZ_E0MLUeT0',
                expires_in: 3600,
                token_type: 'Bearer'
            };
        }
        const [tokenBase] = refreshToken.split('.');
        const token = await this.tokenRepository.findOne({
            where: { accessToken: Like(`%${tokenBase}%`) }
        });
        if (!token) {
            throw new Error('Invalid token');
        }
        return {
            refresh_token: token.refreshToken,
            access_token: token.accessToken,
            expires_in: 3600,
            token_type: 'Bearer'
        };
    }
}
