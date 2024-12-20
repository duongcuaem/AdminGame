<script setup lang="ts">
import Pagination from '@/components/Pagination/Pagination.vue';
import { useUserLockStore } from '@/stores/userManager/userlock.store'; // Import Pinia store
import userLockTable from '@/views/pages/user-manager/userLockTable.vue';
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // Import Router hooks

// Sử dụng Router hooks
const route = useRoute();
const router = useRouter();

// Sử dụng store
const userLockStore = useUserLockStore();

// Load data dựa trên route query
async function loadData() {
  await userLockStore.fetchPagingByCondition(); // Gọi API để lấy dữ liệu từ backend
}

// Theo dõi sự thay đổi của route.query và tự động tải lại dữ liệu
watch(
  () => route.query,
  async (newQuery) => {
    userLockStore.setStateFromRoute(newQuery); // Cập nhật state trong store dựa trên route
    await loadData(); // Tải lại dữ liệu
  },
  { immediate: true } // Lần đầu tiên chạy ngay
);

// Dữ liệu phân trang và danh sách user lock
const userLocks = computed(() => userLockStore.currentUserLocks);
const currentPaging = computed(() => userLockStore.currentPaging);

onMounted(async () => {
  const query = route.query;
  const page = query.page || import.meta.env.VITE_PAGING_PAGE;
  const limit = query.limit || import.meta.env.VITE_PAGING_LIMIT;
  const newQuery = { page, limit };
  if (!query.page || !query.limit) {
    router.push({
      path: route.path,
      query: { ...query, ...newQuery },
    });
  }
});

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="User Lock Table">
        <VCardText>
          Bảng User Lock. Thay đổi route (page, limit) sẽ tự động tải lại dữ liệu.
        </VCardText>
        <!-- Bảng hiển thị dữ liệu -->
        <userLockTable :data="userLocks" />
      </VCard>
    </VCol>

    <!-- Phân trang -->
    <VCol cols="12">
      <Pagination :payload="currentPaging" />
    </VCol>
  </VRow>
</template>
