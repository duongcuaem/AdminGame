// api/notificationApi.ts

import { Notification } from '@/models/NotificationModel'
import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_URL = '/api/notifications'

export const notificationApi = {
  sendNotificationToUser(userId: string, message: string) {
    return axios.post(`${API_BASE_URL}${API_URL}/user/${userId}`, message, {
      headers: { 'Content-Type': 'text/plain' },
    })
  },

  sendNotificationToChannel(channelName: string, message: string) {
    return axios.post(`${API_BASE_URL}${API_URL}/channel/${channelName}`, message, {
      headers: { 'Content-Type': 'text/plain' },
    })
  },

  sendNotificationToAll(message: string) {
    return axios.post(`${API_BASE_URL}${API_URL}/all`, message, {
      headers: { 'Content-Type': 'text/plain' },
    })
  },

  getNotificationsByUserId(userId: string, page: number, size: number) {
    return axios.get<{ content: Notification[]; totalPages: number }>(`${API_BASE_URL}${API_URL}/user/${userId}`, {
      params: { page, size },
    })
  },
}
