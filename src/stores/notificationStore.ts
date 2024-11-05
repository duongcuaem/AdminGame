// stores/notificationStore.ts xử lý logic

import { notificationApi } from '@/api/notificationApi'
import { Notification } from '@/models/NotificationModel'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])
  const totalPages = ref(0)
  const page = ref(0)
  const size = ref(5)

  const sendToUser = async (userId: string, message: string) => {
    await notificationApi.sendNotificationToUser(userId, message)
  }

  const sendToChannel = async (channelName: string, message: string) => {
    await notificationApi.sendNotificationToChannel(channelName, message)
  }

  const sendToAll = async (message: string) => {
    await notificationApi.sendNotificationToAll(message)
  }

  const fetchNotificationsByUserId = async (userId: string) => {
    const response = await notificationApi.getNotificationsByUserId(userId, page.value, size.value)
    notifications.value = response.data.content
    totalPages.value = response.data.totalPages
  }

  const nextPage = (userId: string) => {
    if (page.value < totalPages.value - 1) {
      page.value++
      fetchNotificationsByUserId(userId)
    }
  }

  const previousPage = (userId: string) => {
    if (page.value > 0) {
      page.value--
      fetchNotificationsByUserId(userId)
    }
  }

  return {
    notifications,
    totalPages,
    page,
    sendToUser,
    sendToChannel,
    sendToAll,
    fetchNotificationsByUserId,
    nextPage,
    previousPage,
  }
})
