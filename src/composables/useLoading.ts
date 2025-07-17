import { shallowRef } from 'vue'

const isLoading = shallowRef(false)

const showLoading = () => {
  isLoading.value = true
  document.body.classList.add('no-scroll')
}

const hideLoading = () => {
  isLoading.value = false
  document.body.classList.remove('no-scroll')
}

export const useLoading = () => {
  return {
    isLoading,
    showLoading,
    hideLoading,
  }
}
