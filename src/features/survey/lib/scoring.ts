import { getQuestionsForProfile } from '../data/questions'
import { getZoneByScore } from '../data/zones'
import type { ProfileId, Question, Rating, Zone } from '../data/types'

export type Answers = Record<string, Rating>

export function calculateTotal(answers: Answers): number {
  return Object.values(answers).reduce((sum, value) => sum + value, 0)
}

export function getZoneFromAnswers(answers: Answers): Zone {
  return getZoneByScore(calculateTotal(answers))
}

export function getWeakPillars(
  profileId: ProfileId,
  answers: Answers,
  limit = 2,
): Question[] {
  const questions = getQuestionsForProfile(profileId)
  return [...questions]
    .filter((question) => answers[question.id] != null)
    .sort((a, b) => {
      const scoreDiff = (answers[a.id] ?? 5) - (answers[b.id] ?? 5)
      if (scoreDiff !== 0) return scoreDiff
      return a.order - b.order
    })
    .slice(0, limit)
}

export function getCriticalPillars(
  profileId: ProfileId,
  answers: Answers,
): Question[] {
  const questions = getQuestionsForProfile(profileId)
  return questions.filter((question) => (answers[question.id] ?? 5) <= 2)
}

export function isSurveyComplete(profileId: ProfileId, answers: Answers) {
  const questions = getQuestionsForProfile(profileId)
  return questions.every((question) => answers[question.id] != null)
}

export function getPillarScores(profileId: ProfileId, answers: Answers) {
  return getQuestionsForProfile(profileId).map((question) => ({
    pillar: question.pillar,
    score: answers[question.id] ?? 0,
    icon: question.icon,
  }))
}
