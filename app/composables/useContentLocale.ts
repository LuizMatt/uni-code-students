import catalogPtBr from '../locales/pt-BR/catalog.json'
import c1PtBr from '../locales/pt-BR/competencies/c1.json'
import type {
  CompetencySummary,
  CompetencyTopic,
  ResourceSummary,
  SupportedLocale,
} from '../utils/types'

interface RawCatalog {
  competencies: CompetencySummary[]
  questions: ResourceSummary[]
}

interface RawCompetencyDetail {
  code: string
  slug: string
  topics: CompetencyTopic[]
}

const COMPETENCY_DETAILS_BY_LOCALE: Record<
  SupportedLocale,
  Record<string, RawCompetencyDetail>
> = {
  'pt-BR': {
    c1: c1PtBr as RawCompetencyDetail,
  },
}

const CATALOG_BY_LOCALE: Record<SupportedLocale, RawCatalog> = {
  'pt-BR': catalogPtBr as RawCatalog,
}

export function loadLocalizedContent(locale: SupportedLocale = 'pt-BR') {
  const catalog = CATALOG_BY_LOCALE[locale]
  const detailsMap = COMPETENCY_DETAILS_BY_LOCALE[locale]

  const competencies: CompetencySummary[] = catalog.competencies.map((comp) => {
    const detail = detailsMap[comp.slug]
    const topics = detail?.topics ?? []
    return {
      ...comp,
      topics,
      resourceCount: topics.length,
    }
  })

  const questions: ResourceSummary[] = catalog.questions.map((q) => ({
    ...q,
  }))

  return {
    locale,
    competencies,
    questions,
  }
}

export function useContentLocale(locale: SupportedLocale = 'pt-BR') {
  const { competencies, questions } = loadLocalizedContent(locale)

  function getCompetencyBySlug(slug: string): CompetencySummary | undefined {
    const normalized = slug.trim().toLowerCase()
    return competencies.find((c) => c.slug === normalized)
  }

  return {
    locale,
    competencies,
    questions,
    getCompetencyBySlug,
  }
}
