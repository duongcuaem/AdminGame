import { login } from '@/api/auth'
import { clearToken, getToken, saveToken } from '@/utils/storage'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: getToken(),
    user: null,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await login(email, password)
        this.token = response.data.token
        this.user = response.data.user
        saveToken(this.token)
      } catch (error) {
        console.error('Login failed', error)
      }
    },
    logout() {
      this.token = null
      this.user = null
      clearToken()
    },
  },
})
