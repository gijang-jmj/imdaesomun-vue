<script setup lang="ts">
import InfoCard from '@/components/shared/InfoCard.vue'
import LoginModal from '@/components/shared/LoginModal.vue'
import ProfileModal from '@/components/shared/ProfileModal.vue'
import { useModal } from '@/composables/useModal'

const { open } = useModal()
</script>

<template>
  <div class="mx-4 my-2 flex flex-col items-stretch justify-start gap-2">
    <InfoCard content="최근에 저장된 공고순으로 저장되어 있어요" />
  </div>
  <div class="flex flex-col">
    <button class="cursor-pointer text-headline" @click="open(LoginModal)">로그인 모달</button>
    <button class="cursor-pointer text-headline" @click="open(ProfileModal)">프로필 모달</button>
  </div>
</template>
