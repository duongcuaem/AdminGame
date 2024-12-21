export default interface UserInfo {
  uid?: number // Unique ID tự động tăng
  userId: string // ID đăng nhập
  userName: string // Tên tài khoản
  name: string // Tên nhân vật
  avatar?: string // Avatar, giá trị mặc định là "0"
  joinedOn: Date // Ngày tham gia
  email?: string // Email
  cmt?: string // Chứng minh thư
  security?: Security // Bảo mật đăng nhập
  red: number // RED
  ketSat: number // RED trong két sắt
  redWin: number // Tổng RED thắng
  redLost: number // Tổng RED thua
  redPlay: number // Tổng RED đã chơi
  totall: number // Tổng thắng trừ thua
  vip: number // Tổng vip tích lũy
  lastVip: number // Cập nhật lần đổi thưởng cuối
  hu: number // Số lần Nổ Hũ Red
  type: number // User = 1 | Admin = 2 | Bot = 3 | Daily = 4
  veryphone: boolean // Trạng thái xác thực điện thoại
  veryold: boolean // Đã từng xác thực
  otpFirst: boolean // Lần đầu lấy OTP
  gitCode: number // Số lần nhận mã GiftCode thành công
  gitRed: number // Tiền nhận từ GiftCode
  gitTime?: Date // Ngày sử dụng GiftCode
  rights: number // Cấp bậc
  referralCode: string // Mã giới thiệu
  inviteCode: string // Mã mời
}

export interface Security {
  login: number // Bảo mật đăng nhập
}
