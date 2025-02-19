import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
    uploadFile(file: Express.Multer.File) {
        if (!file) {
            throw new Error('File is required');
        }

        const fileUrl = `http://localhost:9999/uploads/${file.filename}`;
        return {
            message: 'File uploaded successfully',
            fileUrl
        };
    }
}
