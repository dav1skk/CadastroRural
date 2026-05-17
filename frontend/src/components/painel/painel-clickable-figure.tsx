import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function PainelClickableFigure({
  src,
  alt,
  href,
  className,
}: {
  src: string
  alt: string
  href: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all",
        "hover:border-primary/40 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-auto w-full object-contain transition-transform group-hover:scale-[1.01]"
      />
      <p className="border-t border-border bg-muted/50 py-2 text-center text-xs text-muted-foreground">
        Clique para abrir o mapa
        <ExternalLink className="ml-1 inline size-3 opacity-60" aria-hidden />
      </p>
    </a>
  )
}
