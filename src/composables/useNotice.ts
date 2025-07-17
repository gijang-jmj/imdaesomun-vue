import { ref } from 'vue'
import type { Notice } from '@/types/notice'
import { getNoticeById, saveNotice, deleteNotice, getNoticeSaved } from '@/api/notice-api'
import {
  useShNoticeListStore,
  useGhNoticeListStore,
  useIhNoticeListStore,
  useBmcNoticeListStore,
} from '@/stores/notice-store'
import { useUserStore } from '@/stores/user-store'
import { useModal } from './useModal'
import LoginModal from '@/components/shared/LoginModal.vue'
import { useLoading } from '@/composables/useLoading'

export const useNotice = () => {
  const notice = ref<Notice | null>(null)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)
  const isSaved = ref(false)

  const userStore = useUserStore()
  const { open } = useModal()
  const { showLoading, hideLoading } = useLoading()

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

  const handleSaveNotice = async (id: string) => {
    if (userStore.isLoggedIn && userStore.uid) {
      try {
        showLoading()
        await saveNotice(id, userStore.uid)
        isSaved.value = true
      } catch (error) {
        console.error('Error saving notice:', error)
      } finally {
        hideLoading()
      }
    } else {
      open(LoginModal)
    }
  }

  const handleDeleteNotice = async (id: string) => {
    if (userStore.isLoggedIn && userStore.uid) {
      try {
        showLoading()
        await deleteNotice(id, userStore.uid)
        isSaved.value = false
      } catch (error) {
        console.error('Error deleting notice:', error)
      } finally {
        hideLoading()
      }
    } else {
      open(LoginModal)
    }
  }

  const checkIfNoticeSaved = async (id: string) => {
    if (userStore.isLoggedIn && userStore.uid) {
      try {
        isSaved.value = await getNoticeSaved(id, userStore.uid)
      } catch (error) {
        console.error('Error checking if notice is saved:', error)
      }
    } else {
      isSaved.value = false
    }
  }

  return {
    notice,
    isLoading,
    error,
    isSaved,
    fetchNoticeById,
    handleSaveNotice,
    handleDeleteNotice,
    checkIfNoticeSaved,
  }
}
