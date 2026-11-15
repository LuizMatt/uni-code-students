export type CompetencyLevel = 'basica' | 'intermediaria' | 'avancada' | 'institucional' | 'estagio'

export type BadgeableCompetencyLevel = 'basica' | 'intermediaria' | 'avancada'

export type ResourceType = 'resumo' | 'link' | 'material'

export interface CompetencySummary {
  code: string
  slug: string
  name: string
  level: CompetencyLevel
  disciplines: string[]
  resourceCount?: number
}

export interface ResourceSummary {
  slug: string
  title: string
  type: ResourceType
  competencies: string[]
  tags: string[]
  author: string
  date: string
  description?: string
  url?: string
  file?: string
  source?: string
}
