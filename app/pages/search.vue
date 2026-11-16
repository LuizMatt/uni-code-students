<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'
</script>

<template>
  <TemplatesAppShell>
    <MoleculesEmptyState
      title="Busca global em construção"
      description="Em breve você poderá pesquisar por competência, disciplina, tags e conteúdo dos resumos."
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
