import type { Question } from './types'

export const questions: Question[] = [
  {
    id: 'a1',
    profileId: 'A',
    order: 1,
    pillar: 'Integración de Stock y Canales',
    title: 'Integración de Stock y Canales',
    description:
      '¿El stock de tu tienda online se actualiza automáticamente con tus ventas físicas o de WhatsApp para evitar vender productos agotados?',
    icon: 'boxes',
  },
  {
    id: 'a2',
    profileId: 'A',
    order: 2,
    pillar: 'Rendimiento de la Pauta y Tráfico',
    title: 'Rendimiento de la Pauta y Tráfico',
    description:
      '¿Tus campañas pagas (Meta Ads / Google Ads) están configuradas midiendo conversiones finales (ventas) y sabés exactamente cuál es tu ROAS (Retorno de Inversión)?',
    icon: 'megaphone',
  },
  {
    id: 'a3',
    profileId: 'A',
    order: 3,
    pillar: 'Gestión de WhatsApp y Canales de Cierre',
    title: 'Gestión de WhatsApp y Canales de Cierre',
    description:
      '¿Utilizás herramientas de automatización, catálogos ordenados y múltiples agentes (o CRM) en WhatsApp para evitar que las consultas queden colgadas horas?',
    icon: 'message-circle',
  },
  {
    id: 'a4',
    profileId: 'A',
    order: 4,
    pillar: 'Fricción y Experiencia en la Tienda (UX)',
    title: 'Fricción y Experiencia en la Tienda (UX)',
    description:
      '¿Tu sitio carga rápido en celulares, muestra claramente los costos de envío antes de pagar y ofrece opciones de financiación claras para el mercado argentino?',
    icon: 'smartphone',
  },
  {
    id: 'a5',
    profileId: 'A',
    order: 5,
    pillar: 'Logística y Costos Ocultos',
    title: 'Logística y Costos Ocultos',
    description:
      '¿Tus tiempos de entrega son predecibles y tenés calculados al milímetro tus márgenes reales descontando comisiones de plataformas, pasarelas de pago e impuestos?',
    icon: 'truck',
  },
  {
    id: 'a6',
    profileId: 'A',
    order: 6,
    pillar: 'Cultura de Datos (Analytics)',
    title: 'Cultura de Datos (Analytics)',
    description:
      '¿Tomás decisiones comerciales basándote en reportes (Google Analytics, métricas de plataforma) en lugar de guiarte únicamente por "el olfato"?',
    icon: 'chart-column',
  },
  {
    id: 'b1',
    profileId: 'B',
    order: 1,
    pillar: 'Definición del Modelo de Negocio Digital',
    title: 'Definición del Modelo de Negocio Digital',
    description:
      '¿Tienen claro qué productos del catálogo físico son aptos para vender online (por margen, tamaño, logística y demanda) y cuáles se quedan en el local?',
    icon: 'store',
  },
  {
    id: 'b2',
    profileId: 'B',
    order: 2,
    pillar: 'Elección de la Plataforma Tecnológica',
    title: 'Elección de la Plataforma Tecnológica',
    description:
      '¿Evaluaron y seleccionaron la plataforma de e-commerce adecuada para su tamaño y presupuesto (ej. Tiendanube, Shopify) contemplando comisiones y escalabilidad?',
    icon: 'monitor',
  },
  {
    id: 'b3',
    profileId: 'B',
    order: 3,
    pillar: 'Operativa Logística y Proveedores',
    title: 'Operativa Logística y Proveedores',
    description:
      '¿Tienen preseleccionados los operadores logísticos (Correo Argentino, Andreani, OCA, logísticas zonales) y tarifas claras para presupuestarle al cliente sin perder plata?',
    icon: 'truck',
  },
  {
    id: 'b4',
    profileId: 'B',
    order: 4,
    pillar: 'Estrategia de Contenidos y Adquisición',
    title: 'Estrategia de Contenidos y Adquisición',
    description:
      '¿Tienen planeado un presupuesto inicial y una estrategia de marketing (anuncios y contenidos) para atraer tráfico desde el día uno, sabiendo que "abrir la tienda y esperar" no funciona?',
    icon: 'megaphone',
  },
  {
    id: 'b5',
    profileId: 'B',
    order: 5,
    pillar: 'Procesos Internos y Roles Asignados',
    title: 'Procesos Internos y Roles Asignados',
    description:
      '¿Definieron quién se va a encargar puertas adentro de la empresa de cargar productos, empaquetar, responder chats y controlar las finanzas digitales (evitando que "sea tarea de todos y de nadie")?',
    icon: 'users',
  },
  {
    id: 'b6',
    profileId: 'B',
    order: 6,
    pillar: 'Pasarelas de Pago y Financiamiento',
    title: 'Pasarelas de Pago y Financiamiento',
    description:
      '¿Tienen resuelta la integración de cobros (Mercado Pago, tarjetas, transferencias) y los acuerdos con bancos para ofrecer cuotas sin interés de forma sostenible?',
    icon: 'credit-card',
  },
]

export function getQuestionsForProfile(profileId: Question['profileId']) {
  return questions
    .filter((question) => question.profileId === profileId)
    .sort((a, b) => a.order - b.order)
}
