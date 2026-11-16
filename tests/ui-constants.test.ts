import { describe, expect, it } from 'vitest'
import {
  BADGEABLE_LEVELS,
  DIFFICULTY_BADGE_META,
  isBadgeableLevel,
  LEVEL_BADGE_META,
  RESOURCE_TYPE_META,
} from '../app/utils/ui-constants'

describe('ui-constants (Atomic Design tokens & helpers)', () => {
  it('allows level badge only for basic, intermediate, and advanced', () => {
    expect(BADGEABLE_LEVELS).toEqual(['basic', 'intermediate', 'advanced'])
    expect(isBadgeableLevel('basic')).toBe(true)
    expect(isBadgeableLevel('intermediate')).toBe(true)
    expect(isBadgeableLevel('advanced')).toBe(true)
    expect(isBadgeableLevel('institutional')).toBe(false)
    expect(isBadgeableLevel('internship')).toBe(false)
  })

  it('defines pt-BR visual labels without emojis for the 3 badgeable levels', () => {
    expect(Object.keys(LEVEL_BADGE_META)).toEqual(['basic', 'intermediate', 'advanced'])
    expect(LEVEL_BADGE_META.basic.label).toBe('Básica')
    expect(LEVEL_BADGE_META.intermediate.label).toBe('Intermediária')
    expect(LEVEL_BADGE_META.advanced.label).toBe('Avançada')
  })

  it('defines MDI SVG paths for all resource types including question', () => {
    expect(RESOURCE_TYPE_META.summary.label).toBe('Resumo')
    expect(RESOURCE_TYPE_META.summary.iconPath).toMatch(/^M/)
    expect(RESOURCE_TYPE_META.link.label).toBe('Link')
    expect(RESOURCE_TYPE_META.link.iconPath).toMatch(/^M/)
    expect(RESOURCE_TYPE_META.material.label).toBe('Material')
    expect(RESOURCE_TYPE_META.material.iconPath).toMatch(/^M/)
    expect(RESOURCE_TYPE_META.question.label).toBe('Questão')
    expect(RESOURCE_TYPE_META.question.iconPath).toMatch(/^M/)
  })

  it('defines difficulty badge metadata for easy, medium, and hard questions', () => {
    expect(DIFFICULTY_BADGE_META.easy.label).toBe('Fácil')
    expect(DIFFICULTY_BADGE_META.medium.label).toBe('Médio')
    expect(DIFFICULTY_BADGE_META.hard.label).toBe('Difícil')
  })
})
