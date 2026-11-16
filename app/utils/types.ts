export type CompetencyLevel =
  | 'basic'
  | 'intermediate'
  | 'advanced'
  | 'institutional'
  | 'internship'

export type BadgeableCompetencyLevel = 'basic' | 'intermediate' | 'advanced'

export type ResourceType = 'summary' | 'link' | 'material' | 'question'

export type QuestionDifficulty = 'easy' | 'medium' | 'hard'

export interface CompetencyTopic {
  slug: string
  title: string
  summary: string
  examNote?: string
  codeSnippet?: string
}

export interface CompetencySummary {
  code: string
  slug: string
  name: string
  description?: string
  level: CompetencyLevel
  disciplines: string[]
  resourceCount?: number
  topics?: CompetencyTopic[]
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
  topic?: string
  difficulty?: QuestionDifficulty
  examNote?: string
  codeSnippet?: string
  url?: string
  file?: string
  source?: string
}
