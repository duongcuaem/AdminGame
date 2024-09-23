import axios from 'axios'

// Hàm gọi API đăng nhập
export const login = (email: string, password: string) => {
  return axios.post('/api/auth/login', { email, password })
}

// Hàm gọi API để làm mới token (nếu có)
export const refreshToken = (refreshToken: string) => {
  return axios.post('/api/auth/refresh', { token: refreshToken })
}
