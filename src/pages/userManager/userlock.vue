<!-- src/views/UserInfoView.vue -->
<script setup lang="ts">
import Vpagination from '@/components/ui/Vpagination.vue';
import { useUserInfoStore } from '@/stores/userInfoStore';
import userLockTable from '@/views/pages/user-manager/userLockTable.vue';

// Store userInfo
const userInfoStore = useUserInfoStore()

const handlePageChange = (page: number) => {
  userInfoStore.page.value = page;
  userInfoStore.fetchUserInfoList();
};

// Tải dữ liệu khi component được mounted
onMounted(() => {
  userInfoStore.fetchUserInfoList()
})

// // Tính tổng số trang dựa trên tổng số kết quả và kích thước trang
// const totalPages = computed(() => Math.ceil(total.value / size.value));

// // Theo dõi thay đổi trên các bộ lọc, trang, sắp xếp để tải lại danh sách khi có thay đổi
// watch([filters, page, sortBy, sortOrder], fetchUserInfoList);

// // Hàm thay đổi trang khi người dùng nhấn vào nút phân trang
// const changePage = (newPage: number) => {
//   if (newPage > 0 && newPage <= totalPages.value) {
//     page.value = newPage;
//   }
// };

// // Hàm đặt cột sắp xếp và thay đổi thứ tự sắp xếp (tăng hoặc giảm dần)
// const setSort = (column: string) => {
//   if (sortBy.value === column) {
//     sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
//   } else {
//     sortBy.value = column;
//     sortOrder.value = 'asc';
//   }
// };

// Dữ liệu động được định nghĩa trong component cha
const desserts = [
  { dessert: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  { dessert: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
  { dessert: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4.9 },
  { dessert: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  { dessert: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
  { dessert: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4.9 },
  { dessert: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  { dessert: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
  { dessert: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4.9 },
  { dessert: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  { dessert: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
  { dessert: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4.9 },
  { dessert: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  { dessert: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
  { dessert: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { dessert: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { dessert: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4.9 },
];

</script>
<template>

  <VRow>
    <VCol cols="12">
      <VCard title="Fixed Header">
        <VCardText>
          You can fix the header of table by using the <code>fixed-header</code> prop.
        </VCardText>
        <userLockTable :desserts="desserts" />
      </VCard>
    </VCol>
  </VRow>
  <!-- Pagination Component -->
  <Vpagination :total="userInfoStore.total.value" :currentPage="userInfoStore.page.value"
    :pageSize="userInfoStore.size.value" @page-change="handlePageChange" />

</template>
