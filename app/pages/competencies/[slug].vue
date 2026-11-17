<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mdiArrowLeft } from '@mdi/js'
import { useContentLocale } from '~/composables/useContentLocale'
import { isCompetencyAvailable } from '~/utils/availability'

const route = useRoute()
const { competencies, questions, getCompetencyBySlug } = useContentLocale()

const competency = computed(() => {
  const slug = String(route.params.slug ?? '').toLowerCase()
  return getCompetencyBySlug(slug) ?? competencies[0]!
})

const isAvailable = computed(() => isCompetencyAvailable(competency.value))

const selectedTopicSlug = ref<string>(competency.value.topics?.[0]?.slug ?? '')

watch(
  competency,
  (next) => {
    selectedTopicSlug.value = next.topics?.[0]?.slug ?? ''
  },
  { immediate: true },
)

const activeTopic = computed(() => {
  const list = competency.value.topics ?? []
  return list.find((t) => t.slug === selectedTopicSlug.value) ?? list[0]
})

const relatedQuestions = computed(() =>
  questions.filter((q) => q.competencies.includes(competency.value.code)),
)
</script>

<template>
  <TemplatesAppShell>
    <div class="pt-1 pb-6 text-sm text-ink-muted">
      <NuxtLink to="/#competencias" class="transition-colors duration-200 hover:text-brand">
        Competências
      </NuxtLink>
      <span> / </span>
      <span>{{ competency.code }} · {{ competency.name }}</span>
    </div>

    <header class="relative overflow-hidden rounded-[20px] bg-sky p-7 md:p-10">
      <div class="mb-3 flex flex-wrap items-center gap-2">
        <AtomsCodeBadge :code="competency.code" />
        <AtomsLevelBadge :level="competency.level" />
        <AtomsComingSoonBadge v-if="!isAvailable" />
      </div>
      <h1
        class="font-display text-[clamp(32px,4.6vw,48px)] leading-[1.05] font-bold tracking-[-0.03em] text-ink"
      >
        {{ competency.name }}
      </h1>
      <p v-if="competency.description" class="mt-2.5 max-w-135 text-[#34508a]">
        {{ competency.description }}
      </p>
    </header>

    <div
      v-if="isAvailable"
      class="mt-9 grid grid-cols-1 items-start gap-6 pb-20 md:grid-cols-[240px_1fr] md:gap-10"
    >
      <aside
        aria-label="Tópicos"
        class="flex gap-1.5 overflow-x-auto md:sticky md:top-4 md:grid md:gap-0.5"
      >
        <button
          v-for="topic in competency.topics"
          :key="topic.slug"
          type="button"
          class="rounded-[10px] px-3.5 py-2 text-left text-[15.5px] font-medium whitespace-nowrap transition-colors duration-200 md:whitespace-normal"
          :class="
            activeTopic?.slug === topic.slug
              ? 'bg-ink text-white'
              : 'text-ink-muted hover:bg-subtle'
          "
          @click="selectedTopicSlug = topic.slug"
        >
          {{ topic.title }}
        </button>
      </aside>

      <article v-if="activeTopic">
        <h2
          class="mb-1 font-display text-[clamp(28px,3.6vw,38px)] leading-[1.1] font-bold tracking-tight text-ink"
        >
          {{ activeTopic.title }}
        </h2>
        <p class="my-3.5 max-w-[62ch] text-ink">
          {{ activeTopic.summary }}
        </p>

        <div v-if="activeTopic.sections?.length" class="my-6 space-y-6">
          <section v-for="section in activeTopic.sections" :key="section.title">
            <h3
              class="font-display text-[21px] leading-[1.2] font-bold tracking-[-0.02em] text-ink"
            >
              {{ section.title }}
            </h3>
            <p class="mt-2 max-w-[62ch] text-ink">
              {{ section.body }}
            </p>
            <pre
              v-if="section.codeSnippet"
              class="mt-3 overflow-x-auto rounded-[14px] bg-ink px-6 py-4.5 font-mono text-[14.5px] leading-[1.7] text-[#DDE8FA]"
            ><code>{{ section.codeSnippet }}</code></pre>
          </section>
        </div>

        <div
          v-if="activeTopic.examNote"
          class="my-5.5 max-w-[62ch] rounded-xl bg-sun px-4.5 py-3.5 text-[15.5px] text-ink"
        >
          {{ activeTopic.examNote }}
        </div>

        <pre
          v-if="activeTopic.codeSnippet"
          class="my-5.5 overflow-x-auto rounded-[14px] bg-ink px-6 py-5.5 font-mono text-[14.5px] leading-[1.7] text-[#DDE8FA]"
        ><code>{{ activeTopic.codeSnippet }}</code></pre>

        <div v-if="activeTopic.resources?.length" class="mt-10">
          <h3 class="font-display text-xl font-bold text-ink">
            Materiais e referências oficiais
          </h3>
          <div class="mt-3 border-t border-border-subtle">
            <a
              v-for="res in activeTopic.resources"
              :key="res.url"
              :href="res.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle px-1 py-4 transition-colors duration-200 hover:border-brand"
            >
              <div class="grid gap-0.5">
                <b class="font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
                  {{ res.title }}
                </b>
                <span v-if="res.description" class="text-sm text-ink-muted">
                  {{ res.description }}
                </span>
                <span class="text-xs text-ink-muted">
                  Fonte: {{ res.source }}
                </span>
              </div>
              <AtomsResourceTypeBadge :type="res.type" />
            </a>
          </div>
        </div>

        <div v-if="relatedQuestions.length" class="mt-10">
          <h3 class="font-display text-xl font-bold text-ink">Questões desta competência</h3>
          <div class="mt-3 border-t border-border-subtle">
            <MoleculesResourceCard
              v-for="q in relatedQuestions"
              :key="q.slug"
              :resource="q"
              :to="`/competencies/${competency.slug}`"
            />
          </div>
        </div>
      </article>
    </div>

    <div v-else class="mt-9 pb-20">
      <MoleculesEmptyState
        title="Conteúdo disponível em breve"
        description="Os resumos, exemplos de código e materiais de apoio desta competência estão sendo preparados e serão publicados em breve."
      >
        <NuxtLink
          to="/#competencias"
          class="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-medium text-ink transition hover:bg-subtle"
        >
          <AtomsBaseIcon :path="mdiArrowLeft" :size="14" />
          <span>Voltar para competências</span>
        </NuxtLink>
      </MoleculesEmptyState>
    </div>
  </TemplatesAppShell>
</template>
