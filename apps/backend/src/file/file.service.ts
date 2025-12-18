import {
  Injectable,
  Inject,
  InternalServerErrorException,
  BadRequestException,
  HttpException,
} from '@nestjs/common';
import { R2_CLIENT } from 'src/r2/r2.const';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import sizeOf from 'image-size';
import { ConfigService } from '@nestjs/config';
import { ImageResponseDto } from './dto/response/image.response.dto';
import { plainToInstance } from 'class-transformer';
import { UploadImageUrlDto } from './dto/uploadImageUrl.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class FileService {
  constructor(
    @Inject(R2_CLIENT)
    private readonly r2Client: S3Client,
    private readonly configService: ConfigService,
  ) {}

  async uploadImageFormData(
    files: Express.Multer.File[],
  ): Promise<ImageResponseDto[]> {
    try {
      if (!files || files.length === 0) {
        throw new BadRequestException('No files uploaded');
      }

      // ✅ 파일 유효성 검사: MIME 타입이 이미지인지 체크
      const invalidFile = files.find(
        (file) => !file.mimetype.startsWith('image/'),
      );
      if (invalidFile) {
        throw new BadRequestException(
          `Invalid file type: ${invalidFile.originalname} (must be an image)`,
        );
      }

      // ✅ 버퍼 추출
      const buffers = await Promise.all(files.map((file) => file.buffer));
      const sizes = buffers.map((buffer) => sizeOf(buffer));

      // ✅ image-size 결과를 이용한 이중 체크
      const invalidSize = sizes.find(
        (size) =>
          !size.type ||
          !['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'tiff'].includes(
            size.type,
          ),
      );
      if (invalidSize) {
        throw new BadRequestException('Invalid or unsupported image format');
      }

      // ✅ 파일 이름 생성
      const fileNames = files.map(
        (file) => `${Date.now()}-${file.originalname ?? 'unknown'}`,
      );

      // ✅ 업로드 수행
      const uploadedImages = await Promise.all(
        files.map(async (file, i) => {
          const buffer = buffers[i];
          const size = sizes[i];
          const fileName = fileNames[i];

          try {
            await this.r2Client.send(
              new PutObjectCommand({
                Bucket: this.configService.get<string>('R2_BUCKET_NAME') ?? '',
                Key: fileName,
                Body: buffer,
                ContentType: file.mimetype,
              }),
            );

            return plainToInstance(
              ImageResponseDto,
              {
                url: `${this.configService.get<string>('R2_PUBLIC_ENDPOINT')}/${fileName}`,
                width: size.width,
                height: size.height,
              },
              { excludeExtraneousValues: true },
            );
          } catch (error) {
            throw new InternalServerErrorException(
              'Failed to upload image',
              error.message,
            );
          }
        }),
      );

      return uploadedImages;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async uploadImageUrl(dto: UploadImageUrlDto): Promise<ImageResponseDto[]> {
    try {
      console.log('[URLS] : ', dto.urls);
      const responses = await Promise.all(dto.urls.map((url) => fetch(url)));
      const buffers = await Promise.all(
        responses.map((response) =>
          response.arrayBuffer().then((buffer) => Buffer.from(buffer)),
        ),
      );
      const sizes = buffers.map((buffer) => sizeOf(buffer));

      // UUID를 사용해 파일명 생성 (Content-Type에서 확장자 추출)
      const fileNames = responses.map((response) => {
        const contentType = response.headers.get('content-type') || '';
        const ext = contentType.split('/')[1]?.split(';')[0] || 'jpg';
        return `${randomUUID()}.${ext}`;
      });

      const uploadedImages = await Promise.all(
        buffers.map(async (buffer, i) => {
          const size = sizes[i];
          const fileName = fileNames[i];

          await this.r2Client.send(
            new PutObjectCommand({
              Bucket: this.configService.get<string>('R2_BUCKET_NAME') ?? '',
              Key: fileName,
              Body: buffer,
              ContentType: responses[i].headers.get('content-type') ?? '',
            }),
          );

          return plainToInstance(
            ImageResponseDto,
            {
              url: `${this.configService.get<string>('R2_PUBLIC_ENDPOINT')}/${fileName}`,
              width: size.width,
              height: size.height,
            },
            { excludeExtraneousValues: true },
          );
        }),
      );

      return uploadedImages;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to upload image',
        error.message,
      );
    }
  }

  async uploadVideoUrl(urls: string[]): Promise<string[]> {
    try {
      console.log('[VIDEO URLS] : ', urls);
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const buffers = await Promise.all(
        responses.map((response) =>
          response.arrayBuffer().then((buffer) => Buffer.from(buffer)),
        ),
      );

      // UUID를 사용해 파일명 생성 (Content-Type에서 확장자 추출)
      const fileNames = responses.map((response) => {
        const contentType = response.headers.get('content-type') || '';
        let ext = contentType.split('/')[1]?.split(';')[0] || 'mp4';
        // video/quicktime → mov
        if (ext === 'quicktime') ext = 'mov';
        return `${randomUUID()}.${ext}`;
      });

      const uploadedUrls = await Promise.all(
        buffers.map(async (buffer, i) => {
          const fileName = fileNames[i];

          await this.r2Client.send(
            new PutObjectCommand({
              Bucket: this.configService.get<string>('R2_BUCKET_NAME') ?? '',
              Key: fileName,
              Body: buffer,
              ContentType: responses[i].headers.get('content-type') ?? '',
            }),
          );

          return `${this.configService.get<string>('R2_PUBLIC_ENDPOINT')}/${fileName}`;
        }),
      );

      return uploadedUrls;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to upload video',
        error.message,
      );
    }
  }
}
