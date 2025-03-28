import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
    constructor(readonly oauthService: OauthService) {}

    @Get('/connect')
    connect(@Query() query: any, @Res() res: Response) {
        const redirectUrl = this.oauthService.authorize(query.state);
        return res.redirect(redirectUrl);
    }
}
