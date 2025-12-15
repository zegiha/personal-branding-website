import { IsString, IsNotEmpty } from 'class-validator';

export class GetNotionPageDto {
  @IsString()
  @IsNotEmpty()
  dataSourceId: string;

  @IsString()
  @IsNotEmpty()
  pathPrefix: string;
}
