// Định nghĩa kiểu dữ liệu tổng quát cho API trả về
export interface ApiResponse<T = any> {
  items?: T[] // Danh sách dữ liệu (nếu có)
  item?: T // Dữ liệu đơn lẻ (nếu có)
  total?: number // Tổng số item (nếu có)
  [key: string]: any // Cho phép các thuộc tính khác nếu backend trả về
}
