import type { ReactNode } from "react"
import { HERO_LINKS, HERO_MAP } from "@/config/hero-content"
import { cn } from "@/lib/utils"

function HeroLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-semibold text-primary underline underline-offset-2 transition-colors hover:text-[#155bcb]",
        className,
      )}
    >
      {children}
    </a>
  )
}

export function HeroMapSection({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="hero-map-title"
      className={cn("min-w-0 text-left text-sm leading-relaxed text-foreground sm:text-base", className)}
    >
      <h2 id="hero-map-title" className="sr-only">
        Unidades de atendimento e Programa Terra Cidadã
      </h2>

      <div className="overflow-hidden rounded-sm border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3] w-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
          <iframe
            src={HERO_MAP.embedSrc}
            title={HERO_MAP.title}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="border-t border-border bg-muted/40 px-3 py-2 text-center text-xs text-muted-foreground sm:text-sm">
          <a
            href={HERO_MAP.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-[#155bcb]"
          >
            Abrir mapa em tela cheia
          </a>
        </p>
      </div>

      <ol className="mt-4 list-decimal space-y-3 pl-5 marker:font-semibold marker:text-primary">
        <li>
          Clique no mapa acima e visualize as unidades de atendimento presencial,
          fruto de parceria com as Prefeituras Municipais
        </li>
        <li>
          Clique no link a seguir para conhecer as unidades próprias do INCRA:{" "}
          <HeroLink href={HERO_LINKS.mapaIncra}>MAPA</HeroLink> ou{" "}
          <HeroLink href={HERO_LINKS.listaIncra}>LISTA</HeroLink>
        </li>
        <li>
          <strong>Programa Terra Cidadã — PTC:</strong> Como instalar ou renovar
          a unidade de atendimento do INCRA na sua cidade:
          <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5 marker:font-normal">
            <li>
              Preencha o formulário de Adesão nesse{" "}
              <HeroLink href={HERO_LINKS.adesaoPtc}>LINK</HeroLink>. Depois de
              preencher e enviar o formulário, aguarde o contato do INCRA.
            </li>
            <li>
              Conheça o PTC clicando nesse{" "}
              <HeroLink href={HERO_LINKS.programaPtc}>LINK</HeroLink>
            </li>
          </ol>
        </li>
      </ol>
    </section>
  )
}
