export const routes = [
  // Các trang cần đăng nhập
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    meta: { requiresAuth: false }, // Layout mặc định yêu cầu xác thực
    children: [
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
        meta: { requiresAuth: false }, // Account Settings yêu cầu đăng nhập
      },
      {
        path: 'typography',
        component: () => import('@/pages/typography.vue'),
        meta: { requiresAuth: false }, // Typography yêu cầu đăng nhập
      },
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
        meta: { requiresAuth: false }, // Icons yêu cầu đăng nhập
      },
      {
        path: 'cards',
        component: () => import('@/pages/cards.vue'),
        meta: { requiresAuth: false }, // Cards yêu cầu đăng nhập
      },
      {
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
        meta: { requiresAuth: false }, // Tables yêu cầu đăng nhập
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
        meta: { requiresAuth: false }, // Form Layouts yêu cầu đăng nhập
      },

      //llvllr: 05/11/2024 : bằng true thì bắt buộc đăng nhập mới truy cập và ngược lại
      {
        path: 'notification',
        component: () => import('@/pages/notification.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },

  // Các trang không cần đăng nhập
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    meta: { requiresAuth: false }, // Layout trống không yêu cầu xác thực
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
        meta: { requiresAuth: false }, // Trang login không cần đăng nhập
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
        meta: { requiresAuth: false }, // Trang đăng ký không cần đăng nhập
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
        meta: { requiresAuth: false }, // Trang lỗi không cần đăng nhập
      },
    ],
  },
  //llvllrdao 18/12/2024 quản lý user
  {
    path: '/userManager',
    component: () => import('@/layouts/default.vue'),
    meta: { requiresAuth: true }, // Layout mặc định yêu cầu xác thực
    children: [
      {
        path: 'userlock',
        component: () => import('@/pages/userManager/userlock.vue'),
        meta: { requiresAuth: false }, // Account Settings yêu cầu đăng nhập
      },
    ],
  },
]
