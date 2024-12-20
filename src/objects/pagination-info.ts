export default class PaginationInfo {
  public page: number;
  public limit: number;
  public total: number;

  constructor({ page, limit, total }: Partial<PaginationInfo>) {
    this.page = page ?? Number(import.meta.env.VITE_PAGING_PAGE);
    this.limit = limit ?? Number(import.meta.env.VITE_PAGING_LIMIT);
    this.total = total ?? 0;
  }

  public set({ page, limit, total }: Partial<PaginationInfo>): PaginationInfo {
    this.page = page ?? this.page;
    this.limit = limit ?? this.limit;
    this.total = total ?? this.total;
    return this;
  }

  public reset(): void {
    this.page = Number(import.meta.env.VITE_PAGING_PAGE);
    this.limit = Number(import.meta.env.VITE_PAGING_LIMIT);
    this.total = 0;
  }
}
