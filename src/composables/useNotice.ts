import { ref } from 'vue'
import type { Notice } from '@/types/notice'
import { getNoticeById } from '@/api/notice-api'
import {
  useShNoticeListStore,
  useGhNoticeListStore,
  useIhNoticeListStore,
  useBmcNoticeListStore,
} from '@/stores/notice-store'

export const useNotice = () => {
  const notice = ref<Notice | null>(null)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  const stores = [
    useShNoticeListStore(),
    useGhNoticeListStore(),
    useIhNoticeListStore(),
    useBmcNoticeListStore(),
  ]

  const findNoticeInStores = (id: string): Notice | null => {
    for (const store of stores) {
      const found = store.notices.find((n) => n.id === id)
      if (found) {
        return found
      }
    }
    return null
  }

  const fetchNoticeById = async (id: string) => {
    isLoading.value = true
    error.value = null
    try {
      const noticeFromStore = findNoticeInStores(id)
      if (noticeFromStore) {
        notice.value = noticeFromStore
        return
      }

      notice.value = await getNoticeById(id)
    } catch (e) {
      if (e instanceof Error) {
        error.value = e
      } else {
        error.value = new Error('An unknown error occurred while fetching the notice.')
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    notice,
    isLoading,
    error,
    fetchNoticeById,
  }
}
