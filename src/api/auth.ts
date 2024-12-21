import { api } from '@/composables'

const path = '/auth'

export const authService = {
  login,
  register,
  refreshToken,
  getByUserId,
  getByUsername,
}

// Hàm gọi API đăng nhập
async function login(username: string, password: string) {
  const response = await api.post(`${path}/auth/login`, {
    username: username,
    password: password,
  })
  return response.data
}

// Hàm gọi API đăng kí
async function register(username: string, password: string, confirmPassword: string) {
  const response = await api.post(`${path}/auth/register`, {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  })
  return response.data
}

// Lấy user theo điều kiện
async function refreshToken(refreshToken: string) {
  const response = await api.post(`${path}/condition`, { token: refreshToken })
  return response.data
}

// Lấy userProfile theo userId
async function getByUserId<T>(id: string): Promise<T> {
  const response = await api.get<T>(`${path}/${id}`)
  return response.data
}

// Lấy userProfile theo userId
async function getByUsername<T>(username: string): Promise<T> {
  const response = await api.get<T>(`${path}/${username}`)
  return response.data
}

export default authService
