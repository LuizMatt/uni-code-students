<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'
</script>

<template>
  <TemplatesAppShell>
    <MoleculesEmptyState
      title="Catálogo de competências em construção"
      description="Em breve você poderá navegar e filtrar todas as competências C1–C33 e CI 1–CI 4 por nível e disciplina."
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
