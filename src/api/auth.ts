import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// Hàm gọi API đăng nhập
export const login = (username: string, password: string) => {
  return axios.post(`${API_BASE_URL}/auth/login`, {
    username: username,
    password: password,
  })
}

// Hàm gọi API đăng kí
export const register = (username: string, password: string, confirmPassword: string) => {
  return axios.post(`${API_BASE_URL}/auth/register`, {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  })
}

// Hàm gọi API để làm mới token (nếu có)
export const refreshToken = (refreshToken: string) => {
  return axios.post(`${API_BASE_URL}/auth/refresh`, { token: refreshToken })
}
