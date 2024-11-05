import { createApp } from 'vue'

import App from '@/App.vue'
import { useWebSocketStore } from '@/stores/webSocketStore'
import { registerPlugins } from '@core/utils/plugins'
import { createPinia } from 'pinia'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'

import './tailwind.scss' // Đảm bảo đường dẫn này trỏ đúng đến file Tailwind mà bạn đã tạo (tailwind.scss)

// Create vue app
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// Register plugins
registerPlugins(app)

const webSocketStore = useWebSocketStore()
// Tự động kết nối nếu có token hợp lệ trong localStorage
const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token')
if (token) {
  webSocketStore.connect(token)
}

// Mount vue app
app.mount('#app')
