<script setup lang="ts">
import { computed } from 'vue'
import type { ResourceType } from '~/utils/types'
import { RESOURCE_TYPE_META } from '~/utils/ui-constants'

const props = defineProps<{
  type: ResourceType
}>()

const meta = computed(() => RESOURCE_TYPE_META[props.type])
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold"
    :class="meta.badgeClass"
  >
    <AtomsBaseIcon :path="meta.iconPath" :size="14" />
    {{ meta.label }}
  </span>
</template>
