export default interface UserDto {
  userName: string // Tên tài khoản
  avatar?: string // Avatar (có thể không có)
  role: string // Vai trò (role)
  name: string // Tên nhân vật
  token: string // mã xác thực
}
