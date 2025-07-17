<script setup lang="ts">
import { useModal } from '@/composables/useModal'
import { useUserStore } from '@/stores/user-store'
import InfoCard from './InfoCard.vue'
import { watch } from 'vue'

const { close } = useModal()
const userStore = useUserStore()

watch(
  () => userStore.isLoggedIn,
  (isLoggedIn) => {
    if (!isLoggedIn) {
      close()
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <InfoCard class="w-full" content="프로필 정보를 확인하고 로그아웃할 수 있어요" />
    <img
      v-if="userStore.photoURL"
      :src="userStore.photoURL"
      alt="User Avatar"
      class="h-22 w-22 rounded-full border-4 border-gray-100"
    />
    <div class="text-center">
      <p class="text-subtitle-bold">{{ userStore.displayName }}</p>
      <p class="text-body text-gray-500">{{ userStore.email }}</p>
    </div>
    <div class="mt-4 flex w-full flex-col gap-2">
      <button
        @click="userStore.logout"
        class="w-full cursor-pointer rounded-lg bg-red-50 px-4 py-2 text-body text-red-500 transition-colors hover:bg-red-100"
      >
        로그아웃
      </button>
      <button
        @click="close"
        class="w-full cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-body text-gray-500 transition-colors hover:bg-gray-200"
      >
        닫기
      </button>
    </div>
  </div>
</template>
