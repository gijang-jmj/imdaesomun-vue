<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { AppRoute } from '@/constants/app-route'
import IconHomeFill from '@/components/icons/IconHomeFill.vue'

const route = useRoute()
</script>

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
            class="rounded-lg px-3 py-1 text-subtitle transition-colors hover:text-teal-500"
            :class="
              route.path === '/' || route.path === AppRoute.HOME ? 'text-teal-500' : 'text-gray-400'
            "
            >홈</RouterLink
          >
          <RouterLink
            :to="AppRoute.SAVED"
            class="rounded-lg px-3 py-1 text-subtitle transition-colors hover:text-teal-500"
            :class="route.path === AppRoute.SAVED ? 'text-teal-500' : 'text-gray-400'"
            >내 공고</RouterLink
          >
        </nav>
      </div>
      <div>
        <span class="text-caption text-gray-400">공고 DB | 2023.03.15 16:30 기준</span>
      </div>
    </div>
  </header>
</template>
