import type { CapacitacaoApoioLink, CapacitacaoPreparacaoLink } from "@/config/capacitacao"
import { CAPACITACAO_UMC_PREPARACAO_LINKS } from "@/config/capacitacao"

export const CAPACITACAO_PTC_PAGE_TITLE =
  "Capacitação para conveniados - PTC"

export const CAPACITACAO_PTC_INSTRUCTION =
  "Clique nos links ao lado para acessar a preparação no ambiente virtual."

export const CAPACITACAO_PTC_SECTION_TITLE =
  "Organizações da Sociedade Civil"

export const CAPACITACAO_PTC_INTRO_PARAGRAPHS = [
  "Para as Organizações da Sociedade Civil conveniadas ao INCRA no âmbito do Programa Terra Cidadã, a capacitação sobre cadastro rural visa a melhorar a utilização das ferramentas, dar mais autonomia aos conveniados e aumentar a rapidez no processamento da Declaração de Cadastro Rural — DCR.",
  "A capacitação incluirá mídias digitais referentes ao módulo da DCR, à Consulta Pública do Sistema Nacional de Cadastro Rural — SNCR e ao Manual de Cadastro Rural.",
] as const

export const CAPACITACAO_PTC_TREINAMENTO_URL =
  "https://treinasncr.serpro.gov.br/dcr"

export const CAPACITACAO_PTC_PREPARACAO_LINKS: CapacitacaoPreparacaoLink[] =
  CAPACITACAO_UMC_PREPARACAO_LINKS

export const CAPACITACAO_PTC_APOIO_LINKS: CapacitacaoApoioLink[] = [
  {
    id: "conta-govbr",
    label: "Treina gov.br",
    href: "/capacitacao/treina-govbr",
  },
  {
    id: "faq",
    label: "perguntas frequentes",
    href: "https://www.gov.br/incra/pt-br/canais_atendimento/perguntas-frequentes",
    external: true,
  },
  {
    id: "servicos",
    label: "serviços disponibilizados",
    href: "/servicos-de-cadastro",
  },
  {
    id: "normativos",
    label: "normativos de cadastro rural",
    href: "/normas-de-cadastro",
  },
  {
    id: "manuais",
    label: "sistemas e manuais de cadastro rural",
    href: "/material-de-apoio",
  },
]
