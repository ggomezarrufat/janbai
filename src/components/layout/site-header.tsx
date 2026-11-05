import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          Jan<span className="text-gradient">bai</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <NavLink
            to="/diagnostico"
            className={({ isActive }) =>
              cn(
                'hidden text-sm text-muted transition hover:text-foreground sm:inline',
                isActive && 'text-foreground',
              )
            }
          >
            Diagnóstico
          </NavLink>
          <Button asChild size="sm">
            <Link to="/diagnostico">Empezar test</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
