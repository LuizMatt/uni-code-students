<script setup lang="ts">
import { mdiArrowRight } from '@mdi/js'
import type { ResourceSummary } from '~/utils/types'

defineProps<{
  resource: ResourceSummary
}>()
</script>

<template>
  <NuxtLink
    :to="`/resources/${resource.slug}`"
    class="group flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-4 transition hover:border-brand/50 hover:shadow-xs"
  >
    <div>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <AtomsResourceTypeBadge :type="resource.type" />
        <div class="flex flex-wrap items-center gap-1">
          <AtomsCodeBadge v-for="code in resource.competencies" :key="code" :code="code" />
        </div>
      </div>

      <h3
        class="mt-3 text-sm font-semibold leading-snug text-ink transition group-hover:text-brand"
      >
        {{ resource.title }}
      </h3>

      <p
        v-if="resource.description"
        class="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-muted"
      >
        {{ resource.description }}
      </p>
    </div>

    <div
      class="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-3 text-xs text-ink-faint"
    >
      <div class="flex flex-wrap gap-1">
        <AtomsTagChip v-for="tag in resource.tags.slice(0, 3)" :key="tag" :tag="tag" />
      </div>
      <span class="inline-flex items-center gap-1 font-medium text-brand">
        Acessar
        <AtomsBaseIcon :path="mdiArrowRight" :size="14" />
      </span>
    </div>
  </NuxtLink>
</template>
