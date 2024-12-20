export default class SortitionInfo {
  public orders: string[]

  constructor({ order, direction }: { order?: string; direction?: string }) {
    this.orders = []
    if (order && order !== undefined) {
      if (direction && direction !== undefined) direction = ` ${direction.trim()}`
      this.orders.unshift(`${order.trim()}${direction}`)
    }
  }

  public add(order: string, direction?: string): SortitionInfo {
    if (order && order !== undefined) {
      // Loại bỏ các phần tử trùng
      this.orders = this.orders.filter(o => {
        const [existingOrder] = o.split(' ')
        return existingOrder.trim() !== order.trim()
      })
      if (direction && direction !== undefined) direction = ` ${direction.trim()}`
      this.orders.unshift(`${order.trim()}${direction}`)
    }
    return this
  }

  public set({ sorts }: { sorts: string }): SortitionInfo {
    if (sorts && sorts !== undefined) {
      sorts
        .split(',')
        .reverse()
        .forEach(pair => {
          const [order, direction] = pair.trim().split(' ')
          this.add(order, direction)
        })
    }
    return this
  }

  public reset(): void {
    this.orders = []
  }

  public toString(): string {
    if (this.orders.length === 0) return ''
    return this.orders.filter(Boolean).join(',')
  }
}
