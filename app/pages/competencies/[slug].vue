<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { PREVIEW_COMPETENCIES, PREVIEW_QUESTIONS } from '~/utils/preview-data'

const route = useRoute()

const competency = computed(() => {
  const slug = String(route.params.slug ?? '').toLowerCase()
  return PREVIEW_COMPETENCIES.find((c) => c.slug === slug) ?? PREVIEW_COMPETENCIES[0]!
})

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
  PREVIEW_QUESTIONS.filter((q) => q.competencies.includes(competency.value.code)),
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
      </div>
      <h1
        class="font-display text-[clamp(32px,4.6vw,48px)] leading-[1.05] font-bold tracking-[-0.03em] text-ink"
      >
        {{ competency.name }}
      </h1>
      <p v-if="competency.description" class="mt-2.5 max-w-[480px] text-[#34508a]">
        {{ competency.description }}
      </p>
    </header>

    <div class="mt-9 grid grid-cols-1 items-start gap-6 pb-20 md:grid-cols-[230px_1fr] md:gap-10">
      <aside
        aria-label="Tópicos"
        class="flex gap-1.5 overflow-x-auto md:sticky md:top-4 md:grid md:gap-0.5"
      >
        <button
          v-for="topic in competency.topics"
          :key="topic.slug"
          type="button"
          class="rounded-[10px] px-3.5 py-2 text-left text-[15.5px] font-medium whitespace-nowrap transition-colors duration-200"
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
          class="mb-1 font-display text-[clamp(28px,3.6vw,38px)] leading-[1.1] font-bold tracking-[-0.025em] text-ink"
        >
          {{ activeTopic.title }}
        </h2>
        <p class="my-3.5 max-w-[62ch] text-ink">
          {{ activeTopic.summary }}
        </p>

        <div
          v-if="activeTopic.examNote"
          class="my-[22px] max-w-[62ch] rounded-xl bg-sun px-[18px] py-3.5 text-[15.5px] text-ink"
        >
          {{ activeTopic.examNote }}
        </div>

        <pre
          v-if="activeTopic.codeSnippet"
          class="my-[22px] overflow-x-auto rounded-[14px] bg-ink px-6 py-[22px] font-mono text-[14.5px] leading-[1.7] text-[#DDE8FA]"
        ><code>{{ activeTopic.codeSnippet }}</code></pre>

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
  </TemplatesAppShell>
</template>
