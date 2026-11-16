<script setup lang="ts">
import type { BadgeableCompetencyLevel } from '~/utils/types'
import { BADGEABLE_LEVELS, LEVEL_BADGE_META } from '~/utils/ui-constants'

export type FilterLevelOption = 'todas' | BadgeableCompetencyLevel

defineProps<{
  modelValue: FilterLevelOption
}>()

const emit = defineEmits<{
  'update:modelValue': [value: FilterLevelOption]
}>()
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-1.5"
    role="group"
    aria-label="Filtrar por nível de competência"
  >
    <button
      type="button"
      class="rounded-lg border px-3 py-1.5 text-xs font-medium transition"
      :class="
        modelValue === 'todas'
          ? 'border-brand bg-brand text-white'
          : 'border-border-subtle bg-surface text-ink-muted hover:bg-subtle hover:text-ink'
      "
      @click="emit('update:modelValue', 'todas')"
    >
      Todas
    </button>
    <button
      v-for="lvl in BADGEABLE_LEVELS"
      :key="lvl"
      type="button"
      class="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition"
      :class="
        modelValue === lvl
          ? 'border-brand bg-brand-surface text-brand'
          : 'border-border-subtle bg-surface text-ink-muted hover:bg-subtle hover:text-ink'
      "
      @click="emit('update:modelValue', lvl)"
    >
      <span class="h-1.5 w-1.5 rounded-full" :class="LEVEL_BADGE_META[lvl].dotClass" />
      {{ LEVEL_BADGE_META[lvl].label }}
    </button>
  </div>
</template>
