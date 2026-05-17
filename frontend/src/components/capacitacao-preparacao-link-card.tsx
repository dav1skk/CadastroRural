import { BookOpen, ExternalLink } from "lucide-react"
import type { CapacitacaoPreparacaoLink } from "@/config/capacitacao"
import { govPanelClassName } from "@/components/gov-panel"
import { cn } from "@/lib/utils"

export function CapacitacaoPreparacaoLinkCard({
  link,
}: {
  link: CapacitacaoPreparacaoLink
}) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col overflow-hidden transition-all",
        govPanelClassName,
        "hover:border-primary/40 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <div className="flex flex-1 flex-col gap-3 bg-accent px-4 py-6 sm:py-8">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105 sm:size-14">
          <BookOpen className="size-6 sm:size-7" aria-hidden />
        </span>
        <h3 className="text-center text-sm font-bold uppercase leading-snug tracking-wide text-primary sm:text-base">
          {link.title}
        </h3>
        <p className="text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {link.description}
        </p>
      </div>
      <p className="border-t border-border bg-muted/50 py-2 text-center text-xs text-muted-foreground">
        Clique para acessar
        <ExternalLink className="ml-1 inline size-3 opacity-60" aria-hidden />
      </p>
    </a>
  )
}
