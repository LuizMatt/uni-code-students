<script setup lang="ts">
import { ref } from 'vue'
import { mdiInformationOutline, mdiShieldCheckOutline } from '@mdi/js'
import type { FilterLevelOption } from '~/components/molecules/LevelFilter.vue'
import type { CompetencySummary } from '~/utils/types'

const searchQuery = ref('')
const selectedLevel = ref<FilterLevelOption>('todas')

const previewCompetencies: CompetencySummary[] = [
  {
    code: 'C1',
    slug: 'c1',
    name: 'Programar em linguagem estruturada',
    level: 'basica',
    disciplines: ['programacao-i'],
    resourceCount: 0,
  },
  {
    code: 'C9',
    slug: 'c9',
    name: 'Analisar modelos formais para criação de Banco de Dados Relacional',
    level: 'intermediaria',
    disciplines: ['banco-de-dados-i'],
    resourceCount: 0,
  },
  {
    code: 'C11',
    slug: 'c11',
    name: 'Criar Serviços Web com REST',
    level: 'avancada',
    disciplines: ['arquitetura-de-software'],
    resourceCount: 0,
  },
]
</script>

<template>
  <TemplatesAppShell>
    <section class="mx-auto max-w-2xl text-center">
      <p class="font-mono text-xs font-semibold tracking-wider text-brand uppercase">
        Sistemas de Informação · UNIFACISA
      </p>
      <h1 class="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
        Conhecimento organizado por competência
      </h1>
      <p class="mt-3 text-sm leading-relaxed text-ink-muted">
        Resumos, links oficiais e materiais de estudo mapeados diretamente para as competências da
        matriz curricular.
      </p>

      <div class="mt-6">
        <MoleculesSearchBar v-model="searchQuery" />
      </div>
    </section>

    <section class="mt-12 space-y-4">
      <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h2 class="text-sm font-semibold tracking-tight text-ink">Competências em destaque</h2>
        <MoleculesLevelFilter v-model="selectedLevel" />
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MoleculesCompetencyCard
          v-for="item in previewCompetencies"
          :key="item.code"
          :competency="item"
        />
      </div>
    </section>

    <section id="about" class="mt-16 scroll-mt-20 border-t border-border-subtle pt-12">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-border-subtle bg-surface p-6">
          <div class="flex items-center gap-2 text-brand">
            <AtomsBaseIcon :path="mdiInformationOutline" :size="18" />
            <h2 class="text-sm font-semibold tracking-tight text-ink">Sobre o projeto</h2>
          </div>
          <p class="mt-3 text-xs leading-relaxed text-ink-muted">
            Na UNIFACISA, o curso de Sistemas de Informação é organizado por competências (C1 a C33,
            CI 1 a CI 4 e Estágio), e não por semestres. Esta biblioteca reúne resumos, referências
            oficiais e materiais de apoio mapeados diretamente para cada competência da matriz.
          </p>
        </div>

        <div class="rounded-xl border border-border-subtle bg-surface p-6">
          <div class="flex items-center gap-2 text-brand">
            <AtomsBaseIcon :path="mdiShieldCheckOutline" :size="18" />
            <h2 class="text-sm font-semibold tracking-tight text-ink">
              Curadoria e política de conteúdo
            </h2>
          </div>
          <p class="mt-3 text-xs leading-relaxed text-ink-muted">
            Publicamos apenas conteúdo autoral, links para fontes oficiais ou abertas e materiais
            com licença que permita redistribuição. Slides de professores, provas ou livros
            protegidos por direitos autorais não são hospedados aqui.
          </p>
        </div>
      </div>
    </section>
  </TemplatesAppShell>
</template>
