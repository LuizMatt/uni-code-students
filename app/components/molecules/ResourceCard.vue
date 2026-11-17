<script setup lang="ts">
import { computed } from 'vue'
import { isQuestionAvailable } from '~/utils/availability'
import type { ResourceSummary } from '~/utils/types'

const props = defineProps<{
  resource: ResourceSummary
  to?: string
}>()

const available = computed(() =>
  props.resource.type === 'question'
    ? isQuestionAvailable(props.resource)
    : props.resource.available !== false,
)
</script>

<template>
  <NuxtLink
    v-if="available"
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

  <div
    v-else
    aria-disabled="true"
    class="flex flex-wrap items-center gap-3 border-b border-border-subtle px-1 py-4 sm:gap-4"
  >
    <b class="flex-1 font-semibold text-ink-muted">
      {{ resource.title }}
    </b>

    <em v-if="resource.topic || resource.description" class="text-sm not-italic text-ink-muted">
      {{ resource.topic ?? resource.description }}
    </em>

    <div class="flex items-center gap-2">
      <AtomsDifficultyBadge v-if="resource.difficulty" :difficulty="resource.difficulty" />
      <AtomsResourceTypeBadge v-else :type="resource.type" />
      <AtomsComingSoonBadge />
    </div>
  </div>
</template>
