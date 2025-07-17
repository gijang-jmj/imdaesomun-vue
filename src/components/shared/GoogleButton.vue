<template>
  <button
    @click="emit('click')"
    class="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-2 transition-colors hover:bg-gray-50"
  >
    <img
      src="https://developers.google.com/identity/images/g-logo.png"
      alt="google logo"
      class="h-5 w-5"
    />
    <span class="flex-1 text-body">Google 계정으로 시작하기</span>
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped></style>
