import { lazy, Suspense, type ReactNode } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { DocumentTitle } from "@/components/document-title"
import { PageLoading } from "@/components/page-loading"
import { SiteChrome } from "@/components/site-chrome"
import { SiteFooter } from "@/components/site-footer"
import { HomePage } from "@/pages/home-page"

const CadastroServicesPage = lazy(() =>
  import("@/pages/cadastro-services-page").then((m) => ({
    default: m.CadastroServicesPage,
  })),
)
const NormasCadastroPage = lazy(() =>
  import("@/pages/normas-cadastro-page").then((m) => ({
    default: m.NormasCadastroPage,
  })),
)
const MaterialDeApoioPage = lazy(() =>
  import("@/pages/material-de-apoio-page").then((m) => ({
    default: m.MaterialDeApoioPage,
  })),
)
const CapacitacaoUnidadeMunicipalPage = lazy(() =>
  import("@/pages/capacitacao-unidade-municipal-page").then((m) => ({
    default: m.CapacitacaoUnidadeMunicipalPage,
  })),
)
const CapacitacaoConveniadosPtcPage = lazy(() =>
  import("@/pages/capacitacao-conveniados-ptc-page").then((m) => ({
    default: m.CapacitacaoConveniadosPtcPage,
  })),
)
const CapacitacaoTreinaGovbrPage = lazy(() =>
  import("@/pages/capacitacao-treina-govbr-page").then((m) => ({
    default: m.CapacitacaoTreinaGovbrPage,
  })),
)
const CapacitacaoInternaPage = lazy(() =>
  import("@/pages/capacitacao-interna-page").then((m) => ({
    default: m.CapacitacaoInternaPage,
  })),
)
const PainelPage = lazy(() =>
  import("@/pages/painel-page").then((m) => ({ default: m.PainelPage })),
)
const PainelFiguresRoutePage = lazy(() =>
  import("@/pages/painel-figures-route-page").then((m) => ({
    default: m.PainelFiguresRoutePage,
  })),
)
const PainelDcrPage = lazy(() =>
  import("@/pages/painel-dcr-page").then((m) => ({ default: m.PainelDcrPage })),
)

function LazyMain({ children }: { children: ReactNode }) {
  return (
    <main className="w-full">
      <Suspense fallback={<PageLoading />}>{children}</Suspense>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <div className="flex min-h-svh flex-col bg-background">
        <SiteChrome />
        <div className="flex flex-1 flex-col pt-[var(--site-chrome-height,7.25rem)]">
          <Routes>
            <Route
              path="/"
              element={
                <main className="w-full py-8 sm:py-10 lg:py-12">
                  <HomePage />
                </main>
              }
            />
            <Route
              path="/servicos-de-cadastro"
              element={
                <LazyMain>
                  <CadastroServicesPage />
                </LazyMain>
              }
            />
            <Route
              path="/normas-de-cadastro"
              element={
                <LazyMain>
                  <NormasCadastroPage />
                </LazyMain>
              }
            />
            <Route
              path="/material-de-apoio"
              element={
                <LazyMain>
                  <MaterialDeApoioPage />
                </LazyMain>
              }
            />
            <Route
              path="/capacitacao/unidade-municipal"
              element={
                <LazyMain>
                  <CapacitacaoUnidadeMunicipalPage />
                </LazyMain>
              }
            />
            <Route
              path="/capacitacao/conveniados-ptc"
              element={
                <LazyMain>
                  <CapacitacaoConveniadosPtcPage />
                </LazyMain>
              }
            />
            <Route
              path="/capacitacao/treina-govbr"
              element={
                <LazyMain>
                  <CapacitacaoTreinaGovbrPage />
                </LazyMain>
              }
            />
            <Route
              path="/capacitacao/conta-govbr-treinamento"
              element={<Navigate to="/capacitacao/treina-govbr" replace />}
            />
            <Route
              path="/capacitacao/interna"
              element={
                <LazyMain>
                  <CapacitacaoInternaPage />
                </LazyMain>
              }
            />
            <Route
              path="/painel"
              element={
                <LazyMain>
                  <PainelPage />
                </LazyMain>
              }
            />
            <Route
              path="/painel/dcr"
              element={
                <LazyMain>
                  <PainelDcrPage />
                </LazyMain>
              }
            />
            <Route
              path="/painel/:slug"
              element={
                <LazyMain>
                  <PainelFiguresRoutePage />
                </LazyMain>
              }
            />
            <Route
              path="*"
              element={
                <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" />
              }
            />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
