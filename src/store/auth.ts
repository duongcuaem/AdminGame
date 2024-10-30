import { login, register } from '@/api/auth'
import { useWebSocket } from '@/composables/useWebSocket'
import { clearToken, getToken, saveTokenToSession, saveTokenToStorage } from '@/utils/storage'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: getToken(),
    user: null,
  }),
  actions: {
    async login(username: string, password: string, remember: boolean) {
      try {
        const response = await login(username, password)
        this.token = response.data.token
        this.user = response.data.user

        // Lưu token vào localStorage hoặc sessionStorage
        if (this.token != null) {
          if (remember) {
            saveTokenToStorage(this.token)
          } else {
            saveTokenToSession(this.token)
          }
          // Đánh dấu là đã xác thực
          this.isAuthenticated = true

          // Kết nối WebSocket sau khi đăng nhập thành công
          this.connectWebSocket()
        }
      } catch (error) {
        console.error('Login failed', error)
      }
    },
    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false
      clearToken()
    },
    async register(username: string, password: string, confirmPassword: string) {
      try {
        const response = await register(username, password, confirmPassword)
        this.token = response.data.token
        this.user = response.data.user

        // Lưu token vào localStorage hoặc sessionStorage
        if (this.token != null) {
          saveTokenToSession(this.token)
          // Đánh dấu là đã xác thực và kết nối WebSocket
          this.isAuthenticated = true
          this.connectWebSocket()
        }
      } catch (error) {
        console.error('Login failed', error)
      }
    },
    // Hàm để kết nối WebSocket
    connectWebSocket() {
      const { connectWebSocket } = useWebSocket()
      connectWebSocket()
    },

    // Hàm để ngắt kết nối WebSocket
    disconnectWebSocket() {
      const { disconnectWebSocket } = useWebSocket()
      disconnectWebSocket()
    },
  },
})
