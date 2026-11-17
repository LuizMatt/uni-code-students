export type SupportedLocale = 'pt-BR'

export type CompetencyLevel =
  | 'basic'
  | 'intermediate'
  | 'advanced'
  | 'institutional'
  | 'internship'

export type BadgeableCompetencyLevel = 'basic' | 'intermediate' | 'advanced'

export type ResourceType = 'summary' | 'link' | 'material' | 'question'

export type QuestionDifficulty = 'easy' | 'medium' | 'hard'

export interface CompetencyTopicSection {
  title: string
  body: string
  codeSnippet?: string
}

export interface TopicSupportResource {
  title: string
  type: 'link' | 'material'
  url: string
  source: string
  description?: string
}

export interface CompetencyTopic {
  slug: string
  title: string
  summary: string
  sections?: CompetencyTopicSection[]
  examNote?: string
  codeSnippet?: string
  resources?: TopicSupportResource[]
}

export interface CompetencySummary {
  code: string
  slug: string
  name: string
  description?: string
  level: CompetencyLevel
  disciplines: string[]
  available?: boolean
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
  available?: boolean
  description?: string
  topic?: string
  difficulty?: QuestionDifficulty
  examNote?: string
  codeSnippet?: string
  url?: string
  file?: string
  source?: string
}
