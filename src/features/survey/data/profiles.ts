import type { Profile } from './types'

export const profiles: Profile[] = [
  {
    id: 'A',
    title: 'Canal Digital Activo',
    shortLabel: 'Perfil A',
    description:
      'Ya tenemos tienda virtual (Tiendanube, WooCommerce, Mercado Libre, etc.), Instagram activo y/o WhatsApp Business comercial, pero los resultados no nos conforman o sentimos que estamos estancados.',
    scaleLow: 'No lo hacemos / Es un caos',
    scaleHigh: 'Lo tenemos sistematizado y medido perfectamente',
  },
  {
    id: 'B',
    title: 'En Fase de Planificación',
    shortLabel: 'Perfil B',
    description:
      'Todavía no tenemos un canal digital formal operando; estamos vendiendo de forma artesanal (por redes a pulmón, recomendación o mostrador físico) y queremos armar la estrategia desde cero.',
    scaleLow: 'No tenemos nada definido',
    scaleHigh: 'Lo tenemos resuelto y validado',
  },
]

export function getProfile(id: Profile['id']) {
  return profiles.find((profile) => profile.id === id)
}
