<!-- <script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const wsUrl = 'ws://localhost:8080/ws'
const socket = ref<WebSocket | null>(null)
const messages = ref<string[]>([])

// Hàm kết nối WebSocket
function connectWebSocket() {
  socket.value = new WebSocket(wsUrl)

  socket.value.onopen = () => {
    console.log('WebSocket connected')
  }

  socket.value.onmessage = (event) => {
    messages.value.push(event.data)
    console.log('Received message:', event.data)
  }

  socket.value.onerror = (error) => {
    console.error('WebSocket error:', error)
  }

  socket.value.onclose = () => {
    console.log('WebSocket disconnected')
  }
}

// Gửi tin nhắn qua WebSocket
function sendMessage(message: string) {
  if (socket.value && socket.value.readyState === WebSocket.OPEN) {
    socket.value.send(message)
    console.log('Sent message:', message)
  } else {
    console.error('WebSocket is not open')
  }
}

// Kết nối WebSocket khi component được mount
onMounted(() => {
  connectWebSocket()
})

// Ngắt kết nối WebSocket khi component bị unmount
onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.close()
  }
})
</script>

<template>
  <div>
    <h3>WebSocket Messages</h3>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
  </div>
</template> -->
