import { Global, Module } from '@nestjs/common';
import { R2_CLIENT } from './r2.const';
import { ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';

@Global()
@Module({
  providers: [
    {
      provide: R2_CLIENT,
      useFactory: (config: ConfigService) => {
        const endpoint = config.get<string>('R2_ENDPOINT') ?? '';
        const accessKeyId = config.get<string>('R2_ACCESS_KEY') ?? '';
        const secretAccessKey = config.get<string>('R2_PRIVATE_ACCESS_KEY') ?? '';

        return new S3Client({
          region: 'auto',
          endpoint,
          credentials: { accessKeyId, secretAccessKey },
        });
      },
      inject: [ConfigService]
    }
  ],
  exports: [R2_CLIENT]
})
export class R2Module {}
