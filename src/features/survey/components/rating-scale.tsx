import { motion } from 'framer-motion'
import { useEffect } from 'react'
import type { Rating } from '../data/types'
import { cn } from '@/lib/utils'

const labels: Record<Rating, string> = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
}

interface RatingScaleProps {
  value?: Rating
  lowLabel: string
  highLabel: string
  onSelect: (rating: Rating) => void
}

export function RatingScale({
  value,
  lowLabel,
  highLabel,
  onSelect,
}: RatingScaleProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = Number(event.key)
      if (key >= 1 && key <= 5) {
        onSelect(key as Rating)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onSelect])

  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-4 text-xs text-muted">
        <span>{lowLabel}</span>
        <span className="text-right">{highLabel}</span>
      </div>
      <div className="grid grid-cols-5 gap-2 sm:gap-3" role="radiogroup" aria-label="Puntaje del 1 al 5">
        {([1, 2, 3, 4, 5] as Rating[]).map((rating) => {
          const selected = value === rating
          return (
            <motion.button
              key={rating}
              type="button"
              role="radio"
              aria-checked={selected}
              whileTap={{ scale: 0.92 }}
              animate={selected ? { scale: [1, 1.08, 1] } : { scale: 1 }}
              onClick={() => onSelect(rating)}
              className={cn(
                'flex h-14 flex-col items-center justify-center rounded-xl border text-lg font-bold transition sm:h-16',
                selected
                  ? 'border-transparent bg-gradient-to-br from-accent to-accent-cyan text-white shadow-lg shadow-accent/30'
                  : 'border-border bg-surface-elevated text-foreground hover:border-accent/60',
              )}
            >
              {labels[rating]}
            </motion.button>
          )
        })}
      </div>
      <p className="text-center text-xs text-muted">
        Atajo: teclas 1 a 5
      </p>
    </div>
  )
}
