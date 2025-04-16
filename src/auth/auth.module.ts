import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ShopService } from 'src/shop/shop.service';
import { ShopModule } from 'src/shop/shop.module';

@Module({
    imports: [ShopModule],
    providers: [AuthService, ShopService],
    controllers: [AuthController]
})
export class AuthModule {}
