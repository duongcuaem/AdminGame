<script setup lang="ts">
// Import các thành phần cần thiết
import { useAuthStore } from '@/stores/auth'; // Đường dẫn có thể khác tùy theo cấu trúc dự án
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from 'vuetify';


// Import logo và các hình ảnh sử dụng cho giao diện đăng nhập
import logo from '@images/logo.svg?raw';
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png';
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png';
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png';
import authV1Tree from '@images/pages/auth-v1-tree.png';

const router = useRouter();
const authStore = useAuthStore()

// Tạo đối tượng form để lưu trữ dữ liệut email, mật khẩu và trạng thái 'nhớ tài khoản'
const form = ref({
  username: '',
  password: '',
  remember: false,
})

// Lấy chủ đề (theme) hiện tại từ Vuetify
const vuetifyTheme = useTheme()

// Sử dụng computed để xác định hình ảnh mask nền dựa trên chủ đề (theme) hiện tại (sáng/tối)
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? authV1MaskLight // Nếu là theme sáng thì sử dụng hình nền sáng
    : authV1MaskDark // Nếu là theme tối thì sử dụng hình nền tối
})

// Biến để lưu trạng thái hiển thị mật khẩu
const isPasswordVisible = ref(false)

// Biến trạng thái lỗi cho tài khoản và mật khẩu
const usernameError = ref('');
const passwordError = ref('');


// Hàm xử lý đăng nhập
const handleLogin = async () => {
  try {
    if (!validateForm()) {
      return; // Ngừng nếu form không hợp lệ
    }
    await authStore.login(form.value.username, form.value.password, form.value.remember)
    console.log("ddanwg nhap thanfh cong")
    // Điều hướng đến trang dashboard sau khi đăng nhập thành công
    router.push('/notification');
  } catch (error) {
    console.error('Đăng nhập thất bại:', error);
    alert('Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.');
  }
};

const validateForm = () => {
  let isValid = true;

  // Kiểm tra tài khoản
  if (!form.value.username) {
    usernameError.value = 'Tài khoản không được để trống';
    isValid = false;
  } else if (form.value.username.length < 3) {
    usernameError.value = 'Tài khoản phải có ít nhất 3 ký tự';
    isValid = false;
  } else {
    usernameError.value = ''; // Xóa thông báo lỗi nếu hợp lệ
  }

  // Kiểm tra mật khẩu
  if (!form.value.password) {
    passwordError.value = 'Mật khẩu không được để trống';
    isValid = false;
  } else if (form.value.password.length < 6) {
    passwordError.value = 'Mật khẩu phải có ít nhất 6 ký tự';
    isValid = false;
  } else {
    passwordError.value = ''; // Xóa thông báo lỗi nếu hợp lệ
  }

  return isValid;
};

</script>

<template>
  <!-- Giao diện chính của trang đăng nhập -->

  <!-- <socket /> -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <!-- Thẻ VCard chứa form đăng nhập -->
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <!-- Logo và tiêu đề -->
      <VCardItem class="justify-center">
        <RouterLink to="/" class="d-flex align-center gap-3">
          <!-- Hiển thị logo sử dụng thuộc tính v-html -->
          <div class="d-flex" v-html="logo" />
          <h2 class="font-weight-medium text-2xl text-uppercase">
            Lucky Boy
          </h2>
        </RouterLink>
      </VCardItem>

      <!-- Lời chào -->
      <VCardText class="pt-2">
        <h4 class="text-h4 mb-1">
          Chào mừng! 👋🏻
        </h4>
        <p class="mb-0">
          Vui lòng đăng nhập vào tài khoản của bạn và bắt đầu cuộc phiêu lưu
        </p>
      </VCardText>

      <!-- Form đăng nhập -->
      <VCardText>
        <VForm @submit.prevent="handleLogin">
          <VRow>
            <!-- Trường nhập tài khoản -->
            <VCol cols="12">
              <VTextField v-model="form.username" label="Tài khoản" type="text" :error="!!usernameError"
                :error-messages="usernameError" autocomplete="username" required />
            </VCol>

            <!-- Trường nhập mật khẩu -->
            <VCol cols="12">
              <VTextField v-model="form.password" label="Mật khẩu" placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible" :error="!!passwordError"
                :error-messages="passwordError" autocomplete="current-password" required />

              <!-- Checkbox "Ghi nhớ" và link "Quên mật khẩu" -->
              <div class="d-flex align-center justify-space-between flex-wrap my-6">
                <VCheckbox v-model="form.remember" label="Ghi nhớ" />
                <a class="text-primary" href="javascript:void(0)">Quên mật khẩu?</a>
              </div>

              <!-- Nút đăng nhập -->
              <VBtn type="submit">
                Đăng nhập
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>


    </VCard>

    <!-- Hình ảnh cây trang trí -->
    <VImg class="auth-footer-start-tree d-none d-md-block" :src="authV1Tree" :width="250" />

    <VImg :src="authV1Tree2" class="auth-footer-end-tree d-none d-md-block" :width="350" />

    <!-- Hình nền mask dựa trên theme -->
    <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
  </div>
</template>

<!-- Sử dụng SCSS để styling -->
<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
