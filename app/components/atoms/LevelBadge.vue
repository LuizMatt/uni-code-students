<script setup lang="ts">
import { computed } from 'vue'
import type { CompetencyLevel } from '~/utils/types'
import { isBadgeableLevel, LEVEL_BADGE_META } from '~/utils/ui-constants'

const props = defineProps<{
  level: CompetencyLevel
}>()

const meta = computed(() => (isBadgeableLevel(props.level) ? LEVEL_BADGE_META[props.level] : null))
</script>

<template>
  <span
    v-if="meta"
    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium"
    :class="meta.containerClass"
  >
    <span class="h-1.5 w-1.5 rounded-full" :class="meta.dotClass" />
    {{ meta.label }}
  </span>
</template>
