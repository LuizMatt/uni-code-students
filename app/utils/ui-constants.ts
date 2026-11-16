import {
  mdiCodeBraces,
  mdiFileDocumentOutline,
  mdiFileDownloadOutline,
  mdiOpenInNew,
} from '@mdi/js'
import type {
  BadgeableCompetencyLevel,
  CompetencyLevel,
  QuestionDifficulty,
  ResourceType,
} from './types'

export const BADGEABLE_LEVELS: readonly BadgeableCompetencyLevel[] = [
  'basic',
  'intermediate',
  'advanced',
] as const

export function isBadgeableLevel(level: CompetencyLevel): level is BadgeableCompetencyLevel {
  return level === 'basic' || level === 'intermediate' || level === 'advanced'
}

export interface LevelBadgeMeta {
  label: string
  containerClass: string
  dotClass: string
}

export const LEVEL_BADGE_META: Record<BadgeableCompetencyLevel, LevelBadgeMeta> = {
  basic: {
    label: 'Básica',
    containerClass: 'border-border-subtle bg-subtle text-ink',
    dotClass: 'bg-cyan',
  },
  intermediate: {
    label: 'Intermediária',
    containerClass: 'border-border-subtle bg-sky text-ink',
    dotClass: 'bg-brand',
  },
  advanced: {
    label: 'Avançada',
    containerClass: 'border-border-subtle bg-peri text-ink',
    dotClass: 'bg-ink',
  },
}

export interface ResourceTypeMeta {
  label: string
  iconPath: string
  badgeClass: string
}

export const RESOURCE_TYPE_META: Record<ResourceType, ResourceTypeMeta> = {
  summary: {
    label: 'Resumo',
    iconPath: mdiFileDocumentOutline,
    badgeClass: 'border-border-subtle bg-subtle text-ink',
  },
  link: {
    label: 'Link',
    iconPath: mdiOpenInNew,
    badgeClass: 'border-border-subtle bg-surface text-ink-muted',
  },
  material: {
    label: 'Material',
    iconPath: mdiFileDownloadOutline,
    badgeClass: 'border-border-subtle bg-surface text-ink-muted',
  },
  question: {
    label: 'Questão',
    iconPath: mdiCodeBraces,
    badgeClass: 'border-border-subtle bg-sky text-ink',
  },
}

export interface DifficultyBadgeMeta {
  label: string
  badgeClass: string
}

export const DIFFICULTY_BADGE_META: Record<QuestionDifficulty, DifficultyBadgeMeta> = {
  easy: {
    label: 'Fácil',
    badgeClass: 'bg-sky text-ink',
  },
  medium: {
    label: 'Médio',
    badgeClass: 'bg-peri text-ink',
  },
  hard: {
    label: 'Difícil',
    badgeClass: 'bg-sun text-ink',
  },
}
