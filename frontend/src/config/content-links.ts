export type ContentLink = {
  label: string
  href: string
  external?: boolean
}

export type CollapsibleSection = {
  id: number
  title: string
  links: ContentLink[]
  /** Aviso exibido ao expandir a seção (ex.: orientação sobre certidão INSS). */
  note?: string
}

export const INCRA_LEGISLACAO =
  "https://www.gov.br/incra/pt-br/centrais-de-conteudos/legislacao"

export const INCRA_CADASTRO_URL =
  "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/atualizacao-e-inclusao-cadastral-de-imovel-rural"

export const INCRA_CNIR_URL =
  "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cnir"

export const INCRA_SERVICOS_IMOVEL_URL =
  "https://www.gov.br/incra/pt-br/servicos/imovel-rural"

export const INCRA_ACORDOS_ADESAO_URL =
  "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-rural/acordos-de-adesao"

export const SISATOS_URL = "https://sisatos.agricultura.gov.br/atos/listar"

export const SNCR_API_URL =
  "https://www.gov.br/conecta/catalogo/apis/sncr-sistema-nacional-de-cadastro-rural"

export function incraLegPdf(filename: string) {
  return `${INCRA_LEGISLACAO}/${filename}`
}
