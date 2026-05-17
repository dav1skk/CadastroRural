import { CapacitacaoSection } from "@/components/capacitacao/capacitacao-layout"
import { PainelDcrVideo } from "@/components/painel/painel-dcr-video"
import { PainelFigure } from "@/components/painel/painel-figure"
import { PainelMediaTile } from "@/components/painel/painel-media-tile"
import {
  PAINEL_DCR_MEDIA_SECTION,
  PAINEL_DCR_PAGE_TITLE,
  PAINEL_DCR_REPORT_SECTION,
  PAINEL_DCR_SOURCE_URL,
  PAINEL_DCR_STATS_SECTION,
} from "@/config/painel-dcr"
import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

export function PainelDcrPage() {
  return (
    <div className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12")}>
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl lg:text-[1.65rem]">
          {PAINEL_DCR_PAGE_TITLE}
        </h1>
      </header>

      <div className="mx-auto mt-8 max-w-6xl space-y-10 sm:mt-10 sm:space-y-12">
        <CapacitacaoSection title={PAINEL_DCR_STATS_SECTION.title}>
          <div className="space-y-6">
            {PAINEL_DCR_STATS_SECTION.figures.map((figure) => (
              <PainelFigure
                key={figure.id}
                src={figure.src}
                alt={figure.alt}
              />
            ))}
          </div>
        </CapacitacaoSection>

        <CapacitacaoSection
          title={PAINEL_DCR_REPORT_SECTION.title}
          bordered
        >
          <div className="space-y-6">
            {PAINEL_DCR_REPORT_SECTION.figures.map((figure) => (
              <PainelFigure
                key={figure.id}
                src={figure.src}
                alt={figure.alt}
              />
            ))}
          </div>
        </CapacitacaoSection>

        <CapacitacaoSection title={PAINEL_DCR_MEDIA_SECTION.title} bordered>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <PainelDcrVideo
              label={PAINEL_DCR_MEDIA_SECTION.video.label}
              title={PAINEL_DCR_MEDIA_SECTION.video.title}
              sourceUrl={PAINEL_DCR_MEDIA_SECTION.video.sourceUrl}
            />
            {PAINEL_DCR_MEDIA_SECTION.items.map((item) => (
              <PainelMediaTile
                key={item.id}
                label={item.label}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                href={item.href}
              />
            ))}
          </div>
        </CapacitacaoSection>

        <p className="text-center text-xs text-muted-foreground sm:text-sm">
          Conteúdo reproduzido do{" "}
          <a
            href={PAINEL_DCR_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2 hover:text-[#155bcb]"
          >
            painel de análise DCR
          </a>{" "}
          do Cadastro Rural Brasil.
        </p>
      </div>
    </div>
  )
}
