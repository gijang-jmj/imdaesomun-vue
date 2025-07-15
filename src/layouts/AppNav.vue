<template>
  <nav class="sticky bottom-0 px-4 py-8 md:hidden">
    <div class="flex items-center justify-around rounded-full border-2 border-teal-500 bg-white">
      <RouterLink
        :to="AppRoute.HOME"
        class="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-teal-500 transition-colors hover:text-teal-500"
      >
        <IconHome class="w-5" />
        <span class="text-caption-bold">홈</span>
      </RouterLink>
      <RouterLink
        :to="AppRoute.SAVED"
        class="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-gray-400 transition-colors hover:text-teal-500"
      >
        <IconBookmarkCheck class="w-5" />
        <span class="text-caption-bold">저장됨</span>
      </RouterLink>
      <RouterLink
        :to="AppRoute.PROFILE"
        class="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-gray-400 transition-colors hover:text-teal-500"
      >
        <IconProfile class="w-5" />
        <span class="text-caption-bold">내정보</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { AppRoute } from '@/constants/AppRoute'
import IconHome from '@/components/icons/IconHome.vue'
import IconBookmarkCheck from '@/components/icons/IconBookmarkCheck.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
</script>
