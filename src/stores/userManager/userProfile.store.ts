import type { UserInfo } from '@/models/userManager'
import { PaginationInfo, SortitionInfo } from '@/objects'
import { UserCondition } from '@/objects/userManager'
import { userProfileService } from '@/services/UserManager/user-profile.service'
import { defineStore } from 'pinia'
import type { LocationQuery } from 'vue-router'

export const useUserProfileStore = defineStore('userManager-userprofile', () => {
  /* STATES */
  const currentUserProfiles = ref<UserInfo[]>([]) // Danh sách user profile
  const currentUserProfile = ref<UserInfo | null>(null) // User profile hiện tại
  const currentPaging = ref(new PaginationInfo({})) // Thông tin phân trang
  const currentSorting = ref(new SortitionInfo({})) // Thông tin sắp xếp
  const currentCondition = ref(new UserCondition({})) // Điều kiện tìm kiếm

  /* ACTIONS */

  // Đồng bộ trạng thái từ route query
  function setStateFromRoute(query: LocationQuery): void {
    // Phân trang
    currentPaging.value.set({
      page: Number(query.page || import.meta.env.VITE_PAGING_PAGE),
      limit: Number(query.limit || import.meta.env.VITE_PAGING_LIMIT),
    })

    // Điều kiện tìm kiếm
    currentCondition.value.reset()
    if (query.keyword) currentCondition.value.set({ title: String(query.keyword) })
    if (query.status) currentCondition.value.set({ status: toNumbArr(query.status) })
    if (query.sites) currentCondition.value.set({ siteIds: toNumbArr(query.sites) })

    // Sắp xếp
    currentSorting.value.reset()
    if (query.sorts) currentSorting.value.set({ sorts: String(query.sorts) })
  }

  // Tạo mới user profile
  async function create(userprofile: UserInfo) {
    try {
      const item = await userProfileService.create<UserInfo>(userprofile)
      if (item) currentUserProfile.value = item
      return currentUserProfile.value
    } catch (err) {
      console.error('Lỗi khi tạo user profile:', err)
      throw err
    }
  }

  // Cập nhật user profile
  async function update(userprofile: UserInfo) {
    try {
      const item = await userProfileService.update<UserInfo>(userprofile)
      if (item) currentUserProfile.value = item
      return currentUserProfile.value
    } catch (err) {
      console.error('Lỗi khi cập nhật user profile:', err)
      throw err
    }
  }

  // Xóa user profile
  async function remove(userId: number) {
    try {
      await userProfileService.remove<void>(userId)
      currentUserProfiles.value = currentUserProfiles.value.filter(user => user.uid !== userId)
    } catch (err) {
      console.error('Lỗi khi xóa user profile:', err)
      throw err
    }
  }

  // Lấy tất cả user profile
  async function fetchAll() {
    try {
      const items = await userProfileService.getAll<UserInfo[]>()
      currentUserProfiles.value = items
      return currentUserProfiles.value
    } catch (err) {
      console.error('Lỗi khi lấy danh sách user profile:', err)
      throw err
    }
  }

  // Lấy user profile theo ID
  async function fetchById(id: number) {
    try {
      const item = await userProfileService.getById<UserInfo>(id)
      if (item) currentUserProfile.value = item
      return currentUserProfile.value
    } catch (err) {
      console.error('Lỗi khi lấy user profile theo ID:', err)
      throw err
    }
  }

  async function fetchByCondition() {
    try {
      const data = await userProfileService.getByCondition(currentCondition.value)

      if (data.items) {
        currentUserProfiles.value = data.items // Gán danh sách user vào state
      }
      if (data.total !== undefined) {
        currentPaging.value.set({ total: data.total }) // Gán tổng số user vào state
      }

      return currentUserProfiles.value
    } catch (err) {
      console.error('Lỗi khi tìm kiếm user profile:', err)
      throw err
    }
  }

  // Tìm kiếm user profile có phân trang
  async function fetchPagingByCondition() {
    try {
      const { items = [], total = 0 } = await userProfileService.getPagingByCondition(
        currentPaging.value,
        currentCondition.value,
        currentSorting.value,
      )

      currentUserProfiles.value = items // Gán danh sách user vào state
      currentPaging.value.set({ total }) // Gán tổng số user vào state

      return currentUserProfiles.value
    } catch (err) {
      console.error('Lỗi khi tìm kiếm user profile có phân trang:', err)
      throw err
    }
  }

  return {
    currentUserProfile,
    currentUserProfiles,
    currentPaging,
    currentCondition,
    currentSorting,
    setStateFromRoute,
    create,
    update,
    remove,
    fetchAll,
    fetchById,
    fetchByCondition,
    fetchPagingByCondition,
  }
})

// Hỗ trợ hot module replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserProfileStore, import.meta.hot))
}
