<script setup lang="ts">
import { mdiTextBoxSearchOutline } from '@mdi/js'

withDefaults(
  defineProps<{
    title: string
    description?: string
    iconPath?: string
  }>(),
  {
    description: undefined,
    iconPath: mdiTextBoxSearchOutline,
  },
)
</script>

<template>
  <div
    class="flex flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle bg-surface px-6 py-12 text-center"
  >
    <div
      class="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-subtle text-ink-muted"
    >
      <AtomsBaseIcon :path="iconPath" :size="20" />
    </div>
    <h3 class="mt-3 text-sm font-semibold text-ink">
      {{ title }}
    </h3>
    <p v-if="description" class="mt-1 max-w-md text-xs leading-relaxed text-ink-muted">
      {{ description }}
    </p>
    <div v-if="$slots.default" class="mt-4">
      <slot />
    </div>
  </div>
</template>
