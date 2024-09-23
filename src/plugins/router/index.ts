import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupNavigationGuards } from './guards'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Thiết lập các guard để bảo vệ route
export default function (app: App) {
  app.use(router)
  setupNavigationGuards(router)
}

export { router }
