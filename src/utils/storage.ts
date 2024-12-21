import type { UserDto } from '@/models/dto'

const TOKEN_KEY = 'auth_token'
const USER_DTO_KEY = 'user_dto'

// Lưu token vào localStorage
export const saveTokenToStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

// Lưu token vào sessionStorage
export const saveTokenToSession = (token: string) => {
  sessionStorage.setItem(TOKEN_KEY, token)
}

// Lưu useDto vào localStorage
export const saveUserDtoToStorage = (userDto: UserDto) => {
  localStorage.setItem(USER_DTO_KEY, JSON.stringify(userDto))
}

// Lấy thông tin từ localStorage
export const getUserDtoFromStorage = (): UserDto | null => {
  const userDto = localStorage.getItem(USER_DTO_KEY)
  return userDto ? JSON.parse(userDto) : null
}

// Lấy token từ localStorage
export const getToken = () => {
  // Ưu tiên lấy token từ localStorage nếu có, nếu không thì lấy từ sessionStorage
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)
}

// Xóa token khỏi localStorage
export const clearToken = () => {
  // Xóa token từ cả localStorage và sessionStorage
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_DTO_KEY)

  sessionStorage.removeItem(TOKEN_KEY)
}
