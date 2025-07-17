<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { AppRoute } from '@/constants/app-route'
import IconHome from '@/components/icons/IconHome.vue'
import IconBookmarkCheck from '@/components/icons/IconBookmarkCheck.vue'

const route = useRoute()
</script>

<template>
  <nav class="sticky bottom-0 px-4 pb-8 md:hidden">
    <div class="flex items-center justify-around rounded-full border-2 border-teal-500 bg-white">
      <RouterLink
        :to="AppRoute.HOME"
        class="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors hover:text-teal-500"
        :class="
          route.path === '/' || route.path === AppRoute.HOME ? 'text-teal-500' : 'text-gray-400'
        "
      >
        <IconHome class="w-5" />
        <span class="text-caption-bold">홈</span>
      </RouterLink>
      <RouterLink
        :to="AppRoute.SAVED"
        class="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors hover:text-teal-500"
        :class="route.path === AppRoute.SAVED ? 'text-teal-500' : 'text-gray-400'"
      >
        <IconBookmarkCheck class="w-5" />
        <span class="text-caption-bold">내 공고</span>
      </RouterLink>
    </div>
  </nav>
</template>
