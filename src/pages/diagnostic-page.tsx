import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProfileCard } from '@/features/survey/components/profile-card'
import { ProgressQuest } from '@/features/survey/components/progress-quest'
import { QuestionCard } from '@/features/survey/components/question-card'
import { profiles, getProfile } from '@/features/survey/data/profiles'
import { getQuestionsForProfile } from '@/features/survey/data/questions'
import type { ProfileId, Rating } from '@/features/survey/data/types'
import { calculateTotal } from '@/features/survey/lib/scoring'
import { useSurveyStore } from '@/features/survey/store/survey-store'

const encouragements = [
  'Buen ritmo. Cada pilar te acerca a un diagnóstico más preciso.',
  'Vas a mitad de camino. Ya se ve dónde conviene enfocar.',
  'Últimos pilares. El plan de Janbai se está armando.',
]

export default function DiagnosticPage() {
  const navigate = useNavigate()
  const {
    profileId,
    answers,
    currentStep,
    setProfile,
    setAnswer,
    setCurrentStep,
    nextStep,
    prevStep,
  } = useSurveyStore()
  const [showEncouragement, setShowEncouragement] = useState(false)

  const profile = profileId ? getProfile(profileId) : undefined
  const questions = useMemo(
    () => (profileId ? getQuestionsForProfile(profileId) : []),
    [profileId],
  )
  const currentQuestion = questions[currentStep]
  const answeredIds = Object.keys(answers)
  const score = calculateTotal(answers)

  const handleSelectProfile = (id: ProfileId) => {
    setProfile(id)
  }

  const handleSelectRating = (rating: Rating) => {
    if (!currentQuestion) return
    setAnswer(currentQuestion.id, rating)

    const nextIndex = currentStep + 1
    const shouldEncourage = nextIndex === 2 || nextIndex === 4

    window.setTimeout(() => {
      if (nextIndex >= questions.length) {
        navigate('/resultado')
        return
      }
      nextStep()
      setShowEncouragement(shouldEncourage)
    }, 280)
  }

  if (!profileId || !profile) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 max-w-2xl">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Fase de clasificación inicial
          </h1>
          <p className="mt-3 text-muted">
            Marcá con cuál de estas dos situaciones te identificás hoy. Eso
            define el autotest y el plan de trabajo.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {profiles.map((item) => (
            <ProfileCard
              key={item.id}
              profile={item}
              onSelect={handleSelectProfile}
            />
          ))}
        </div>
      </section>
    )
  }

  if (!currentQuestion) {
    return null
  }

  const encouragementIndex =
    currentStep === 2 ? 0 : currentStep === 4 ? 1 : currentStep >= 5 ? 2 : -1

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            if (currentStep === 0) {
              useSurveyStore.getState().reset()
              return
            }
            prevStep()
            setShowEncouragement(false)
          }}
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Button>
        <p className="text-sm text-muted">{profile.shortLabel}</p>
      </div>

      <div className="mb-6">
        <ProgressQuest
          questions={questions}
          currentIndex={currentStep}
          answeredIds={answeredIds}
          score={score}
        />
      </div>

      <QuestionCard
        question={currentQuestion}
        profile={profile}
        value={answers[currentQuestion.id]}
        encouragement={
          showEncouragement && encouragementIndex >= 0
            ? encouragements[encouragementIndex]
            : null
        }
        onSelect={handleSelectRating}
      />

      {currentStep > 0 ? (
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-xs text-muted underline-offset-2 hover:underline"
            onClick={() => setCurrentStep(0)}
          >
            Ir a la primera pregunta
          </button>
        </div>
      ) : null}
    </section>
  )
}
