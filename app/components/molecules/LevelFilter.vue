<script setup lang="ts">
import type { BadgeableCompetencyLevel } from '~/utils/types'
import { BADGEABLE_LEVELS, LEVEL_BADGE_META } from '~/utils/ui-constants'

export type FilterLevelOption = 'all' | BadgeableCompetencyLevel

defineProps<{
  modelValue: FilterLevelOption
}>()

const emit = defineEmits<{
  'update:modelValue': [value: FilterLevelOption]
}>()
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-2"
    role="group"
    aria-label="Filtrar por nível de competência"
  >
    <button
      type="button"
      class="rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200"
      :class="
        modelValue === 'all'
          ? 'border-ink bg-ink text-white'
          : 'border-border-subtle bg-surface text-ink-muted hover:border-brand hover:text-brand'
      "
      @click="emit('update:modelValue', 'all')"
    >
      Todas
    </button>
    <button
      v-for="lvl in BADGEABLE_LEVELS"
      :key="lvl"
      type="button"
      class="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200"
      :class="
        modelValue === lvl
          ? 'border-brand bg-sky text-ink'
          : 'border-border-subtle bg-surface text-ink-muted hover:border-brand hover:text-brand'
      "
      @click="emit('update:modelValue', lvl)"
    >
      <span class="h-1.5 w-1.5 rounded-full" :class="LEVEL_BADGE_META[lvl].dotClass" />
      {{ LEVEL_BADGE_META[lvl].label }}
    </button>
  </div>
</template>
