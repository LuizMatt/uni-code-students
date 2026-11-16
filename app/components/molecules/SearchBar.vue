<script setup lang="ts">
import { mdiMagnify } from '@mdi/js'

withDefaults(
  defineProps<{
    modelValue: string
    placeholder?: string
    shortcutHint?: string
  }>(),
  {
    placeholder: 'Buscar por competência, disciplina ou questão...',
    shortcutHint: '/',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  submit: []
}>()
</script>

<template>
  <form role="search" class="relative flex w-full items-center" @submit.prevent="emit('submit')">
    <span class="pointer-events-none absolute left-3.5 text-ink-muted">
      <AtomsBaseIcon :path="mdiMagnify" :size="18" />
    </span>
    <input
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-label="placeholder"
      class="w-full rounded-full border border-border-subtle bg-surface py-2.5 pr-10 pl-10 text-sm text-ink placeholder:text-ink-muted focus:border-brand"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <kbd
      v-if="shortcutHint"
      class="pointer-events-none absolute right-3.5 hidden rounded border border-border-subtle bg-subtle px-1.5 py-0.5 font-mono text-[11px] text-ink-muted sm:inline-block"
    >
      {{ shortcutHint }}
    </kbd>
  </form>
</template>
