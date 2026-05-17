import { PainelFiguresPage } from "@/components/painel/painel-figures-page"
import { PAINEL_AUDITORIA_CONFIG } from "@/config/painel-auditoria"

export function PainelAuditoriaPage() {
  return <PainelFiguresPage config={PAINEL_AUDITORIA_CONFIG} />
}
