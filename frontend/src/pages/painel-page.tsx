import { PainelEmbedSection } from "@/components/painel-embed-section"
import { PAINEL_PAGE_TITLE } from "@/config/painel"
import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

export function PainelPage() {
  return (
    <div className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12")}>
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl lg:text-[1.65rem]">
          {PAINEL_PAGE_TITLE}
        </h1>
      </header>

      <div className="mx-auto mt-8 max-w-6xl sm:mt-10">
        <PainelEmbedSection />
      </div>
    </div>
  )
}
