<script setup lang="ts">
import LoginModal from '@/components/shared/LoginModal.vue'
import ProfileModal from '@/components/shared/ProfileModal.vue'
import { useModal } from '@/composables/useModal'

const { open } = useModal()
</script>

<template>
  <div class="flex flex-col">
    <button class="cursor-pointer text-headline" @click="open(LoginModal)">로그인 모달</button>
    <button class="cursor-pointer text-headline" @click="open(ProfileModal)">프로필 모달</button>
  </div>
</template>
