<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { AppRoute } from '@/constants/app-route'
import IconHome from '@/components/icons/IconHome.vue'
import IconBookmarkCheck from '@/components/icons/IconBookmarkCheck.vue'

const route = useRoute()
</script>

<template>
  <nav class="sticky bottom-0 px-4 pb-4 md:hidden">
    <div class="flex justify-end">
      <div class="flex flex-col rounded-xl border-2 border-teal-500 bg-white">
        <RouterLink
          :to="AppRoute.HOME"
          class="mx-2 flex h-11 items-center justify-center gap-0.5 border-b-2 border-teal-500 transition-colors hover:text-teal-500"
          :class="
            route.path === '/' || route.path === AppRoute.HOME ? 'text-teal-500' : 'text-gray-400'
          "
        >
          <IconHome class="w-6" />
        </RouterLink>
        <RouterLink
          :to="AppRoute.SAVED"
          class="mx-2 flex h-11 items-center justify-center gap-0.5 transition-colors hover:text-teal-500"
          :class="route.path === AppRoute.SAVED ? 'text-teal-500' : 'text-gray-400'"
        >
          <IconBookmarkCheck class="w-6" />
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
