<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <div class="flex-1">
      <div class="mx-auto max-w-5xl">
        <RouterView />
      </div>
    </div>
    <AppNav />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNav from './AppNav.vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>
<style scoped></style>
