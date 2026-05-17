import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { DocumentTitle } from "@/components/document-title"
import { SiteChrome } from "@/components/site-chrome"
import { SiteFooter } from "@/components/site-footer"
import { CadastroServicesPage } from "@/pages/cadastro-services-page"
import { HomePage } from "@/pages/home-page"
import { CapacitacaoConveniadosPtcPage } from "@/pages/capacitacao-conveniados-ptc-page"
import { CapacitacaoTreinaGovbrPage } from "@/pages/capacitacao-treina-govbr-page"
import { CapacitacaoInternaPage } from "@/pages/capacitacao-interna-page"
import { CapacitacaoUnidadeMunicipalPage } from "@/pages/capacitacao-unidade-municipal-page"
import { MaterialDeApoioPage } from "@/pages/material-de-apoio-page"
import { NormasCadastroPage } from "@/pages/normas-cadastro-page"
import { PainelAuditoriaPage } from "@/pages/painel-auditoria-page"
import { PainelCnirPage } from "@/pages/painel-cnir-page"
import { PainelDcrPage } from "@/pages/painel-dcr-page"
import { PainelDescentralizacaoPage } from "@/pages/painel-descentralizacao-page"
import { PainelEstruturaResumoPage } from "@/pages/painel-estrutura-resumo-page"
import { PainelPage } from "@/pages/painel-page"

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
              <main className="w-full">
                <CadastroServicesPage />
              </main>
            }
          />
          <Route
            path="/normas-de-cadastro"
            element={
              <main className="w-full">
                <NormasCadastroPage />
              </main>
            }
          />
          <Route
            path="/material-de-apoio"
            element={
              <main className="w-full">
                <MaterialDeApoioPage />
              </main>
            }
          />
          <Route
            path="/capacitacao/unidade-municipal"
            element={
              <main className="w-full">
                <CapacitacaoUnidadeMunicipalPage />
              </main>
            }
          />
          <Route
            path="/capacitacao/conveniados-ptc"
            element={
              <main className="w-full">
                <CapacitacaoConveniadosPtcPage />
              </main>
            }
          />
          <Route
            path="/capacitacao/treina-govbr"
            element={
              <main className="w-full">
                <CapacitacaoTreinaGovbrPage />
              </main>
            }
          />
          <Route
            path="/capacitacao/conta-govbr-treinamento"
            element={<Navigate to="/capacitacao/treina-govbr" replace />}
          />
          <Route
            path="/capacitacao/interna"
            element={
              <main className="w-full">
                <CapacitacaoInternaPage />
              </main>
            }
          />
          <Route
            path="/painel"
            element={
              <main className="w-full">
                <PainelPage />
              </main>
            }
          />
          <Route
            path="/painel/estrutura-resumo"
            element={
              <main className="w-full">
                <PainelEstruturaResumoPage />
              </main>
            }
          />
          <Route
            path="/painel/dcr"
            element={
              <main className="w-full">
                <PainelDcrPage />
              </main>
            }
          />
          <Route
            path="/painel/auditoria"
            element={
              <main className="w-full">
                <PainelAuditoriaPage />
              </main>
            }
          />
          <Route
            path="/painel/cnir"
            element={
              <main className="w-full">
                <PainelCnirPage />
              </main>
            }
          />
          <Route
            path="/painel/descentralizacao"
            element={
              <main className="w-full">
                <PainelDescentralizacaoPage />
              </main>
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
