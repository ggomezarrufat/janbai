import type { Question } from '../data/types'
import { PillarIcon } from '../lib/icons'
import { cn } from '@/lib/utils'

interface ProgressQuestProps {
  questions: Question[]
  currentIndex: number
  answeredIds: string[]
  score: number
}

export function ProgressQuest({
  questions,
  currentIndex,
  answeredIds,
  score,
}: ProgressQuestProps) {
  const progress = ((answeredIds.length) / questions.length) * 100

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="text-muted">
          Nivel {Math.min(currentIndex + 1, questions.length)} de {questions.length}
        </p>
        <p className="font-semibold text-accent-cyan" aria-live="polite">
          {score} pts
        </p>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-surface-elevated"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso del diagnóstico"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="grid grid-cols-6 gap-2">
        {questions.map((question, index) => {
          const done = answeredIds.includes(question.id)
          const active = index === currentIndex
          return (
            <div
              key={question.id}
              title={question.pillar}
              className={cn(
                'flex aspect-square items-center justify-center rounded-xl border transition',
                done && 'border-accent/50 bg-accent/20 text-accent-cyan',
                active && !done && 'border-accent text-foreground',
                !done && !active && 'border-border text-muted',
              )}
            >
              <PillarIcon name={question.icon} className="h-4 w-4" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
