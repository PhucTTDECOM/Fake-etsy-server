import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ShopToken } from 'src/common/entities/token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from 'src/shop/entities/shop.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ShopToken]), TypeOrmModule.forFeature([Shop])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
