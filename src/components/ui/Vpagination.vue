<script setup lang="ts">
import { ref } from 'vue';

const currentPage = ref(1); // Trang hiện tại
const totalPages = ref(10); // Tổng số trang

const changePage = (page: number) => {
  currentPage.value = page;
  console.log("Page changed to:", page);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    changePage(currentPage.value - 1);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    changePage(currentPage.value + 1);
  }
};
</script>
<template>
  <div class="flex justify-center mt-4">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <!-- Nút Previous -->
        <li>
          <a href="#" @click="prevPage"
            class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
            Previous
          </a>
        </li>

        <!-- Số trang -->
        <li v-for="page in totalPages" :key="page">
          <a href="#" @click="changePage(page)"
            class="px-3 py-2 leading-tight border text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            :class="{ 'bg-blue-500 text-white': page === currentPage }">
            {{ page }}
          </a>
        </li>

        <!-- Nút Next -->
        <li>
          <a href="#" @click="nextPage"
            class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
