<!-- <template>
  <div>
    <h2>WebSocket Component for /channel1</h2>
    <input v-model="messageContent" placeholder="Type a message" />
    <button @click="sendMessageToChannel">Send to Channel</button>
  </div>
</template>

<script setup lang="ts">
import { useWebSocket } from '@/composables/useWebSocket';
import { onMounted, onUnmounted, ref } from 'vue';

const channelName = '/channel1'; // Tên kênh cho component này
const { connectWebSocket, subscribeToChannel, unsubscribeFromChannel, sendMessage, disconnectWebSocket } = useWebSocket();

const messageContent = ref(''); // Biến lưu trữ nội dung tin nhắn

// Kết nối WebSocket và đăng ký vào kênh cụ thể khi component được mounted
onMounted(() => {
  connectWebSocket(); // Kết nối WebSocket nếu chưa kết nối

  // Đăng ký vào kênh của component
  subscribeToChannel(channelName, (message) => {
    console.log(`Received message on ${channelName}:`, message.body); // Xử lý tin nhắn nhận được từ kênh này
  });
});

// Hủy đăng ký khỏi kênh khi component bị unmounted
onUnmounted(() => {
  unsubscribeFromChannel(channelName); // Hủy đăng ký khỏi kênh cụ thể của component này
  disconnectWebSocket(); // Ngắt kết nối nếu cần (nếu không dùng component nào khác)
});

// Hàm gửi tin nhắn đến kênh cụ thể của component này
const sendMessageToChannel = () => {
  sendMessage(channelName, {
    senderId: 'user1',
    recipientId: null,
    channelId: channelName,
    content: messageContent.value,
    timestamp: new Date().toISOString(),
  });
  messageContent.value = ''; // Xóa nội dung tin nhắn sau khi gửi
};
</script>

<style scoped lang="scss">
/* Sử dụng SCSS để styling */
</style> -->
