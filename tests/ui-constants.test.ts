import { describe, expect, it } from 'vitest'
import {
  BADGEABLE_LEVELS,
  isBadgeableLevel,
  LEVEL_BADGE_META,
  RESOURCE_TYPE_META,
} from '../app/utils/ui-constants'

describe('ui-constants (Atomic Design tokens & helpers)', () => {
  it('permite badge de nível apenas para basica, intermediaria e avancada', () => {
    expect(BADGEABLE_LEVELS).toEqual(['basica', 'intermediaria', 'avancada'])
    expect(isBadgeableLevel('basica')).toBe(true)
    expect(isBadgeableLevel('intermediaria')).toBe(true)
    expect(isBadgeableLevel('avancada')).toBe(true)
    expect(isBadgeableLevel('institucional')).toBe(false)
    expect(isBadgeableLevel('estagio')).toBe(false)
  })

  it('define metadados visuais sem emojis para os 3 níveis', () => {
    expect(Object.keys(LEVEL_BADGE_META)).toEqual(['basica', 'intermediaria', 'avancada'])
    expect(LEVEL_BADGE_META.basica.label).toBe('Básica')
    expect(LEVEL_BADGE_META.intermediaria.label).toBe('Intermediária')
    expect(LEVEL_BADGE_META.avancada.label).toBe('Avançada')
  })

  it('define ícones MDI (paths SVG) para todos os tipos de recurso', () => {
    expect(RESOURCE_TYPE_META.resumo.label).toBe('Resumo')
    expect(RESOURCE_TYPE_META.resumo.iconPath).toMatch(/^M/)
    expect(RESOURCE_TYPE_META.link.label).toBe('Link')
    expect(RESOURCE_TYPE_META.link.iconPath).toMatch(/^M/)
    expect(RESOURCE_TYPE_META.material.label).toBe('Material')
    expect(RESOURCE_TYPE_META.material.iconPath).toMatch(/^M/)
  })
})
