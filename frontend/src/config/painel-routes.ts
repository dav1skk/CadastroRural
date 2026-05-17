import type { PainelPageConfig } from "@/config/painel-types"
import { PAINEL_AUDITORIA_CONFIG } from "@/config/painel-auditoria"
import { PAINEL_CNIR_CONFIG } from "@/config/painel-cnir"
import { PAINEL_DESCENTRALIZACAO_CONFIG } from "@/config/painel-descentralizacao"
import { PAINEL_ESTRUTURA_RESUMO_CONFIG } from "@/config/painel-estrutura-resumo"

export const PAINEL_FIGURES_ROUTES = {
  "estrutura-resumo": PAINEL_ESTRUTURA_RESUMO_CONFIG,
  auditoria: PAINEL_AUDITORIA_CONFIG,
  cnir: PAINEL_CNIR_CONFIG,
  descentralizacao: PAINEL_DESCENTRALIZACAO_CONFIG,
} as const satisfies Record<string, PainelPageConfig>

export type PainelFiguresSlug = keyof typeof PAINEL_FIGURES_ROUTES

export function isPainelFiguresSlug(slug: string): slug is PainelFiguresSlug {
  return slug in PAINEL_FIGURES_ROUTES
}
