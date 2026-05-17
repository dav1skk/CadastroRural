export type CapacitacaoInternaListItem = {
  id: string
  label: string
  href?: string
  external?: boolean
  status?: string
}

export const CAPACITACAO_INTERNA_PAGE_TITLE =
  "Capacitação Interna em Cadastro Rural - 2026"

export const CAPACITACAO_INTERNA_INTRO =
  "Evento ofertado como capacitação no formato presencial e voltado a Servidores Federais nomeados do CNPU 2024/2025 atualmente lotados nos Serviços de Cadastro Rural."

export const CAPACITACAO_INTERNA_INSTRUCTION =
  "Clique nos links e siga os passos indicados abaixo."

export const CAPACITACAO_INTERNA_SECTION_TITLE =
  "Informações sobre o evento"

export const CAPACITACAO_INTERNA_ITEMS: CapacitacaoInternaListItem[] = [
  {
    id: "apuracao",
    label: "Apuração da Demanda:",
    href: "#",
    status: "Link",
  },
  {
    id: "resultado",
    label: "Resultado:",
    status: "Aguarde",
  },
]
