import type { ProfileId, WorkPlan, ZoneId } from './types'

export const workPlans: WorkPlan[] = [
  {
    profileId: 'A',
    zoneId: 'red',
    title: 'Ordenar la casa',
    summary:
      'Priorizamos estabilizar operaciones críticas antes de invertir más en crecimiento. El objetivo es dejar de perder ventas y margen por fricciones internas.',
    phases: [
      {
        name: 'Fase 1 — Auditoría y contención',
        duration: 'Semanas 1-3',
        items: [
          'Auditoría de stock, pauta y atención comercial',
          'Pausar campañas sin medición de conversiones',
          'Integrar stock entre canales físicos, online y WhatsApp',
        ],
      },
      {
        name: 'Fase 2 — Operativa comercial',
        duration: 'Semanas 4-8',
        items: [
          'Automatización de WhatsApp (catálogo, respuestas y CRM multiagente)',
          'Revisión de logística y márgenes reales por pedido',
          'Protocolos de respuesta y escalamiento interno',
        ],
      },
      {
        name: 'Fase 3 — Relanzamiento medido',
        duration: 'Semanas 9-12',
        items: [
          'Relanzar pauta con píxel y conversiones finales',
          'Armar tablero de KPIs semanal',
          'Ajustar presupuesto según ROAS real',
        ],
      },
    ],
    kpis: [
      'Quiebres de stock',
      'Tiempo de respuesta en WhatsApp',
      'ROAS',
      'Margen neto por venta',
    ],
    services: [
      'Integración de canales',
      'Automatización de WhatsApp',
      'Optimización logística',
      'Marketing medible',
      'Revisión de KPIs',
    ],
  },
  {
    profileId: 'A',
    zoneId: 'yellow',
    title: 'Eliminar fricciones',
    summary:
      'Ya hay una base digital. El plan se centra en recuperar clientes perdidos en el embudo y mejorar la rentabilidad de cada visita.',
    phases: [
      {
        name: 'Fase 1 — Diagnóstico del embudo',
        duration: 'Semanas 1-2',
        items: [
          'Mapear fricciones de UX mobile (velocidad, envío visible, cuotas)',
          'Identificar abandonos de carrito y consultas sin cierre',
          'Priorizar pilares débiles detectados en el diagnóstico',
        ],
      },
      {
        name: 'Fase 2 — Optimización de conversión',
        duration: 'Semanas 3-7',
        items: [
          'Mejorar checkout y recuperación de carritos',
          'WhatsApp de cierre con automatizaciones',
          'Ajuste de campañas por ROAS y audiencia',
        ],
      },
      {
        name: 'Fase 3 — Equipo y rutina de datos',
        duration: 'Semanas 8-10',
        items: [
          'Capacitación del equipo interno',
          'Rutina mensual de KPIs y decisiones',
          'Playbook de mejoras continuas',
        ],
      },
    ],
    kpis: [
      'Tasa de conversión',
      'Abandono de carrito',
      'CPA',
      'Ticket promedio',
    ],
    services: [
      'Optimización de tienda',
      'Marketing digital',
      'Automatización de WhatsApp',
      'Capacitación interna',
      'Gestión de redes',
    ],
  },
  {
    profileId: 'A',
    zoneId: 'green',
    title: 'Escalar',
    summary:
      'El negocio ya está profesionalizado. Janbai se enfoca en escalar adquisición, subir LTV y automatizar con integraciones avanzadas.',
    phases: [
      {
        name: 'Fase 1 — Escala de adquisición',
        duration: 'Semanas 1-4',
        items: [
          'Estrategia de escala de pauta',
          'Apertura de nuevos canales (marketplaces, Google Shopping)',
          'Presupuesto y testing de creatividades',
        ],
      },
      {
        name: 'Fase 2 — Crecimiento de LTV',
        duration: 'Semanas 5-8',
        items: [
          'CRM y remarketing avanzado',
          'Programas de recompra y bundles',
          'Optimización de ticket promedio',
        ],
      },
      {
        name: 'Fase 3 — Automatización avanzada',
        duration: 'Semanas 9-12',
        items: [
          'Automatizaciones con IA',
          'Integración con ERP',
          'Gobierno de datos y forecasting',
        ],
      },
    ],
    kpis: [
      'LTV',
      'Recompra',
      'ROAS a escala',
      'Costo operativo por pedido',
    ],
    services: [
      'Estrategias de marketing',
      'Automatización avanzada',
      'Integraciones ERP',
      'Gestión de redes',
      'Revisión de KPIs',
    ],
  },
  {
    profileId: 'B',
    zoneId: 'red',
    title: 'Plan mínimo viable',
    summary:
      'Antes de lanzar, armamos los pilares mínimos para que la tienda no se convierta en una frustración operativa o financiera.',
    phases: [
      {
        name: 'Fase 1 — Definición comercial',
        duration: 'Semanas 1-3',
        items: [
          'Definir catálogo apto para online',
          'Calcular márgenes reales',
          'Clarificar propuesta de valor digital',
        ],
      },
      {
        name: 'Fase 2 — Fundación operativa',
        duration: 'Semanas 4-6',
        items: [
          'Elegir plataforma, pasarela de pago y operador logístico',
          'Asignar roles internos',
          'Diseñar proceso mínimo de atención y despacho',
        ],
      },
      {
        name: 'Fase 3 — Lanzamiento controlado',
        duration: 'Semanas 7-10',
        items: [
          'Montar tienda MVP + WhatsApp Business',
          'Lanzar con presupuesto acotado',
          'Medir primeras ventas y ajustar',
        ],
      },
    ],
    kpis: [
      'Primeras ventas',
      'Costo de adquisición inicial',
      'Margen por pedido',
    ],
    services: [
      'Montaje de tienda',
      'Diseño de procesos',
      'Logística',
      'Capacitación',
      'Marketing inicial',
    ],
  },
  {
    profileId: 'B',
    zoneId: 'yellow',
    title: 'Completar pilares y lanzar',
    summary:
      'Ya hay avance de planificación. Cerramos los baches, montamos el canal y salimos al mercado con una operación ordenada.',
    phases: [
      {
        name: 'Fase 1 — Cerrar baches',
        duration: 'Semanas 1-2',
        items: [
          'Atacar pilares débiles del diagnóstico',
          'Validar decisiones de plataforma y logística',
          'Definir responsables y agenda de lanzamiento',
        ],
      },
      {
        name: 'Fase 2 — Implementación llave en mano',
        duration: 'Semanas 3-7',
        items: [
          'Montaje de tienda',
          'Integraciones de cobro y envío',
          'Automatización de WhatsApp',
        ],
      },
      {
        name: 'Fase 3 — Go-to-market',
        duration: 'Semanas 8-10',
        items: [
          'Lanzamiento con pauta y contenidos',
          'Capacitación del equipo',
          'Primer ciclo de revisión de KPIs',
        ],
      },
    ],
    kpis: [
      'Tráfico',
      'Conversión inicial',
      'Tiempo de respuesta',
    ],
    services: [
      'Tienda digital',
      'WhatsApp automatizado',
      'Marketing y contenidos',
      'Capacitación',
      'Logística',
    ],
  },
  {
    profileId: 'B',
    zoneId: 'green',
    title: 'Lanzamiento acelerado',
    summary:
      'Estás listo para salir. Ejecutamos una implementación rápida, una campaña de apertura y medición desde el día uno.',
    phases: [
      {
        name: 'Fase 1 — Implementación rápida',
        duration: 'Semanas 1-3',
        items: [
          'Montaje de tienda e integraciones',
          'Stock, pagos y logística conectados',
          'Configuración de métricas base',
        ],
      },
      {
        name: 'Fase 2 — Campaña de lanzamiento',
        duration: 'Semanas 4-6',
        items: [
          'Campaña omnicanal (Meta/Google, redes, WhatsApp)',
          'Contenidos de apertura',
          'Optimización semanal de creatividades',
        ],
      },
      {
        name: 'Fase 3 — Escala temprana',
        duration: 'Semanas 7-10',
        items: [
          'Medición desde el día 1',
          'Revisión mensual de KPIs',
          'Plan de escala del presupuesto ganador',
        ],
      },
    ],
    kpis: [
      'ROAS de lanzamiento',
      'Ventas del primer trimestre',
      'Ticket promedio',
    ],
    services: [
      'Implementación acelerada',
      'Marketing de lanzamiento',
      'Gestión de redes',
      'Automatización',
      'Revisión de KPIs',
    ],
  },
]

export function getWorkPlan(profileId: ProfileId, zoneId: ZoneId) {
  return workPlans.find(
    (plan) => plan.profileId === profileId && plan.zoneId === zoneId,
  )
}
