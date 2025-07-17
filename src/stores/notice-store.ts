import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getBmcNoticeList, getGhNoticeList, getIhNotice, getShNoticeList } from '@/api/notice-api'
import type { Notice } from '@/types/notice'

const createNoticeStore = (id: string, fetcher: () => Promise<Notice[]>) => {
  return defineStore(id, () => {
    const notices = ref<Notice[]>([])
    const isLoading = ref(false)
    const error = ref<Error | null>(null)

    const fetchNotices = async () => {
      const cachedNotices = localStorage.getItem(id)
      if (cachedNotices) {
        try {
          notices.value = JSON.parse(cachedNotices)
          return
        } catch (e) {
          localStorage.removeItem(id)
          console.error('Failed to parse cached notices:', e)
        }
      }

      isLoading.value = true
      error.value = null
      try {
        const fetchedData = await fetcher()
        notices.value = fetchedData
        localStorage.setItem(id, JSON.stringify(fetchedData))
      } catch (e) {
        if (e instanceof Error) {
          error.value = e
        } else {
          error.value = new Error('An unknown error occurred')
        }
      } finally {
        isLoading.value = false
      }
    }

    return {
      notices,
      isLoading,
      error,
      fetchNotices,
    }
  })
}

export const useShNoticeListStore = createNoticeStore('shNoticeList', getShNoticeList)
export const useGhNoticeListStore = createNoticeStore('ghNoticeList', getGhNoticeList)
export const useIhNoticeListStore = createNoticeStore('ihNoticeList', getIhNotice)
export const useBmcNoticeListStore = createNoticeStore('bmcNoticeList', getBmcNoticeList)
