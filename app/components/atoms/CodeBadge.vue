<script setup lang="ts">
defineProps<{
  code: string
}>()
</script>

<template>
  <span class="font-mono text-xs leading-none text-ink-muted opacity-80">
    {{ code }}
  </span>
</template>
