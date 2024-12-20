import { PaginationInfo, SortitionInfo } from '@/objects'

export default {
  paging,
  sorting,
}

function paging(pagination: PaginationInfo) {
  return `/paging:${pagination.page}-${pagination.limit}`
}

function sorting(sortition?: SortitionInfo) {
  if (!sortition || sortition === undefined) return ''
  const sortString = sortition.toString()
  return sortString && sortString !== undefined ? `/sorting:${sortString}` : ''
}
