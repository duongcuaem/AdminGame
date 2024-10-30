import { IMessage, Stomp } from '@stomp/stompjs'
import { ref } from 'vue'

// Định nghĩa giao diện Message
interface Message {
  senderId: string
  recipientId: string | null
  channelId: string
  content: string
  timestamp: string
}

export function useWebSocket() {
  const stompClient = ref<ReturnType<typeof Stomp.over> | null>(null)
  const isConnected = ref(false)
  const subscriptions = new Map<string, any>()

  // Hàm kết nối WebSocket với userId
  const connectWebSocket = () => {
    if (stompClient.value || isConnected.value) return

    // Địa chỉ WebSocket endpoint
    const socketUrl = 'http://localhost:8080/ws'
    stompClient.value = Stomp.over(new WebSocket(socketUrl)) // Sử dụng factory

    stompClient.value.debug = console.log // Bật debug
    stompClient.value.connect(
      {},
      () => {
        console.log('Đã kết nối tới WebSocket Hub')
        isConnected.value = true

        // Đăng ký vào kênh thông báo dành riêng cho người dùng
        subscribeToChannel(`/topic/notifications`, message => {
          console.log('Received notification:', message.body)
        })

        // Đăng ký vào kênh tin nhắn cá nhân cho người dùng
        subscribeToChannel(`/user/queue/messages`, message => {
          console.log('Received personal message:', message.body)
        })
      },
      (error: any) => {
        console.error('Lỗi kết nối WebSocket:', error)
        retryConnection() // Thử kết nối lại nếu thất bại
      },
    )
  }

  // Thử kết nối lại sau 5 giây nếu bị mất kết nối
  const retryConnection = () => {
    setTimeout(() => {
      console.log('Đang thử kết nối lại WebSocket...')
      connectWebSocket()
    }, 5000)
  }

  // Đăng ký vào một kênh cụ thể
  const subscribeToChannel = (channel: string, callback: (message: IMessage) => void) => {
    if (!stompClient.value || !isConnected.value) return

    if (subscriptions.has(channel)) return

    const subscription = stompClient.value.subscribe(channel, callback)
    subscriptions.set(channel, subscription)
    console.log(`Subscribed to channel: ${channel}`)
  }

  // Hủy đăng ký khỏi một kênh
  const unsubscribeFromChannel = (channel: string) => {
    const subscription = subscriptions.get(channel)
    if (subscription) {
      subscription.unsubscribe()
      subscriptions.delete(channel)
      console.log(`Unsubscribed from channel: ${channel}`)
    }
  }

  // Gửi tin nhắn đến một điểm đích
  const sendMessage = (destination: string, message: Message) => {
    if (stompClient.value?.connected) {
      stompClient.value.send(destination, {}, JSON.stringify(message))
    }
  }

  // Ngắt kết nối hoàn toàn
  const disconnectWebSocket = () => {
    stompClient.value?.disconnect(() => {
      console.log('Disconnected from WebSocket Hub')
      isConnected.value = false
      subscriptions.clear()
    })
  }

  return {
    connectWebSocket,
    subscribeToChannel,
    unsubscribeFromChannel,
    sendMessage,
    disconnectWebSocket,
    isConnected,
  }
}
