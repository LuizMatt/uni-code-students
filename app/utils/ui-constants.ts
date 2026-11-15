import { mdiFileDocumentOutline, mdiFileDownloadOutline, mdiOpenInNew } from '@mdi/js'
import type { BadgeableCompetencyLevel, CompetencyLevel, ResourceType } from './types'

export const BADGEABLE_LEVELS: readonly BadgeableCompetencyLevel[] = [
  'basica',
  'intermediaria',
  'avancada',
] as const

export function isBadgeableLevel(level: CompetencyLevel): level is BadgeableCompetencyLevel {
  return level === 'basica' || level === 'intermediaria' || level === 'avancada'
}

export interface LevelBadgeMeta {
  label: string
  containerClass: string
  dotClass: string
}

export const LEVEL_BADGE_META: Record<BadgeableCompetencyLevel, LevelBadgeMeta> = {
  basica: {
    label: 'Básica',
    containerClass: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    dotClass: 'bg-emerald-500',
  },
  intermediaria: {
    label: 'Intermediária',
    containerClass: 'border-sky-200 bg-sky-50 text-sky-800',
    dotClass: 'bg-sky-500',
  },
  avancada: {
    label: 'Avançada',
    containerClass: 'border-violet-200 bg-violet-50 text-violet-800',
    dotClass: 'bg-violet-500',
  },
}

export interface ResourceTypeMeta {
  label: string
  iconPath: string
  badgeClass: string
}

export const RESOURCE_TYPE_META: Record<ResourceType, ResourceTypeMeta> = {
  resumo: {
    label: 'Resumo',
    iconPath: mdiFileDocumentOutline,
    badgeClass: 'border-indigo-200 bg-indigo-50 text-indigo-700',
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
}
