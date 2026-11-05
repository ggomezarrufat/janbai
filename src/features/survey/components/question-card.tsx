import { AnimatePresence, motion } from 'framer-motion'
import type { Profile, Question, Rating } from '../data/types'
import { PillarIcon } from '../lib/icons'
import { RatingScale } from './rating-scale'

interface QuestionCardProps {
  question: Question
  profile: Profile
  value?: Rating
  encouragement?: string | null
  onSelect: (rating: Rating) => void
}

export function QuestionCard({
  question,
  profile,
  value,
  encouragement,
  onSelect,
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.25 }}
        className="glass rounded-3xl p-6 sm:p-8"
      >
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-cyan">
            <PillarIcon name={question.icon} className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-cyan">
              Pilar {question.order}
            </p>
            <h2 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
              {question.title}
            </h2>
          </div>
        </div>
        <p className="mb-8 text-base leading-relaxed text-muted">
          {question.description}
        </p>
        <RatingScale
          value={value}
          lowLabel={profile.scaleLow}
          highLabel={profile.scaleHigh}
          onSelect={onSelect}
        />
        {encouragement ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent-cyan"
            role="status"
          >
            {encouragement}
          </motion.p>
        ) : null}
      </motion.div>
    </AnimatePresence>
  )
}
