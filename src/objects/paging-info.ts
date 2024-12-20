export default class PagingInfo {
  public page: number | 1
  public limit: number | 10
  public total: number | 0

  constructor(page: number, limit: number, total: number) {
    this.page = page
    this.limit = limit
    this.total = total
  }
}
