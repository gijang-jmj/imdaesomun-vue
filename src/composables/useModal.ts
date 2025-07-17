import { shallowRef } from 'vue'
import type { Component } from 'vue'

const isOpen = shallowRef(false)
const modalComponent = shallowRef<Component | null>(null)

function open(component: Component) {
  modalComponent.value = component
  isOpen.value = true
}

function close() {
  isOpen.value = false
  modalComponent.value = null
}

export function useModal() {
  return {
    isOpen,
    modalComponent,
    open,
    close,
  }
}
