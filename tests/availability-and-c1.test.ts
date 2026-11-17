import { describe, expect, it } from 'vitest'
import { isCompetencyAvailable, isQuestionAvailable } from '../app/utils/availability'
import { PREVIEW_COMPETENCIES, PREVIEW_QUESTIONS } from '../app/utils/preview-data'

describe('availability helpers and pt-BR JSON content', () => {
  it('marks only C1 as available and all other preview competencies as unavailable', () => {
    const c1 = PREVIEW_COMPETENCIES.find((c) => c.code === 'C1')
    expect(c1).toBeDefined()
    expect(isCompetencyAvailable(c1!)).toBe(true)

    const others = PREVIEW_COMPETENCIES.filter((c) => c.code !== 'C1')
    expect(others.length).toBeGreaterThan(0)
    for (const comp of others) {
      expect(isCompetencyAvailable(comp)).toBe(false)
      expect(comp.topics ?? []).toHaveLength(0)
    }
  })

  it('marks all preview questions as unavailable (coming soon)', () => {
    expect(PREVIEW_QUESTIONS.length).toBeGreaterThan(0)
    for (const question of PREVIEW_QUESTIONS) {
      expect(isQuestionAvailable(question)).toBe(false)
    }
  })

  it('loads 6 complete Python topics for C1 with sections, examNote, codeSnippet, and sourced resources', () => {
    const c1 = PREVIEW_COMPETENCIES.find((c) => c.code === 'C1')!
    const topics = c1.topics ?? []
    expect(topics).toHaveLength(6)
    expect(topics.map((t) => t.slug)).toEqual([
      'variaveis-e-io',
      'operadores-e-expressoes',
      'estruturas-condicionais',
      'lacos-de-repeticao',
      'listas-e-strings',
      'funcoes-e-modularizacao',
    ])

    for (const topic of topics) {
      expect(topic.summary.length).toBeGreaterThan(30)
      expect(topic.examNote).toBeTruthy()
      expect(topic.codeSnippet).toBeTruthy()
      expect((topic.sections ?? []).length).toBeGreaterThanOrEqual(2)
      expect((topic.resources ?? []).length).toBeGreaterThanOrEqual(1)
      for (const res of topic.resources ?? []) {
        expect(res.source).toBeTruthy()
        expect(res.url).toMatch(/^https:\/\//)
      }
    }
  })
})
