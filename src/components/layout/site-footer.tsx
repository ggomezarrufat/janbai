export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} Janbai — Comercio digital llave en mano
        </p>
        <p>Objetivo: aumentar ventas con operación profesional.</p>
      </div>
    </footer>
  )
}
