import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokenService } from 'src/common/services/token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopToken } from 'src/common/entities/token.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ShopToken])],
    providers: [AuthService, TokenService],
    controllers: [AuthController]
})
export class AuthModule {}
