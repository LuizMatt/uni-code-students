<script setup lang="ts">
withDefaults(
  defineProps<{
    path: string
    size?: number | string
    label?: string
  }>(),
  {
    size: 16,
    label: undefined,
  },
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    :role="label ? 'img' : undefined"
    class="inline-block shrink-0"
  >
    <path :d="path" />
  </svg>
</template>
