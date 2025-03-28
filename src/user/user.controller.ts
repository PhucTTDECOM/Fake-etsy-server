import { Controller, Get, Headers } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/v3/application')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/users/me')
    async me(@Headers('Authorization') authHeader: string) {
        console.log('authHeader', authHeader);
        if (!authHeader) {
            throw new Error('Unauthorized');
        }
        const [_, token] = authHeader.split(' ');
        if (!token) {
            throw new Error('Unauthorized');
        }
        const [baseInfo] = token.split('.');
        if (!baseInfo) {
            throw new Error('Unauthorized');
        }
        return this.userService.getUser(baseInfo);
    }
}
