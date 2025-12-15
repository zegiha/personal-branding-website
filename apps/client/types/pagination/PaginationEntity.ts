export interface PaginationEntity<T> {
  totalPage: number
  totalData: number
  currentPage: number
  data: Array<T>
}