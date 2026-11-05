import {
  Boxes,
  ChartColumn,
  CreditCard,
  Megaphone,
  MessageCircle,
  Monitor,
  Smartphone,
  Store,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  boxes: Boxes,
  megaphone: Megaphone,
  'message-circle': MessageCircle,
  smartphone: Smartphone,
  truck: Truck,
  'chart-column': ChartColumn,
  store: Store,
  monitor: Monitor,
  users: Users,
  'credit-card': CreditCard,
}

export function PillarIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = iconMap[name] ?? Boxes
  return <Icon className={className} aria-hidden />
}
