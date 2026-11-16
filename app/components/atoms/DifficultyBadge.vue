<script setup lang="ts">
import { computed } from 'vue'
import type { QuestionDifficulty } from '~/utils/types'
import { DIFFICULTY_BADGE_META } from '~/utils/ui-constants'

const props = defineProps<{
  difficulty: QuestionDifficulty
}>()

const meta = computed(() => DIFFICULTY_BADGE_META[props.difficulty])
</script>

<template>
  <span
    class="inline-block rounded-full px-3 py-0.5 text-[13px] font-semibold"
    :class="meta.badgeClass"
  >
    {{ meta.label }}
  </span>
</template>
