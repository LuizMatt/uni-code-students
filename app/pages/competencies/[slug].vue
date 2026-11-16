<script setup lang="ts">
import { computed } from 'vue'
import { mdiArrowLeft } from '@mdi/js'

const route = useRoute()
const competencySlug = computed(() => String(route.params.slug ?? ''))
</script>

<template>
  <TemplatesAppShell>
    <MoleculesEmptyState
      :title="`Competência ${competencySlug.toUpperCase()} em construção`"
      description="Em breve os resumos, links e materiais de estudo desta competência estarão disponíveis aqui."
    >
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-medium text-ink transition hover:bg-subtle"
      >
        <AtomsBaseIcon :path="mdiArrowLeft" :size="14" />
        <span>Voltar para o início</span>
      </NuxtLink>
    </MoleculesEmptyState>
  </TemplatesAppShell>
</template>
