import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Profile } from '../data/types'
import { cn } from '@/lib/utils'

interface ProfileCardProps {
  profile: Profile
  selected?: boolean
  onSelect: (id: Profile['id']) => void
}

export function ProfileCard({ profile, selected, onSelect }: ProfileCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(profile.id)}
      className={cn(
        'glass group relative flex h-full flex-col rounded-2xl p-6 text-left transition',
        selected
          ? 'border-accent ring-2 ring-accent/40'
          : 'hover:border-accent/50',
      )}
    >
      <span className="mb-3 inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-cyan">
        {profile.shortLabel}
      </span>
      <h3 className="font-display text-xl font-semibold text-foreground">
        {profile.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {profile.description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        Elegir este perfil
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </motion.button>
  )
}
