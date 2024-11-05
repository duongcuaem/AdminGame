// stores/webSocketStore.ts
import { useWebSocket } from '@/services/useWebSocket'
import { defineStore } from 'pinia'

export const useWebSocketStore = defineStore('webSocketStore', () => {
  const {
    connectWebSocket,
    subscribeToChannel,
    unsubscribeFromChannel,
    sendMessage,
    disconnectWebSocket,
    isConnected,
  } = useWebSocket()

  const connect = (token: string) => {
    connectWebSocket(token)
  }

  const disconnect = () => {
    disconnectWebSocket()
  }

  return {
    connect,
    disconnect,
    subscribeToChannel,
    unsubscribeFromChannel,
    sendMessage,
    isConnected,
  }
})
