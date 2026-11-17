import type { CompetencySummary, ResourceSummary } from './types'

export function isCompetencyAvailable(competency?: CompetencySummary | null): boolean {
  if (!competency) return false
  return (
    competency.available === true &&
    Array.isArray(competency.topics) &&
    competency.topics.length > 0
  )
}

export function isQuestionAvailable(resource?: ResourceSummary | null): boolean {
  if (!resource) return false
  return resource.available === true
}
