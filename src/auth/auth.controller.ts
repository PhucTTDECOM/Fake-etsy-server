import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/v3/public/oauth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('token')
    async refreshToken() {
        return this.authService.refreshToken();
    }
}
