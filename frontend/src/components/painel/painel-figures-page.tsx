import {
  CapacitacaoSection,
  capacitacaoInstructionClassName,
} from "@/components/capacitacao/capacitacao-layout"
import { PainelClickableFigure } from "@/components/painel/painel-clickable-figure"
import { PainelDcrVideo } from "@/components/painel/painel-dcr-video"
import { PainelDownloadCta } from "@/components/painel/painel-download-cta"
import { PainelFigure } from "@/components/painel/painel-figure"
import { PainelMediaTile } from "@/components/painel/painel-media-tile"
import type { PainelPageConfig } from "@/config/painel-types"
import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

function renderFigure(figure: {
  id: string
  src: string
  alt: string
  href?: string
}) {
  if (figure.href) {
    return (
      <PainelClickableFigure
        key={figure.id}
        src={figure.src}
        alt={figure.alt}
        href={figure.href}
      />
    )
  }

  return (
    <PainelFigure key={figure.id} src={figure.src} alt={figure.alt} />
  )
}

export function PainelFiguresPage({ config }: { config: PainelPageConfig }) {
  return (
    <div className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12")}>
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl lg:text-[1.65rem]">
          {config.pageTitle}
        </h1>
        {config.subtitle ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {config.subtitle}
          </p>
        ) : null}
      </header>

      <div className="mx-auto mt-8 max-w-6xl space-y-10 sm:mt-10 sm:space-y-12">
        {config.sections.map((section, index) => {
          if (section.type === "map") {
            return (
              <section key="map" className="space-y-4">
                <p
                  className={capacitacaoInstructionClassName}
                  role="note"
                >
                  {section.instruction}
                </p>
                <PainelClickableFigure
                  src={section.figure.src}
                  alt={section.figure.alt}
                  href={section.figure.href!}
                />
              </section>
            )
          }

          if (section.type === "download") {
            return (
              <div
                key={`download-${index}`}
                className={cn(
                  section.bordered && "border-t border-border pt-6 sm:pt-8",
                )}
              >
                <PainelDownloadCta title={section.title} href={section.href} />
              </div>
            )
          }

          if (section.type === "figures") {
            return (
              <CapacitacaoSection
                key={section.title}
                title={section.title}
                bordered={section.bordered}
              >
                {section.layout === "grid-2" ? (
                  <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
                    {section.figures.map((figure) => renderFigure(figure))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {section.figures.map((figure) => renderFigure(figure))}
                  </div>
                )}
              </CapacitacaoSection>
            )
          }

          const { section: media } = section
          return (
            <CapacitacaoSection
              key={media.title}
              title={media.title}
              bordered={section.bordered}
            >
              <div
                className={cn(
                  "grid gap-6",
                  media.video
                    ? "sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
                    : "sm:grid-cols-2 lg:grid-cols-3 lg:gap-8",
                )}
              >
                {media.video ? (
                  <PainelDcrVideo
                    label={media.video.label}
                    title={media.video.title}
                    sourceUrl={media.video.sourceUrl}
                  />
                ) : null}
                {media.items.map((item) => (
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
          )
        })}

        <p className="text-center text-xs text-muted-foreground sm:text-sm">
          Conteúdo reproduzido do{" "}
          <a
            href={config.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2 hover:text-[#155bcb]"
          >
            {config.sourceLabel ?? "painel do Cadastro Rural Brasil"}
          </a>
          .
        </p>
      </div>
    </div>
  )
}
