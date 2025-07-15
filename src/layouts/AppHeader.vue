<template>
  <header class="border-b border-gray-100 bg-white">
    <div class="mx-auto flex max-w-5xl items-end justify-between px-4 py-4">
      <div class="flex items-end gap-10">
        <RouterLink :to="AppRoute.HOME" class="flex items-center gap-2">
          <IconHomeFill class="h-6 text-teal-500 md:h-8" />
          <span class="text-title-bold text-teal-500 md:text-section-bold">임대소문</span>
        </RouterLink>
        <nav class="hidden items-center gap-4 md:flex">
          <RouterLink
            :to="AppRoute.HOME"
            class="rounded-lg px-3 py-1 text-subtitle text-teal-500 transition-colors hover:text-teal-500"
            >홈</RouterLink
          >
          <RouterLink
            :to="AppRoute.SAVED"
            class="rounded-lg px-3 py-1 text-subtitle text-gray-400 transition-colors hover:text-teal-500"
            >저장됨</RouterLink
          >
          <RouterLink
            :to="AppRoute.PROFILE"
            class="rounded-lg px-3 py-1 text-subtitle text-gray-400 transition-colors hover:text-teal-500"
            >내정보</RouterLink
          >
        </nav>
      </div>
      <div>
        <span class="text-caption text-gray-400">공고 DB | 2023.03.15 16:30 기준</span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { AppRoute } from '@/constants/AppRoute'
import IconHomeFill from '@/components/icons/IconHomeFill.vue'
</script>
