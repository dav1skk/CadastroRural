import { cn } from "@/lib/utils"

export function PainelFigure({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-sm border border-border bg-card shadow-sm",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-auto w-full object-contain"
      />
    </figure>
  )
}
