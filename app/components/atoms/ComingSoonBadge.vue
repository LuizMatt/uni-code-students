<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Em breve',
  },
)
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-border-subtle bg-subtle px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap text-ink-muted"
  >
    {{ label }}
  </span>
</template>
