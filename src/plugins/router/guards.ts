import { Router } from 'vue-router'

// Hàm kiểm tra token hoặc trạng thái đăng nhập
function isAuthenticated() {
  const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token')
  return !!token // Trả về true nếu có token, ngược lại là false
}

export function setupNavigationGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const isAuth = isAuthenticated()
    if (to.path === '/login' && isAuth) {
      next('/dashboard') // Nếu đã đăng nhập, điều hướng đến dashboard
    } else if (to.meta.requiresAuth && !isAuth) {
      next('/login') // Nếu không có token, chuyển đến login
    } else {
      next() // Cho phép truy cập bình thường
    }
  })
}
