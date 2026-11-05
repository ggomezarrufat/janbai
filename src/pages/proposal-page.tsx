import { Link, Navigate } from 'react-router-dom'
import { CheckCircle2, MessageCircle, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getProfile } from '@/features/survey/data/profiles'
import { getWorkPlan } from '@/features/survey/data/work-plans'
import { PillarIcon } from '@/features/survey/lib/icons'
import { useSurveyStore } from '@/features/survey/store/survey-store'
import { buildWhatsAppUrl, getCalendarUrl } from '@/lib/env'

export default function ProposalPage() {
  const profileId = useSurveyStore((state) => state.profileId)
  const isComplete = useSurveyStore((state) => state.isComplete)
  const getTotal = useSurveyStore((state) => state.getTotal)
  const getZone = useSurveyStore((state) => state.getZone)
  const getWeakPillars = useSurveyStore((state) => state.getWeakPillars)
  const getCriticalPillars = useSurveyStore((state) => state.getCriticalPillars)
  const reset = useSurveyStore((state) => state.reset)

  if (!profileId || !isComplete()) {
    return <Navigate to="/diagnostico" replace />
  }

  const zone = getZone()
  const profile = getProfile(profileId)
  if (!zone || !profile) {
    return <Navigate to="/diagnostico" replace />
  }

  const plan = getWorkPlan(profileId, zone.id)
  if (!plan) {
    return <Navigate to="/resultado" replace />
  }

  const score = getTotal()
  const weakPillars = getWeakPillars(2)
  const criticalPillars = getCriticalPillars()
  const priorityPillars =
    criticalPillars.length > 0 ? criticalPillars : weakPillars

  const message = [
    `Hola Janbai, completé el diagnóstico digital.`,
    `Perfil: ${profile.shortLabel} — ${profile.title}`,
    `Puntaje: ${score}/30`,
    `Zona: ${zone.label} (${zone.badge})`,
    `Frentes críticos: ${weakPillars.map((item) => item.pillar).join(', ') || 'N/A'}`,
    `Me interesa el plan "${plan.title}". ¿Agendamos una llamada?`,
  ].join('\n')

  const whatsappUrl = buildWhatsAppUrl(message)
  const calendarUrl = getCalendarUrl()

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-cyan">
          Propuesta Janbai
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          {plan.title}
        </h1>
        <p className="mt-3 text-muted">{plan.summary}</p>
        <p className="mt-2 text-sm text-muted">
          {profile.shortLabel} · {zone.label} · {score}/30 pts
        </p>
      </div>

      {priorityPillars.length > 0 ? (
        <div className="glass mb-6 rounded-3xl p-6">
          <h2 className="font-display text-lg font-semibold">
            Prioridad en Fase 1
          </h2>
          <p className="mt-1 text-sm text-muted">
            Arrancamos por los pilares más débiles de tu diagnóstico.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {priorityPillars.map((pillar) => (
              <span
                key={pillar.id}
                className="inline-flex items-center gap-2 rounded-full border border-zone-yellow/40 bg-zone-yellow/10 px-3 py-1.5 text-sm text-zone-yellow"
              >
                <PillarIcon name={pillar.icon} className="h-4 w-4" />
                {pillar.pillar}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-4">
        {plan.phases.map((phase, index) => (
          <article key={phase.name} className="glass rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">
                {phase.name}
              </h3>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-accent-cyan">
                {phase.duration}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    {index === 0 &&
                    priorityPillars.some((pillar) =>
                      item.toLowerCase().includes(
                        pillar.pillar.split(' ')[0].toLowerCase(),
                      ),
                    )
                      ? `${item} (prioridad)`
                      : item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h3 className="font-display text-lg font-semibold">KPIs objetivo</h3>
          <ul className="mt-3 space-y-2">
            {plan.kpis.map((kpi) => (
              <li key={kpi} className="text-sm text-muted">
                • {kpi}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="font-display text-lg font-semibold">
            Servicios Janbai involucrados
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {plan.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {whatsappUrl ? (
          <Button asChild size="lg">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </Button>
        ) : (
          <div className="glass rounded-2xl px-4 py-3 text-sm text-muted">
            Configurá <code>VITE_WHATSAPP_NUMBER</code> para habilitar el CTA de
            WhatsApp.
          </div>
        )}
        {calendarUrl ? (
          <Button asChild variant="secondary" size="lg">
            <a href={calendarUrl} target="_blank" rel="noreferrer">
              Agendar reunión
            </a>
          </Button>
        ) : null}
        <Button asChild variant="ghost" size="lg">
          <Link
            to="/diagnostico"
            onClick={() => {
              reset()
            }}
          >
            <RotateCcw className="h-4 w-4" />
            Volver a hacer el test
          </Link>
        </Button>
      </div>
    </section>
  )
}
