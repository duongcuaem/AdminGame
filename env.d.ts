import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    action?: string
    subject?: string
    layoutWrapperClasses?: string
    navActiveLink?: RouteLocationRaw
    layout?: 'blank' | 'default'
    unauthenticatedOnly?: boolean
    public?: boolean
  }
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // Khai báo thêm các biến môi trường khác ở đây nếu có
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
