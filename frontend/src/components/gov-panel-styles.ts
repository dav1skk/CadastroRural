import { cn } from "@/lib/utils"

export const govPanelClassName =
  "overflow-hidden rounded-sm border border-border bg-card shadow-sm"

export const govPanelHeaderClassName =
  "border-b border-primary/20 bg-primary px-4 py-3"

export const govPanelTitleClassName =
  "text-sm font-bold uppercase tracking-wide text-primary-foreground"

export const govPanelSectionClassName =
  "bg-[var(--gov-gray-5)] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-primary"

export function govNavLinkClassName(
  active = false,
  className?: string,
  onPrimary = false,
) {
  return cn(
    "group flex gap-2 rounded-sm px-3 py-2.5 text-sm leading-snug transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    onPrimary
      ? "focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
      : "focus-visible:ring-offset-card",
    onPrimary
      ? active
        ? "bg-primary-foreground/20 font-semibold text-primary-foreground"
        : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
      : active
        ? "bg-accent font-semibold text-accent-foreground"
        : "text-foreground hover:bg-accent hover:text-accent-foreground",
    className,
  )
}
