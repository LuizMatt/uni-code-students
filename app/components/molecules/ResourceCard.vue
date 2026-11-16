<script setup lang="ts">
import type { ResourceSummary } from '~/utils/types'

defineProps<{
  resource: ResourceSummary
  to?: string
}>()
</script>

<template>
  <NuxtLink
    :to="to ?? `/resources/${resource.slug}`"
    class="group flex items-center gap-4 border-b border-border-subtle px-1 py-4 transition-colors duration-200 hover:border-brand"
  >
    <b class="flex-1 font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
      {{ resource.title }}
    </b>

    <em v-if="resource.topic || resource.description" class="text-sm not-italic text-ink-muted">
      {{ resource.topic ?? resource.description }}
    </em>

    <AtomsDifficultyBadge v-if="resource.difficulty" :difficulty="resource.difficulty" />
    <AtomsResourceTypeBadge v-else :type="resource.type" />
  </NuxtLink>
</template>
