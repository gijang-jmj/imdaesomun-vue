<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <slot></slot>
    <span class="text-title-bold">{{ title }}</span>
  </div>
</template>
