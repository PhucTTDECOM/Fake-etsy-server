import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
        prefix: '/uploads'
    });
    app.use(express.urlencoded({ extended: true }));
    await app.listen(9999);
}
bootstrap();
