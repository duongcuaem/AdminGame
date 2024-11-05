<template>
  <div class="notification-page container mx-auto p-4 space-y-8">
    <h2 class="text-2xl font-bold text-center mb-8">Notification Management</h2>

    <!-- Form gửi thông báo đến người dùng -->
    <section class="form-section grid gap-4">
      <h3 class="text-xl font-semibold mb-4 col-span-2">Send Notification to a User</h3>
      <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input v-model="userId" placeholder="User ID"
          class="input border border-gray-300 rounded-md p-2 flex-grow mb-2 md:mb-0" />
        <textarea v-model="userMessage" placeholder="Message"
          class="textarea border border-gray-300 rounded-md p-2 flex-grow mb-2 md:mb-0"></textarea>
        <button @click="sendToUser"
          class="button bg-blue-500 text-white p-2 rounded-md w-full md:w-auto hover:bg-blue-600">
          Send to User
        </button>
      </div>
    </section>

    <!-- Form gửi thông báo đến một kênh -->
    <section class="form-section grid gap-4">
      <h3 class="text-xl font-semibold mb-4 col-span-2">Send Notification to a Channel</h3>
      <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input v-model="channelName" placeholder="Channel Name"
          class="input border border-gray-300 rounded-md p-2 flex-grow mb-2 md:mb-0" />
        <textarea v-model="channelMessage" placeholder="Message"
          class="textarea border border-gray-300 rounded-md p-2 flex-grow mb-2 md:mb-0"></textarea>
        <button @click="sendToChannel"
          class="button bg-blue-500 text-white p-2 rounded-md w-full md:w-auto hover:bg-blue-600">
          Send to Channel
        </button>
      </div>
    </section>

    <!-- Form gửi thông báo đến toàn hệ thống -->
    <section class="form-section grid gap-4">
      <h3 class="text-xl font-semibold mb-4 col-span-2">Send Notification to All</h3>
      <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
        <textarea v-model="globalMessage" placeholder="Message"
          class="textarea border border-gray-300 rounded-md p-2 flex-grow mb-2 md:mb-0"></textarea>
        <button @click="sendToAll"
          class="button bg-blue-500 text-white p-2 rounded-md w-full md:w-auto hover:bg-blue-600">
          Send to All
        </button>
      </div>
    </section>

    <!-- Hiển thị danh sách thông báo với phân trang -->
    <section class="notification-section grid gap-4">
      <h3 class="text-xl font-semibold mb-4 col-span-2">User Notifications</h3>
      <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input v-model="notificationUserId" placeholder="User ID to fetch notifications"
          class="input border border-gray-300 rounded-md p-2 flex-grow mb-2 md:mb-0" />
        <button @click="fetchNotifications"
          class="button bg-blue-500 text-white p-2 rounded-md w-full md:w-auto hover:bg-blue-600">
          Fetch Notifications
        </button>
      </div>

      <ul class="notification-list space-y-4">
        <li v-for="notification in notifications" :key="notification.id" class="bg-gray-100 p-4 rounded-md shadow">
          <p class="text-gray-800">{{ notification.content }}</p>
          <span class="text-gray-500 text-sm">{{ notification.timestamp }}</span>
        </li>
      </ul>

      <!-- Pagination -->
      <div class="pagination flex justify-between mt-4">
        <button @click="previousPage" :disabled="page === 0"
          class="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600">
          Previous
        </button>
        <button @click="nextPage" :disabled="page >= totalPages - 1"
          class="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600">
          Next
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from '@/stores/notificationStore';
import { computed, ref } from 'vue';

const notificationStore = useNotificationStore();

// Biến ràng buộc dữ liệu với form
const userId = ref('');
const userMessage = ref('');
const channelName = ref('');
const channelMessage = ref('');
const globalMessage = ref('');
const notificationUserId = ref('');

// State từ Store
const notifications = computed(() => notificationStore.notifications);
const page = computed(() => notificationStore.page);
const totalPages = computed(() => notificationStore.totalPages);

// Gửi thông báo
const sendToUser = () => notificationStore.sendToUser(userId.value, userMessage.value);
const sendToChannel = () => notificationStore.sendToChannel(channelName.value, channelMessage.value);
const sendToAll = () => notificationStore.sendToAll(globalMessage.value);

// Lấy thông báo
const fetchNotifications = () => notificationStore.fetchNotificationsByUserId(notificationUserId.value);
const nextPage = () => notificationStore.nextPage(notificationUserId.value);
const previousPage = () => notificationStore.previousPage(notificationUserId.value);
</script>

<style scoped>
/* Các class Tailwind CSS đã được áp dụng trực tiếp trong template cho giao diện đáp ứng */
</style>
