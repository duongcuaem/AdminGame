const TOKEN_KEY = 'auth_token'

// Lưu token vào localStorage
export const saveTokenToStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

// Lưu token vào sessionStorage
export const saveTokenToSession = (token: string) => {
  sessionStorage.setItem(TOKEN_KEY, token)
}

// Lấy token từ localStorage
export const getToken = () => {
  // Ưu tiên lấy token từ localStorage nếu có, nếu không thì lấy từ sessionStorage
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)
}

// Xóa token khỏi localStorage
export const clearToken = () => {
  // Xóa token từ cả localStorage và sessionStorage
  localStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(TOKEN_KEY)
}
