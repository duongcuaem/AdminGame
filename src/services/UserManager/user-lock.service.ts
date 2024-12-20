import { aph, api } from '@/composables'
import type { UserManager } from '@/models/userManager'
import type { ApiResponse, PaginationInfo, SortitionInfo } from '@/objects'
import type { UserCondition } from '@/objects/userManager'

const path = '/userManager'

interface UserListResponse {
  items: UserManager[] // Danh sách các user
  total: number // Tổng số user
}

export const userLockService = {
  create,
  update,
  remove,
  getAll,
  getById,
  getPagingByCondition,
  getByCondition,
}

// Tạo mới user
async function create<T>(user: UserManager): Promise<T> {
  const response = await api.post<T>(path, user)
  return response.data // Trả về trực tiếp dữ liệu từ response
}

// Cập nhật user
async function update<T>(user: UserManager): Promise<T> {
  const response = await api.patch<T>(path, user)
  return response.data
}

// Xóa user
async function remove<T>(userId: number): Promise<T> {
  const response = await api.delete<T>(path, { data: userId })
  return response.data
}

// Lấy tất cả user
async function getAll<T>(): Promise<T> {
  const response = await api.get<T>(`${path}/all`)
  return response.data
}

// Lấy user theo ID
async function getById<T>(id: number): Promise<T> {
  const response = await api.get<T>(`${path}/${id}`)
  return response.data
}

// Lấy user theo điều kiện
async function getByCondition(condition: UserCondition): Promise<ApiResponse<UserManager>> {
  const response = await api.post<ApiResponse<UserManager>>(`${path}/condition`, condition)
  return response.data
}

// Lấy user có phân trang và điều kiện
async function getPagingByCondition(
  pagination: PaginationInfo,
  condition: UserCondition,
  sortition?: SortitionInfo,
): Promise<ApiResponse<UserManager>> {
  const response = await api.post<ApiResponse<UserManager>>(
    `${path}/condition${aph.paging(pagination)}${aph.sorting(sortition)}`,
    condition,
  )
  return response.data
}

export default userLockService