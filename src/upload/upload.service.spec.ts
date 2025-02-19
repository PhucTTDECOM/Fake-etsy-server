import { Test, TestingModule } from '@nestjs/testing';
import { UploadService } from './upload.service';

describe('UploadService', () => {
    let service: UploadService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UploadService]
        }).compile();

        service = module.get<UploadService>(UploadService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return file URL', () => {
        const file = { filename: 'test.png' } as Express.Multer.File;
        const result = {
            message: 'File uploaded successfully',
            fileUrl: 'http://localhost:9999/uploads/test.png'
        };

        expect(service.uploadFile(file)).toEqual(result);
    });
});
