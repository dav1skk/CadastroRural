import { ExternalLink } from "lucide-react"
import { govPanelClassName } from "@/components/gov-panel-styles"
import { cn } from "@/lib/utils"

export function PainelMediaTile({
  label,
  imageSrc,
  imageAlt,
  href,
}: {
  label: string
  imageSrc: string
  imageAlt: string
  href: string
}) {
  return (
    <a
      href={href}
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
      <div className="bg-background p-2 sm:p-3">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full max-w-sm object-contain transition-transform group-hover:scale-[1.02]"
        />
      </div>
      <p className="border-t border-border bg-muted/50 py-2 text-center text-xs text-muted-foreground">
        Clique para acessar
        <ExternalLink className="ml-1 inline size-3 opacity-60" aria-hidden />
      </p>
    </a>
  )
}
