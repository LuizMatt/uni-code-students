<script setup lang="ts">
import { mdiArrowRight } from '@mdi/js'
import type { CompetencySummary } from '~/utils/types'

defineProps<{
  competency: CompetencySummary
}>()
</script>

<template>
  <NuxtLink
    :to="`/competencies/${competency.slug}`"
    class="group flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-4 transition hover:border-brand/50 hover:shadow-xs"
  >
    <div>
      <div class="flex items-center justify-between gap-2">
        <AtomsCodeBadge :code="competency.code" />
        <AtomsLevelBadge :level="competency.level" />
      </div>
      <h3
        class="mt-3 text-sm font-semibold leading-snug text-ink transition group-hover:text-brand"
      >
        {{ competency.name }}
      </h3>
    </div>

    <div
      class="mt-4 flex items-center justify-between gap-2 border-t border-border-subtle pt-3 text-xs text-ink-faint"
    >
      <span class="truncate font-mono">
        {{ competency.disciplines.join(', ') }}
      </span>
      <span class="inline-flex shrink-0 items-center gap-1 font-medium text-brand">
        <template v-if="competency.resourceCount !== undefined">
          {{ competency.resourceCount }}
          {{ competency.resourceCount === 1 ? 'recurso' : 'recursos' }}
        </template>
        <AtomsBaseIcon :path="mdiArrowRight" :size="14" />
      </span>
    </div>
  </NuxtLink>
</template>
