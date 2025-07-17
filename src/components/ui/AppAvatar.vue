<template>
  <div class="overflow-hidden rounded-full border-2 border-teal-500 object-cover">
    <img :src="photoURL || defaultImage" :alt="alt" class="block" loading="lazy" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  photoURL?: string | null
  alt?: string
}>()

const defaultImage = '/images/default-avatar.png'
const photoURL = props.photoURL ?? null
const alt = props.alt ?? 'User Avatar'
</script>
