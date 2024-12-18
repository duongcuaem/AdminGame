// src/model/userInfoModel.ts

// Định nghĩa interface UserInfo với các thuộc tính cần thiết
// Interface này sẽ được sử dụng để xác định cấu trúc dữ liệu cho userInfo
export interface UserInfo {
  UID: number // ID duy nhất cho mỗi userInfo
  user: string // Tên người dùng
  name: string // Tên đầy đủ
  email: string // Địa chỉ email của người dùng
  cmt: string // Chứng minh thư hoặc thông tin định danh khác
  createdDate: string // Ngày tạo bản ghi userInfo
}
