<script setup lang="ts">
import { mdiArrowRight } from '@mdi/js'
import { PREVIEW_COMPETENCIES, PREVIEW_QUESTIONS } from '~/utils/preview-data'
</script>

<template>
  <TemplatesAppShell>
    <header class="relative max-w-160 pt-22 pb-26">
      <h1
        class="font-display text-[clamp(38px,5.6vw,64px)] leading-[1.03] font-bold tracking-[-0.03em] text-ink"
      >
        O conteúdo da sua matriz,
        <span class="block text-brand">explicado e praticado.</span>
      </h1>
      <p class="mt-5.5 mb-8 max-w-120 text-[19px] text-ink-muted">
        Competências de Sistemas de Informação com resumos, exemplos de código e questões do
        LeetCode resolvidas.
      </p>
      <a
        href="#competencias"
        class="inline-block rounded-full bg-ink px-6.5 py-3.25 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand"
      >
        Ver competências
      </a>
    </header>

    <section
      id="competencias"
      aria-labelledby="skills-title"
      class="grid grid-cols-1 items-start gap-y-10 pt-6 pb-18 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-x-[clamp(48px,8vw,112px)] md:pb-26"
    >
      <div class="max-w-130 pt-1 md:max-w-95">
        <span
          class="mb-5.5 inline-block text-xs font-semibold tracking-widest text-brand uppercase"
        >
          Matriz curricular
        </span>
        <h2
          id="skills-title"
          class="max-w-[12ch] font-display text-[clamp(40px,11vw,50px)] leading-none font-bold tracking-[-0.045em] text-ink md:max-w-[10ch] md:text-[clamp(42px,4.5vw,58px)]"
        >
          Do conceito à prática.
        </h2>
        <p class="mt-5.5 max-w-[36ch] text-base leading-[1.65] text-ink-muted md:text-[17px]">
          Explore as competências de Sistemas de Informação com resumos, exemplos de código e
          exercícios que conectam teoria e aplicação.
        </p>
        <a
          href="#questoes"
          class="group mt-7.5 inline-flex items-center gap-4 rounded-full bg-brand px-5.5 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink"
        >
          <span>Praticar com questões</span>
          <span class="transition-transform duration-200 group-hover:translate-x-1">
            <AtomsBaseIcon :path="mdiArrowRight" :size="18" />
          </span>
        </a>
      </div>

      <div class="border-t border-border-subtle">
        <MoleculesCompetencyCard
          v-for="item in PREVIEW_COMPETENCIES"
          :key="item.code"
          :competency="item"
        />
      </div>
    </section>

    <section id="questoes" class="pb-24">
      <h2
        class="font-display text-[clamp(28px,3.6vw,38px)] leading-[1.1] font-bold tracking-tight text-ink"
      >
        Questões
      </h2>
      <p class="mt-2 text-ink-muted">LeetCode resolvido, com a ideia por trás do código.</p>
      <div class="mt-7 border-t border-border-subtle">
        <MoleculesResourceCard
          v-for="q in PREVIEW_QUESTIONS"
          :key="q.slug"
          :resource="q"
          :to="`/competencies/${q.competencies[0]?.toLowerCase() ?? 'c1'}`"
        />
      </div>
    </section>

    <section id="sobre" class="pb-24">
      <div class="grid gap-3 rounded-[20px] bg-ink p-7 text-white md:p-12">
        <h2
          class="font-display text-[clamp(28px,3.6vw,38px)] leading-[1.1] font-bold tracking-tight text-white"
        >
          Sobre
        </h2>
        <p class="max-w-130 text-[#BCD0F0]">
          Um projeto feito por alunos de Sistemas de Informação da UNIFACISA para reunir, num só
          lugar, o que a gente estuda nas competências da matriz curricular.
        </p>
      </div>
    </section>
  </TemplatesAppShell>
</template>
