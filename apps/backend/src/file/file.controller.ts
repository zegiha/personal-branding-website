import { Controller, Post, UseInterceptors, UploadedFiles, Body } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileService } from './file.service';
import { UploadImageUrlDto } from './dto/uploadImageUrl.dto';
import { ImageResponseDto } from './dto/response/image.response.dto';

@ApiTags('파일')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @ApiOperation({
    summary: '폼데이터 이미지 업로드',
    description: '멀티파트 폼데이터로 이미지를 업로드하여 CDN URL을 반환합니다.',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '업로드할 이미지 파일들',
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: '업로드할 이미지 목록',
        },
      },
    },
  })
  @ApiOkResponse({
    description: '업로드된 이미지 정보',
    type: ImageResponseDto,
    isArray: true,
  })
  @Post('upload/image/form-data')
  @UseInterceptors(AnyFilesInterceptor())
  async uploadImageFormData(@UploadedFiles() files: Express.Multer.File[]): Promise<ImageResponseDto[]> {
    return this.fileService.uploadImageFormData(files);
  }

  @ApiOperation({
    summary: 'URL 기반 이미지 업로드',
    description: '이미지 URL 목록을 받아 CDN으로 복사 후 정보를 반환합니다.',
  })
  @ApiOkResponse({
    description: '업로드된 이미지 정보',
    type: ImageResponseDto,
    isArray: true,
  })
  @Post('upload/image/url')
  async uploadImageUrl(@Body() dto: UploadImageUrlDto): Promise<ImageResponseDto[]> {
    return this.fileService.uploadImageUrl(dto);
  }
}
