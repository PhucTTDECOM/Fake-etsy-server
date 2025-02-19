import { IsInt, IsOptional, IsString, IsBoolean, IsPositive } from 'class-validator';
import { Express } from 'express';

export class UploadImageDto {
    @IsOptional()
    image?: Express.Multer.File;

    @IsInt()
    @IsPositive()
    listing_image_id: number;

    @IsInt()
    @IsOptional()
    rank: number = 1;

    @IsBoolean()
    @IsOptional()
    overwrite: boolean = false;

    @IsBoolean()
    @IsOptional()
    is_watermarked: boolean = false;

    @IsString()
    @IsOptional()
    alt_text: string = '';

    @IsString()
    @IsOptional()
    url75x75: string = '';

    @IsString()
    @IsOptional()
    url170x135: string = '';

    @IsString()
    @IsOptional()
    url570xN: string = '';

    @IsString()
    @IsOptional()
    urlFullxfull: string = '';
}
