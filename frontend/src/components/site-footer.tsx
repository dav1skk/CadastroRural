import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

const INCRA_URL = "https://www.gov.br/incra/pt-br"
const GOV_BR_URL = "https://www.gov.br"

const footerLinkClassName =
  "rounded-sm font-semibold text-white underline-offset-4 transition-colors hover:text-white/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="mt-auto bg-black text-white"
      role="contentinfo"
      aria-label="Rodapé"
    >
      <div className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12")}>
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:pb-10">
          <div className="space-y-2">
            <a
              href={GOV_BR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(footerLinkClassName, "text-lg tracking-wide")}
            >
              gov.br
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Portal oficial do Governo Federal do Brasil. Conteúdo e serviços
              digitais em conformidade com o Padrão Digital de Governo.
            </p>
          </div>

          <div className="space-y-2 sm:text-right">
            <a
              href={INCRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(footerLinkClassName, "text-lg tracking-wide")}
            >
              INCRA
            </a>
            <p className="max-w-md text-sm leading-relaxed text-white/70 sm:ml-auto">
              Instituto Nacional de Colonização e Reforma Agrária — autarquia
              federal vinculada ao Ministério do Desenvolvimento Agrário e
              Agricultura Familiar (MDA).
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-8 text-sm leading-relaxed text-white/70">
          <p>
            O Cadastro Rural é uma iniciativa do{" "}
            <a
              href={INCRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClassName}
            >
              INCRA
            </a>
            , em alinhamento à estratégia digital do{" "}
            <a
              href={GOV_BR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClassName}
            >
              gov.br
            </a>
            .
          </p>
          <p>
            Todo o conteúdo, dados e serviços disponibilizados neste site são de
            responsabilidade do INCRA. A infraestrutura e os padrões de acesso
            seguem as diretrizes do Governo Federal.
          </p>
          <p className="text-white/50">
            © {year} Instituto Nacional de Colonização e Reforma Agrária
            (INCRA). Governo Federal —{" "}
            <a
              href={GOV_BR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClassName}
            >
              gov.br
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
