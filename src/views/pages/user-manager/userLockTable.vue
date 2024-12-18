<script setup lang="ts">
// Định nghĩa props với TypeScript để nhận data từ bên ngoài
import { defineProps } from 'vue';

interface DessertItem {
  dessert: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

defineProps<{
  desserts: DessertItem[]; // Props truyền vào là một mảng DessertItem
}>();

</script>

<template>
  <VTable height="60vh" fixed-header>
    <thead>
      <tr>
        <th class="text-uppercase text-center">STT</th>
        <th class="text-uppercase text-center">Username</th>
        <th class="text-uppercase text-center">Nickname</th>
        <th class="text-uppercase text-center">Số dư Win</th>
        <th class="text-uppercase text-center">Số Win KS</th>
        <th class="text-uppercase text-center">Vippoint</th>
        <th class="text-uppercase text-center">Bảo mật ĐT</th>
        <th class="text-uppercase text-center">Bảo mật Email</th>
        <th class="text-uppercase text-center">Email</th>
        <th class="text-uppercase text-center">CMND</th>
        <th class="text-uppercase text-center">Tài khoản</th>
        <th class="text-uppercase text-center">Bảo mật ĐN</th>
        <th class="text-uppercase text-center">TG bảo mật</th>
        <th class="text-uppercase text-center">Ngày tạo</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.dessert">
        <td>{{ item.dessert }}</td>
        <td class="text-center">{{ item.calories }}</td>
        <td class="text-center">{{ item.fat }}</td>
        <td class="text-center">{{ item.carbs }}</td>
        <td class="text-center">{{ item.protein }}</td>
        <td>{{ item.dessert }}</td>
        <td class="text-center">{{ item.calories }}</td>
        <td class="text-center">{{ item.fat }}</td>
        <td class="text-center">{{ item.carbs }}</td>
        <td class="text-center">{{ item.protein }}</td>
        <td class="text-center">{{ item.calories }}</td>
        <td class="text-center">{{ item.fat }}</td>
        <td class="text-center">{{ item.carbs }}</td>
        <td class="text-center">{{ item.protein }}</td>
      </tr>
    </tbody>
  </VTable>
</template>
