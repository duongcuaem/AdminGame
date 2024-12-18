// src/api/userInfoApi.ts
import { UserInfo } from '@/models/userInfoModel'
import axios from 'axios'

// Đặt đường dẫn cơ bản cho API userInfo
const BASE_URL = import.meta.env.VITE_API_BASE_URL

// Hàm gọi API để lấy thông tin userInfo theo UID
export const getUserInfoById = async (UID: number) => {
  return axios.get<UserInfo>(`${BASE_URL}/${UID}`)
}

// Hàm gọi API để lấy tất cả userInfo, có hỗ trợ phân trang, lọc và sắp xếp
export const getAllUserInfo = async (params: {
  page: number
  size: number
  sortBy?: string
  sortOrder?: string
  filters?: Partial<UserInfo>
}) => {
  return axios.get<{ data: UserInfo[]; total: number }>(BASE_URL, { params })
}

// Hàm gọi API để tạo mới một bản ghi userInfo
export const createUserInfo = async (data: UserInfo) => {
  return axios.post(BASE_URL, data)
}

// Hàm gọi API để cập nhật một bản ghi userInfo theo UID
export const updateUserInfo = async (UID: number, data: UserInfo) => {
  return axios.put(`${BASE_URL}/${UID}`, data)
}

// Hàm gọi API để xóa một bản ghi userInfo theo UID
export const deleteUserInfo = async (UID: number) => {
  return axios.delete(`${BASE_URL}/${UID}`)
}
