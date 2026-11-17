import { loadLocalizedContent } from '../composables/useContentLocale'
import type { CompetencySummary, ResourceSummary } from './types'

const ptBrContent = loadLocalizedContent('pt-BR')

export const PREVIEW_COMPETENCIES: CompetencySummary[] = ptBrContent.competencies
export const PREVIEW_QUESTIONS: ResourceSummary[] = ptBrContent.questions
