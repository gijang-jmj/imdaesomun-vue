<template>
  <div class="max-w-5xl mx-auto">
    <AppNav />
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNav from './AppNav.vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>
<style scoped></style>
