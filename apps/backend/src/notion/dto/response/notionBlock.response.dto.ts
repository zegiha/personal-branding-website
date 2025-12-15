import { Expose } from 'class-transformer';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { ApiProperty } from '@nestjs/swagger';

export class NotionBlockResponseDto {
  @ApiProperty({
    description: '블록 리스트',
    type: () => [Object],
  })
  @Expose()
  block: BlockObjectResponse[];

  @ApiProperty({
    description: '블록 자식 정보를 담은 맵',
    type: () => Object,
  })
  @Expose()
  childMap: Record<string, Array<string>>;

  constructor(partial: Partial<NotionBlockResponseDto>) {
    Object.assign(this, partial);
  }
}
