import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from 'src/shop/entities/shop.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Shop])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
