import { motion } from 'framer-motion'
import {
  BarChart3,
  GraduationCap,
  MessageCircle,
  Share2,
  ShoppingBag,
  Target,
  Truck,
} from 'lucide-react'

const services = [
  {
    title: 'Tiendas digitales',
    description: 'Montamos tu canal de venta online listo para operar y vender.',
    icon: ShoppingBag,
  },
  {
    title: 'Automatización de WhatsApp',
    description: 'Catálogos, respuestas y CRM para no perder consultas.',
    icon: MessageCircle,
  },
  {
    title: 'Optimización logística',
    description: 'Tiempos predecibles y márgenes reales por pedido.',
    icon: Truck,
  },
  {
    title: 'Marketing digital',
    description: 'Pauta con medición de conversiones y foco en ROAS.',
    icon: Target,
  },
  {
    title: 'Gestión de redes',
    description: 'Contenidos y presencia que alimentan el embudo comercial.',
    icon: Share2,
  },
  {
    title: 'Capacitación interna',
    description: 'Roles claros y equipo entrenado para sostener la operación.',
    icon: GraduationCap,
  },
  {
    title: 'Revisión de KPIs',
    description: 'Adaptamos estrategias según datos, no por olfato.',
    icon: BarChart3,
  },
]

export function ServicesGrid() {
  return (
    <section id="servicios" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Todo lo que necesitás para vender más
          </h2>
          <p className="mt-4 text-muted">
            Un servicio integral centrado en aumentar ventas, con operación
            profesional e innovación aplicada al negocio.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-2xl p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
