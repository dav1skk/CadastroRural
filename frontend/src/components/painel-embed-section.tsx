import { PAINEL_PRINCIPAL } from "@/config/painel"
import { cn } from "@/lib/utils"

export function PainelEmbedSection({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="painel-embed-title"
      className={cn("min-w-0", className)}
    >
      <h2 id="painel-embed-title" className="sr-only">
        {PAINEL_PRINCIPAL.title}
      </h2>

      <div className="overflow-hidden rounded-sm border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[16/10] w-full min-h-[min(70vh,720px)] sm:min-h-[min(75vh,800px)]">
          <iframe
            src={PAINEL_PRINCIPAL.embedSrc}
            title={PAINEL_PRINCIPAL.title}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="border-t border-border bg-muted/40 px-3 py-2 text-center text-xs text-muted-foreground sm:text-sm">
          <a
            href={PAINEL_PRINCIPAL.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-[#155bcb]"
          >
            Abrir painel em tela cheia
          </a>
        </p>
      </div>
    </section>
  )
}
