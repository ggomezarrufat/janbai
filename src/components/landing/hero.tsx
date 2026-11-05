import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-accent-cyan/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            Diagnóstico digital gratuito
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            <span className="text-gradient">Janbai</span>
            <span className="mt-2 block text-foreground">
              Comercio digital llave en mano
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Descubrí en minutos el estado digital de tu empresa y recibí un plan
            de trabajo para aumentar ventas con tienda, WhatsApp, logística y
            marketing profesional.
          </p>
          <p className="mx-auto mt-5 inline-flex max-w-xl items-center justify-center gap-2 rounded-full border border-zone-green/40 bg-zone-green/10 px-4 py-2 text-sm font-semibold text-zone-green">
            <CircleCheckBig className="h-4 w-4 shrink-0" />
            Solo pagás si vendés. Si no hay resultados, no hay costo.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/diagnostico">
                Hacer el diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
