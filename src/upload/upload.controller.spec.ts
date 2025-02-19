import { Test, TestingModule } from '@nestjs/testing';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

describe('UploadController', () => {
    let controller: UploadController;
    let service: UploadService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UploadController],
            providers: [UploadService]
        }).compile();

        controller = module.get<UploadController>(UploadController);
        service = module.get<UploadService>(UploadService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return file URL', async () => {
        const file = { originalname: 'test.png', filename: 'test.png' } as Express.Multer.File;
        const result = { message: 'File uploaded successfully', fileUrl: 'http://localhost:9999/uploads/test.png' };

        jest.spyOn(service, 'uploadFile').mockImplementation(() => result);

        expect(await controller.uploadImage(file)).toEqual(result);
    });
});
