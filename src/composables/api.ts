import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

// Hàm build URL cho baseURL từ biến môi trường
function buildUrl(): string {
  const protocol = import.meta.env.VITE_API_SCHEME
  const host = import.meta.env.VITE_API_HOST
  return `${protocol}://${host}`
}

// Tạo instance axios
const api: AxiosInstance = axios.create({
  baseURL: buildUrl(),
  timeout: 10000, // Timeout 10 giây
  headers: {
    Accept: 'application/json', // Header mặc định
  },
})

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Lấy token từ cookie
    const token = Cookies.get('token')

    // Đảm bảo headers luôn có cấu trúc chuẩn
    config.headers = config.headers || {}

    // Gắn Authorization vào headers nếu có token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data // Trả về trực tiếp `data` từ response
  },
  error => {
    const errorMessage = error.response?.data?.detail || error.response?.data?.title || 'Lỗi kết nối hoặc server!'
    return Promise.reject(errorMessage)
  },
)

export default api
