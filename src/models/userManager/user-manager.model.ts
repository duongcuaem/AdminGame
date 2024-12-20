import type { Base } from '@/models'

export default interface UserManager extends Base {
  id?: number // Mã định danh
  siteId?: number // Mã hệ thống
  title?: string // Tiêu đề
  code?: string // Nhận diện
  src?: string // Đường dẫn
  keywords?: string // Từ khóa
  thumbnail?: string // Ảnh đại diện
  description?: string // Mô tả
  type?: number // Phân loại: AudioType
  features?: string // Đặc trưng: Featured (nổi bật); Important (quan trọng)
  taxonomy?: string // Phân nhóm
  order?: number // Thứ tự sắp xếp
  status?: number // Trạng thái: Definitions.Cms.Status
}
