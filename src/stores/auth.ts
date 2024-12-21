import { authService } from '@/api/auth'
import type { UserDto } from '@/models/dto'
import { clearToken, getToken, saveTokenToSession, saveTokenToStorage } from '@/utils/storage'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: getToken(),
    user: null,
    userDto: null as UserDto | null, // Lưu thông tin hồ sơ chi tiết
  }),
  getters: {
    // Getter kiểm tra trạng thái người dùng đã đăng nhập chưa
    isLoggedIn: state => !!state.token && !!state.user,
  },
  actions: {
    /**
     * Hàm đăng nhập
     * @param {string} username
     * @param {string} password
     * @param {boolean} remember - Nếu true thì lưu token vào localStorage
     */
    async login(username: string, password: string, remember: boolean) {
      try {
        const response = await authService.login(username, password)
        this.token = response.token
        this.user = response.user
        // Lưu token vào localStorage hoặc sessionStorage
        if (this.token) {
          if (remember) {
            saveTokenToStorage(this.token)
          } else {
            saveTokenToSession(this.token)
          }

          // Đánh dấu là đã xác thực
          this.isAuthenticated = true
          return this.user
        }
      } catch (error) {
        console.error('Đăng nhập thất bại', error)
        throw new Error('Đăng nhập thất bại')
      }
    },
    /**
     * Hàm đăng xuất
     */
    async logout() {
      try {
        // Xóa token khỏi storage
        this.token = null
        this.user = null
        this.isAuthenticated = false

        clearToken() // Xóa token khỏi localStorage và sessionStorage
      } catch (error) {
        console.error('Lỗi khi đăng xuất:', error)
        throw new Error('Đăng xuất thất bại')
      }
    },
    /**
     * Hàm đăng ký tài khoản mới
     * @param {string} username
     * @param {string} password
     * @param {string} confirmPassword
     */
    async register(username: string, password: string, confirmPassword: string) {
      try {
        const response = await authService.register(username, password, confirmPassword)
        // Kiểm tra response
        if (!response) {
          throw new Error('Không nhận được dữ liệu từ server')
        }

        const { token, user } = response

        if (!token || !user) {
          throw new Error('Thông tin đăng ký không hợp lệ')
        }
        this.token = token
        this.user = user
        saveTokenToSession(token)

        this.isAuthenticated = true
        return user
      } catch (error) {
        console.error('Đăng ký thất bại:', error)
        throw new Error('Đăng ký thất bại')
      }
    },
    /**
     * Kiểm tra trạng thái đăng nhập từ cookie hoặc localStorage
     */
    checkAuthStatus() {
      const token = getToken()
      if (token) {
        this.token = token
        this.isAuthenticated = true
      }
    },
    async getUserInfoByUserId(userId: string) {
      try {
        const item = await authService.getByUserId(userId)
        if (item) return item
      } catch (err) {
        console.error('Lỗi khi lấy userDto theo userId:', err)
        throw err
      }
    },
    async getUserInfoByUsername(username: string) {
      try {
        const item = await authService.getByUsername(username)
        if (item) return item
      } catch (err) {
        console.error('Lỗi khi lấy userDto theo username:', err)
        throw err
      }
    },
  },
})
