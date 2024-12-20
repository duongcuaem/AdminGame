export class PagingData<T> {
  public items: T[]
  public fetch?: number | null
  public offset?: number | null
  public totals?: number | null
  constructor(items: T[], fetch?: number | null, offset?: number | null, totals?: number | null) {
    this.items = items
    this.fetch = fetch
    this.offset = offset
    this.totals = totals
  }
}
