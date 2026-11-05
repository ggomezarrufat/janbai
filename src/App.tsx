import { Analytics } from '@vercel/analytics/react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/app-shell'

const HomePage = lazy(() => import('@/pages/home-page'))
const DiagnosticPage = lazy(() => import('@/pages/diagnostic-page'))
const ResultPage = lazy(() => import('@/pages/result-page'))
const ProposalPage = lazy(() => import('@/pages/proposal-page'))

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-sm text-muted">
      Cargando…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diagnostico" element={<DiagnosticPage />} />
            <Route path="/resultado" element={<ResultPage />} />
            <Route path="/propuesta" element={<ProposalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AppShell>
      <Analytics />
    </BrowserRouter>
  )
}
