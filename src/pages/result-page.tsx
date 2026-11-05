import confetti from 'canvas-confetti'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BadgeUnlock } from '@/features/survey/components/badge-unlock'
import { PillarRadar } from '@/features/survey/components/pillar-radar'
import { ScoreGauge } from '@/features/survey/components/score-gauge'
import { getProfile } from '@/features/survey/data/profiles'
import { PillarIcon } from '@/features/survey/lib/icons'
import { useSurveyStore } from '@/features/survey/store/survey-store'

export default function ResultPage() {
  const profileId = useSurveyStore((state) => state.profileId)
  const answers = useSurveyStore((state) => state.answers)
  const isComplete = useSurveyStore((state) => state.isComplete)
  const getTotal = useSurveyStore((state) => state.getTotal)
  const getZone = useSurveyStore((state) => state.getZone)
  const getWeakPillars = useSurveyStore((state) => state.getWeakPillars)
  const getPillarScores = useSurveyStore((state) => state.getPillarScores)

  const [revealed, setRevealed] = useState(false)
  const [countdown, setCountdown] = useState(3)

  const complete = isComplete()
  const zone = getZone()
  const score = getTotal()
  const weakPillars = getWeakPillars(2)
  const pillarScores = getPillarScores()
  const profile = profileId ? getProfile(profileId) : undefined

  const diagnosis = useMemo(() => {
    if (!zone || !profileId) return ''
    return zone.messages[profileId]
  }, [zone, profileId])

  useEffect(() => {
    if (!complete || !zone) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setCountdown(0)
      setRevealed(true)
      return
    }

    const interval = window.setInterval(() => {
      setCountdown((value) => {
        if (value <= 1) {
          window.clearInterval(interval)
          setRevealed(true)
          return 0
        }
        return value - 1
      })
    }, 700)

    return () => window.clearInterval(interval)
  }, [complete, zone])

  useEffect(() => {
    if (!revealed || zone?.id !== 'green') return
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#7c5cff', '#22d3ee', '#22c55e'],
    })
  }, [revealed, zone?.id])

  if (!profileId || !complete || !zone || !profile) {
    return <Navigate to="/diagnostico" replace />
  }

  if (!revealed) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
        <p className="text-sm uppercase tracking-wide text-muted">
          Calculando diagnóstico
        </p>
        <p className="mt-4 font-display text-7xl font-bold text-accent-cyan">
          {countdown}
        </p>
        <p className="mt-3 text-muted">Analizando tus 6 pilares…</p>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-cyan">
          Resultado · {profile.shortLabel}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Tu estado digital actual
        </h1>
        <p className="mt-3 text-muted">{diagnosis}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ScoreGauge score={score} zone={zone} />
        <BadgeUnlock zone={zone} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <PillarRadar data={pillarScores} />
        <div className="glass rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-zone-yellow" />
            <h3 className="font-display text-lg font-semibold">
              Tus 2 frentes críticos
            </h3>
          </div>
          <div className="space-y-3">
            {weakPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface-elevated/50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zone-yellow/15 text-zone-yellow">
                  <PillarIcon name={pillar.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{pillar.pillar}</p>
                  <p className="mt-1 text-sm text-muted">
                    Nota: {answers[pillar.id]}/5
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link to="/propuesta">
            Conocé qué puede hacer Janbai por tu empresa
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link
            to="/diagnostico"
            onClick={() => useSurveyStore.getState().reset()}
          >
            Repetir diagnóstico
          </Link>
        </Button>
      </div>
    </section>
  )
}
