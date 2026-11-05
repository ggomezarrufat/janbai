import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ProfileId, Rating } from '../data/types'
import {
  calculateTotal,
  getCriticalPillars,
  getPillarScores,
  getWeakPillars,
  getZoneFromAnswers,
  isSurveyComplete,
  type Answers,
} from '../lib/scoring'

interface SurveyState {
  profileId: ProfileId | null
  answers: Answers
  currentStep: number
  setProfile: (profileId: ProfileId) => void
  setAnswer: (questionId: string, rating: Rating) => void
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  reset: () => void
  getTotal: () => number
  getZone: () => ReturnType<typeof getZoneFromAnswers> | null
  getWeakPillars: (limit?: number) => ReturnType<typeof getWeakPillars>
  getCriticalPillars: () => ReturnType<typeof getCriticalPillars>
  getPillarScores: () => ReturnType<typeof getPillarScores>
  isComplete: () => boolean
}

const initialState = {
  profileId: null as ProfileId | null,
  answers: {} as Answers,
  currentStep: 0,
}

export const useSurveyStore = create<SurveyState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setProfile: (profileId) =>
        set({
          profileId,
          answers: {},
          currentStep: 0,
        }),
      setAnswer: (questionId, rating) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: rating,
          },
        })),
      setCurrentStep: (step) => set({ currentStep: step }),
      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () =>
        set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),
      reset: () => set(initialState),
      getTotal: () => calculateTotal(get().answers),
      getZone: () => {
        const { profileId, answers } = get()
        if (!profileId || !isSurveyComplete(profileId, answers)) return null
        return getZoneFromAnswers(answers)
      },
      getWeakPillars: (limit = 2) => {
        const { profileId, answers } = get()
        if (!profileId) return []
        return getWeakPillars(profileId, answers, limit)
      },
      getCriticalPillars: () => {
        const { profileId, answers } = get()
        if (!profileId) return []
        return getCriticalPillars(profileId, answers)
      },
      getPillarScores: () => {
        const { profileId, answers } = get()
        if (!profileId) return []
        return getPillarScores(profileId, answers)
      },
      isComplete: () => {
        const { profileId, answers } = get()
        if (!profileId) return false
        return isSurveyComplete(profileId, answers)
      },
    }),
    {
      name: 'janbai-survey',
      partialize: (state) => ({
        profileId: state.profileId,
        answers: state.answers,
        currentStep: state.currentStep,
      }),
    },
  ),
)
