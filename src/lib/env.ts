export function getWhatsAppNumber(): string {
  return import.meta.env.VITE_WHATSAPP_NUMBER?.trim() ?? ''
}

export function getCalendarUrl(): string {
  return import.meta.env.VITE_CALENDAR_URL?.trim() ?? ''
}

export function buildWhatsAppUrl(message: string): string | null {
  const number = getWhatsAppNumber()
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
