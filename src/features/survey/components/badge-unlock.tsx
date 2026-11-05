import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import type { Zone } from '../data/types'
import { cn } from '@/lib/utils'

interface BadgeUnlockProps {
  zone: Zone
}

export function BadgeUnlock({ zone }: BadgeUnlockProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 14 }}
      className="glass flex items-center gap-4 rounded-3xl p-6"
    >
      <div
        className={cn(
          'flex h-16 w-16 items-center justify-center rounded-2xl',
          zone.id === 'red' && 'bg-zone-red/20 text-zone-red',
          zone.id === 'yellow' && 'bg-zone-yellow/20 text-zone-yellow',
          zone.id === 'green' && 'bg-zone-green/20 text-zone-green',
        )}
      >
        <Award className="h-8 w-8" />
      </div>
      <div>
        <p className="text-sm text-muted">Insignia desbloqueada</p>
        <p className={cn('font-display text-2xl font-bold', zone.colorClass)}>
          {zone.badge}
        </p>
        <p className="text-sm text-muted">Nivel digital Janbai</p>
      </div>
    </motion.div>
  )
}
