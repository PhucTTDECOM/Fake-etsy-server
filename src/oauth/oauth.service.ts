import { Injectable } from '@nestjs/common';

@Injectable()
export class OauthService {
    constructor() {}
    public authorize(state: string): string {
        return `http://127.0.0.1:8080/app/shops/connect/callback?state=${state}&code=nest-js-server-code`;
    }

    public getToken() {
        return {
            access_token: '768590523.PXpIyBJiBGKOUZXBEoM7dnNDrvHgJsqQKoaBZu3h5oqMpPrYDC_yCm9f2y-OjjZfpnLzmQGE04n9AOEzZ_E0MLUeT0',
            refresh_token: '768590523.sr4FaG-w3AQM1OuG3MA6_OFX7--nf9BO5LGFs93dUcGFJF30VqqcyCb2DbeB3o9-5VQds76bK4NEdRDU8-h9WlndK7',
            expires_in: 3600,
            token_type: 'Bearer'
        };
    }
}
