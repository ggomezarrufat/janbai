import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const steps = [
  {
    step: '01',
    title: 'Clasificá tu perfil',
    description:
      'Elegí si ya tenés canal digital activo o si estás en fase de planificación.',
  },
  {
    step: '02',
    title: 'Completá el autotest',
    description:
      'Respondé 6 pilares clave con una escala gamificada del 1 al 5.',
  },
  {
    step: '03',
    title: 'Recibí tu diagnóstico',
    description:
      'Conocé tu zona y un plan de trabajo concreto para tu empresa.',
  },
]

export function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Cómo funciona el diagnóstico
              </h2>
              <p className="mt-4 text-muted">
                En menos de 5 minutos obtenés una foto clara de tu madurez
                digital y una propuesta accionable de Janbai.
              </p>
              <div className="mt-8 space-y-5">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-display text-2xl font-bold text-accent">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link to="/diagnostico">Empezar ahora</Link>
              </Button>
            </div>
            <div className="relative rounded-3xl border border-border bg-surface-elevated/70 p-6">
              <div className="absolute -right-3 -top-3 rounded-full bg-zone-green/20 px-3 py-1 text-xs font-semibold text-zone-green">
                + ventas
              </div>
              <p className="text-sm uppercase tracking-wide text-muted">
                Resultado ejemplo
              </p>
              <p className="mt-3 font-display text-3xl font-bold text-zone-yellow">
                Zona de Oportunidad
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Base armada con fricciones en el embudo. Prioridad: UX mobile,
                WhatsApp de cierre y medición de ROAS.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {['Stock', 'Ads', 'WA'].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-background/50 px-3 py-4 text-center text-xs font-semibold"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
