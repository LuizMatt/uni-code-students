<script setup lang="ts">
import { computed } from 'vue'
import { mdiArrowRight } from '@mdi/js'
import { isCompetencyAvailable } from '~/utils/availability'
import type { CompetencySummary } from '~/utils/types'

const props = defineProps<{
  competency: CompetencySummary
}>()

const available = computed(() => isCompetencyAvailable(props.competency))
</script>

<template>
  <NuxtLink
    v-if="available"
    :to="`/competencies/${competency.slug}`"
    class="group grid grid-cols-[32px_minmax(0,1fr)_18px] items-center gap-3 border-b border-border-subtle px-0.5 py-4.75 transition-colors duration-200 hover:border-brand sm:grid-cols-[42px_minmax(0,1fr)_24px] sm:gap-4 sm:px-1 sm:py-5.5"
  >
    <AtomsCodeBadge :code="competency.code" />

    <span class="grid gap-1">
      <span
        class="text-[17px] leading-[1.3] font-semibold tracking-[-0.015em] text-ink transition-colors duration-200 group-hover:text-brand sm:text-[19px]"
      >
        {{ competency.name }}
      </span>
      <span class="flex flex-wrap items-center gap-2 text-[13px] leading-[1.4] text-ink-muted">
        <span>{{ competency.disciplines.join(', ') }}</span>
        <AtomsLevelBadge :level="competency.level" />
      </span>
    </span>

    <span
      class="justify-self-end text-ink-muted transition-all duration-200 group-hover:translate-x-1.25 group-hover:text-brand"
    >
      <AtomsBaseIcon :path="mdiArrowRight" :size="20" />
    </span>
  </NuxtLink>

  <div
    v-else
    aria-disabled="true"
    class="grid grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-3 border-b border-border-subtle px-0.5 py-4.75 sm:grid-cols-[42px_minmax(0,1fr)_auto] sm:gap-4 sm:px-1 sm:py-5.5"
  >
    <AtomsCodeBadge :code="competency.code" />

    <span class="grid gap-1">
      <span
        class="text-[17px] leading-[1.3] font-semibold tracking-[-0.015em] text-ink-muted sm:text-[19px]"
      >
        {{ competency.name }}
      </span>
      <span class="flex flex-wrap items-center gap-2 text-[13px] leading-[1.4] text-ink-muted">
        <span>{{ competency.disciplines.join(', ') }}</span>
        <AtomsLevelBadge :level="competency.level" />
      </span>
    </span>

    <span class="justify-self-end">
      <AtomsComingSoonBadge />
    </span>
  </div>
</template>
