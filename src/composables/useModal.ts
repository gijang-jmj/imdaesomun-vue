import { shallowRef } from 'vue'
import type { Component } from 'vue'

const isOpen = shallowRef(false)
const modalComponent = shallowRef<Component | null>(null)

const open = (component: Component) => {
  modalComponent.value = component
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
  modalComponent.value = null
}

export const useModal = () => {
  return {
    isOpen,
    modalComponent,
    open,
    close,
  }
}
