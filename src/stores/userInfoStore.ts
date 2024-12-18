// src/store/userInfoStore.ts
import { createUserInfo, deleteUserInfo, getAllUserInfo, getUserInfoById, updateUserInfo } from '@/api/userInfoApi'
import { UserInfo } from '@/models/userInfoModel'
import { reactive, toRefs } from 'vue'

// Sử dụng Composition API để tạo một store cho userInfo
export function useUserInfoStore() {
  // State lưu trữ dữ liệu và các thông tin liên quan đến userInfo
  const state = reactive({
    userInfoList: [] as UserInfo[], // Danh sách các userInfo
    total: 420, // Tổng số bản ghi userInfo
    loading: false, // Trạng thái tải dữ liệu
    page: 1, // Trang hiện tại
    size: 10, // Số bản ghi trên mỗi trang
    sortBy: 'createdDate', // Cột để sắp xếp (mặc định là ngày tạo)
    sortOrder: 'asc', // Thứ tự sắp xếp (tăng dần)
    filters: {
      // Các bộ lọc dữ liệu
      user: '',
      name: '',
      email: '',
      cmt: '',
    } as Partial<UserInfo>,
  })

  // Hàm để tải danh sách userInfo từ API với phân trang, lọc và sắp xếp
  const fetchUserInfoList = async () => {
    state.loading = true // Bật trạng thái tải
    try {
      // Gọi API và cập nhật state với kết quả
      const response = await getAllUserInfo({
        page: state.page,
        size: state.size,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
        filters: state.filters,
      })
      state.userInfoList = response.data.data
      state.total = response.data.total
    } catch (error) {
      console.error('Failed to fetch user info list:', error)
    } finally {
      state.loading = false // Tắt trạng thái tải
    }
  }

  // Hàm lấy thông tin userInfo theo UID từ API
  const fetchUserInfoById = async (UID: number) => {
    try {
      const response = await getUserInfoById(UID)
      return response.data
    } catch (error) {
      console.error('Failed to fetch user info by ID:', error)
    }
  }

  // Hàm tạo một userInfo mới và tải lại danh sách
  const createUserInfoEntry = async (data: UserInfo) => {
    try {
      await createUserInfo(data)
      await fetchUserInfoList() // Tải lại danh sách sau khi thêm mới
    } catch (error) {
      console.error('Failed to create user info:', error)
    }
  }

  // Hàm cập nhật thông tin userInfo và tải lại danh sách
  const updateUserInfoEntry = async (UID: number, data: UserInfo) => {
    try {
      await updateUserInfo(UID, data)
      await fetchUserInfoList() // Tải lại danh sách sau khi cập nhật
    } catch (error) {
      console.error('Failed to update user info:', error)
    }
  }

  // Hàm xóa userInfo và tải lại danh sách
  const deleteUserInfoEntry = async (UID: number) => {
    try {
      await deleteUserInfo(UID)
      await fetchUserInfoList() // Tải lại danh sách sau khi xóa
    } catch (error) {
      console.error('Failed to delete user info:', error)
    }
  }

  // Trả về các state và hàm để sử dụng trong component
  return {
    ...toRefs(state),
    fetchUserInfoList,
    fetchUserInfoById,
    createUserInfoEntry,
    updateUserInfoEntry,
    deleteUserInfoEntry,
  }
}
