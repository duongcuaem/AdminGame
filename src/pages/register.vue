<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'; // Đường dẫn có thể khác tùy theo cấu trúc dự án
import { useTheme } from 'vuetify';

import logo from '@images/logo.svg?raw';
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png';
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png';
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png';
import authV1Tree from '@images/pages/auth-v1-tree.png';
// Lấy URL từ biến môi trường
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const router = useRouter();
const authStore = useAuthStore()



const form = ref({
  username: '',
  password: '',
  confirmPassword: '',
  privacyPolicies: false,
})

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? authV1MaskLight
    : authV1MaskDark
})

const isPasswordVisible = ref(false)

// Biến trạng thái lỗi cho tài khoản và mật khẩu
const usernameError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

// ====== Xử lý logic ======
// Hàm xử lý đăng nhập
const handleSignUp = async () => {
  try {
    if (!validateForm()) {
      return; // Ngừng nếu form không hợp lệ
    }
    await authStore.register(form.value.username, form.value.password, form.value.confirmPassword)

    // Điều hướng đến trang dashboard sau khi đăng nhập thành công
    router.push('/login');
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

  // Kiểm tra xác nhận mật khẩu
  if (!form.value.password) {
    confirmPasswordError.value = 'Mật khẩu không được để trống';
    isValid = false;
  } else if (form.value.password.length < 6) {
    confirmPasswordError.value = 'Mật khẩu phải có ít nhất 6 ký tự';
    isValid = false;
  } else if (form.value.password != form.value.password) {
    confirmPasswordError.value = 'Mật khẩu phải giống nhau';
    isValid = false;
  } else {
    confirmPasswordError.value = ''; // Xóa thông báo lỗi nếu hợp lệ
  }

  return isValid;
};


</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <RouterLink to="/" class="d-flex align-center gap-3">
          <!-- eslint-disable vue/no-v-html -->
          <div class="d-flex" v-html="logo" />
          <h2 class="font-weight-medium text-2xl text-uppercase">
            Lucky Boy
          </h2>
        </RouterLink>
      </VCardItem>

      <VCardText class="pt-2">
        <h4 class="text-h4 mb-1">
          Đăng kí tài khoản 🚀
        </h4>
        <p class="mb-0">
          Quản lý ứng dụng !
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => { }">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField v-model="form.username" label="Tên tài khoản" placeholder="Johndoe" />
            </VCol>
            <!-- password -->
            <VCol cols="12">
              <VTextField v-model="form.password" label="Mật khẩu" placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible" />
            </VCol>

            <!--confirm password -->
            <VCol cols="12">
              <VTextField v-model="form.confirmPassword" label="Nhập lại mật khẩu" placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible" />

              <div class="d-flex align-center my-6">
                <VCheckbox id="privacy-policy" v-model="form.privacyPolicies" inline />
                <VLabel for="privacy-policy" style="opacity: 1;">
                  <span class="me-1">tôi đồng ý</span>
                  <a href="javascript:void(0)" class="text-primary">chính sách bảo mật</a>
                </VLabel>
              </div>

              <VBtn block type="button" @click="handleSignUp">
                Đăng ký
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol cols="12" class="text-center text-base">
              <span>Đã có tài khoản?</span>
              <RouterLink class="text-primary ms-2" to="login">
                Đăng nhập
              </RouterLink>
            </VCol>

            <VCol cols="12" class="d-flex align-center">
              <VDivider />
              <span class="mx-4">Hoặc</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol cols="12" class="text-center">
              <!-- <AuthProvider /> -->
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg class="auth-footer-start-tree d-none d-md-block" :src="authV1Tree" :width="250" />

    <VImg :src="authV1Tree2" class="auth-footer-end-tree d-none d-md-block" :width="350" />

    <!-- bg img -->
    <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
