import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { IToken } from 'src/types/token.type';

@Injectable()
export class TokenService {
    generateRandomNumber(): string {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    }

    generateRandomString(length: number): string {
        return crypto
            .randomBytes(Math.ceil(length / 2))
            .toString('base64')
            .replace(/[^a-zA-Z0-9]/g, '')
            .slice(0, length);
    }

    generateToken(): string {
        const randomNumber = this.generateRandomNumber();
        const firstPart = this.generateRandomString(64);
        const secondPart = this.generateRandomString(64);
        const lastPart = this.generateRandomString(8);
        return `${randomNumber}.${firstPart}-${secondPart}-${lastPart}`;
    }

    doRefreshToken(): IToken {
        return {
            access_token: this.generateToken(),
            refresh_token: this.generateToken(),
            token_type: 'Bearer',
            expires_in: 3600
        };
    }
}
