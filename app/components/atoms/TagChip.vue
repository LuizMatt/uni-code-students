<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded border border-border-subtle bg-subtle px-2 py-0.5 font-mono text-[11px] text-ink-muted"
  >
    #{{ tag }}
  </span>
</template>
