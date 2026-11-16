<script setup lang="ts">
defineProps<{
  code: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded border border-border-subtle bg-subtle px-1.5 py-0.5 font-mono text-xs font-semibold text-ink"
  >
    {{ code }}
  </span>
</template>
