import { motion } from 'framer-motion'
import type { Zone } from '../data/types'
import { cn } from '@/lib/utils'

interface ScoreGaugeProps {
  score: number
  zone: Zone
}

export function ScoreGauge({ score, zone }: ScoreGaugeProps) {
  const percent = ((score - 6) / 24) * 100
  const clamped = Math.max(0, Math.min(100, percent))

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted">Tu puntaje</p>
          <p className="font-display text-5xl font-bold tabular-nums">{score}</p>
          <p className="text-sm text-muted">de 30 puntos</p>
        </div>
        <div className={cn('text-right font-semibold', zone.colorClass)}>
          {zone.label}
        </div>
      </div>
      <div className="relative h-4 overflow-hidden rounded-full bg-surface-elevated">
        <div className="absolute inset-0 flex">
          <div className="w-[37.5%] bg-zone-red/30" />
          <div className="w-[37.5%] bg-zone-yellow/30" />
          <div className="w-[25%] bg-zone-green/30" />
        </div>
        <motion.div
          className={cn(
            'absolute inset-y-0 left-0 rounded-full',
            zone.id === 'red' && 'bg-zone-red',
            zone.id === 'yellow' && 'bg-zone-yellow',
            zone.id === 'green' && 'bg-zone-green',
          )}
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <div className="mt-3 flex justify-between text-xs text-muted">
        <span>6</span>
        <span>15</span>
        <span>24</span>
        <span>30</span>
      </div>
    </div>
  )
}
