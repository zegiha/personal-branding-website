import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationEntity<T> {
  @ApiProperty({
    description: '전체 페이지 수',
    example: 5,
  })
  @Expose()
  totalPage: number;

  @ApiProperty({
    description: '전체 데이터 개수',
    example: 42,
  })
  @Expose()
  totalData: number;

  @ApiProperty({
    description: '현제 페이지',
    example: 1,
  })
  @Expose()
  currentPage: number;

  @ApiProperty({
    description: '조회된 데이터 목록',
    type: () => [Object],
  })
  @Expose()
  data: T[];

  constructor(partial: Partial<PaginationEntity<T>>) {
    Object.assign(this, partial);
  }
}
