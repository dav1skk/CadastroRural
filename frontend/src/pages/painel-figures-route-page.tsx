import { Navigate, useParams } from "react-router-dom"
import { PainelFiguresPage } from "@/components/painel/painel-figures-page"
import {
  PAINEL_FIGURES_ROUTES,
  isPainelFiguresSlug,
} from "@/config/painel-routes"

export function PainelFiguresRoutePage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !isPainelFiguresSlug(slug)) {
    return <Navigate to="/painel" replace />
  }

  return <PainelFiguresPage config={PAINEL_FIGURES_ROUTES[slug]} />
}
