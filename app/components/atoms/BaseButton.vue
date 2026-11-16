<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-50"
    :class="{
      'bg-brand text-white hover:bg-brand-hover': variant === 'primary',
      'border border-border-subtle bg-surface text-ink hover:bg-subtle': variant === 'secondary',
      'bg-transparent text-ink-muted hover:bg-subtle hover:text-ink': variant === 'ghost',
    }"
  >
    <slot />
  </button>
</template>
