// models/NotificationModel.ts

export interface Notification {
  id: string
  recipientId: string | null // ID người nhận, null nếu là thông báo nhóm
  channelId: string | null // ID kênh nếu là thông báo nhóm
  content: string
  isRead: boolean
  timestamp: string // Thời gian tạo dưới dạng chuỗi ISO 8601
}
