import type { UserManager } from '@/models/userManager'
import { PaginationInfo, SortitionInfo } from '@/objects'
import { UserCondition } from '@/objects/userManager'
import { userLockService } from '@/services/UserManager/user-lock.service'
import { defineStore } from 'pinia'
import type { LocationQuery } from 'vue-router'

export const useUserLockStore = defineStore('userManager-userlock', () => {
  /* STATES */
  const currentUserLocks = ref<UserManager[]>([]) // Danh sách user lock
  const currentUserLock = ref<UserManager | null>(null) // User lock hiện tại
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

  // Tạo mới user lock
  async function create(userlock: UserManager) {
    try {
      const item = await userLockService.create<UserManager>(userlock)
      if (item) currentUserLock.value = item
      return currentUserLock.value
    } catch (err) {
      console.error('Lỗi khi tạo user lock:', err)
      throw err
    }
  }

  // Cập nhật user lock
  async function update(userlock: UserManager) {
    try {
      const item = await userLockService.update<UserManager>(userlock)
      if (item) currentUserLock.value = item
      return currentUserLock.value
    } catch (err) {
      console.error('Lỗi khi cập nhật user lock:', err)
      throw err
    }
  }

  // Xóa user lock
  async function remove(userId: number) {
    try {
      await userLockService.remove<void>(userId)
      currentUserLocks.value = currentUserLocks.value.filter(user => user.id !== userId)
    } catch (err) {
      console.error('Lỗi khi xóa user lock:', err)
      throw err
    }
  }

  // Lấy tất cả user lock
  async function fetchAll() {
    try {
      const items = await userLockService.getAll<UserManager[]>()
      currentUserLocks.value = items
      return currentUserLocks.value
    } catch (err) {
      console.error('Lỗi khi lấy danh sách user lock:', err)
      throw err
    }
  }

  // Lấy user lock theo ID
  async function fetchById(id: number) {
    try {
      const item = await userLockService.getById<UserManager>(id)
      if (item) currentUserLock.value = item
      return currentUserLock.value
    } catch (err) {
      console.error('Lỗi khi lấy user lock theo ID:', err)
      throw err
    }
  }

  async function fetchByCondition() {
    try {
      const data = await userLockService.getByCondition(currentCondition.value)

      if (data.items) {
        currentUserLocks.value = data.items // Gán danh sách user vào state
      }
      if (data.total !== undefined) {
        currentPaging.value.set({ total: data.total }) // Gán tổng số user vào state
      }

      return currentUserLocks.value
    } catch (err) {
      console.error('Lỗi khi tìm kiếm user lock:', err)
      throw err
    }
  }

  // Tìm kiếm user lock có phân trang
  async function fetchPagingByCondition() {
    try {
      const { items = [], total = 0 } = await userLockService.getPagingByCondition(
        currentPaging.value,
        currentCondition.value,
        currentSorting.value,
      )

      currentUserLocks.value = items // Gán danh sách user vào state
      currentPaging.value.set({ total }) // Gán tổng số user vào state

      return currentUserLocks.value
    } catch (err) {
      console.error('Lỗi khi tìm kiếm user lock có phân trang:', err)
      throw err
    }
  }

  return {
    currentUserLock,
    currentUserLocks,
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
  import.meta.hot.accept(acceptHMRUpdate(useUserLockStore, import.meta.hot))
}
