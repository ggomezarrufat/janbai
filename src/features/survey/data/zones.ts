import type { Zone, ZoneId } from './types'

export const zones: Zone[] = [
  {
    id: 'red',
    min: 6,
    max: 15,
    label: 'Zona de Alerta Roja',
    badge: 'Explorador',
    colorClass: 'text-zone-red',
    messages: {
      A: 'Estás quemando plata en pauta o perdiendo ventas por problemas operativos graves. Urgente ordenar la casa (stock, atención de WhatsApp y logística).',
      B: 'Cuidado con lanzarte apurado. Si salís al mercado digital sin estos pilares, la tienda online va a ser una frustración. Conviene frenar la pelota y estructurar un plan mínimo viable.',
    },
  },
  {
    id: 'yellow',
    min: 16,
    max: 24,
    label: 'Zona de Oportunidad',
    badge: 'En despegue',
    colorClass: 'text-zone-yellow',
    messages: {
      A: 'Tenés una base armada, pero hay baches importantes. Estás creciendo a duras penas porque hay fricciones operativas que te hacen perder rentabilidad o clientes en el último tramo del embudo.',
      B: 'Tenés una base armada, pero hay baches importantes. Estás creciendo a duras penas porque hay fricciones operativas que te hacen perder rentabilidad o clientes en el último tramo del embudo.',
    },
  },
  {
    id: 'green',
    min: 25,
    max: 30,
    label: 'Zona de Madurez Digital',
    badge: 'Escalador',
    colorClass: 'text-zone-green',
    messages: {
      A: '¡Muy bien! Tenés el negocio digital profesionalizado. El foco ahora tiene que estar puesto en escalar la pauta, optimizar el Ticket Promedio (LTV) y automatizar procesos con IA o integraciones avanzadas (ERP).',
      B: '¡Muy bien! Tenés el negocio digital profesionalizado. El foco ahora tiene que estar puesto en escalar la pauta, optimizar el Ticket Promedio (LTV) y automatizar procesos con IA o integraciones avanzadas (ERP).',
    },
  },
]

export function getZoneByScore(score: number): Zone {
  const zone = zones.find((item) => score >= item.min && score <= item.max)
  return zone ?? zones[0]
}

export function getZoneById(id: ZoneId): Zone {
  return zones.find((zone) => zone.id === id) ?? zones[0]
}
