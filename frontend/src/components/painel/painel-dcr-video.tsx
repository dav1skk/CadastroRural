import { ExternalLink, Play } from "lucide-react"
import { govPanelClassName } from "@/components/gov-panel"
import { cn } from "@/lib/utils"

export function PainelDcrVideo({
  label,
  title,
  sourceUrl,
}: {
  label: string
  title: string
  sourceUrl: string
}) {
  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col overflow-hidden transition-all",
        govPanelClassName,
        "hover:border-primary/40 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <p className="border-b border-border bg-primary px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-primary-foreground sm:text-sm">
        {label}
      </p>
      <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-muted px-4">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
          <Play className="ml-0.5 size-7" aria-hidden />
        </span>
        <span className="text-center text-sm font-bold text-foreground sm:text-base">
          {title}
        </span>
      </div>
      <p className="border-t border-border bg-muted/50 py-2 text-center text-xs text-muted-foreground">
        Abrir no painel original
        <ExternalLink className="ml-1 inline size-3 opacity-60" aria-hidden />
      </p>
    </a>
  )
}
