import {
  ExternalLink,
  HelpCircle,
  MapPinned,
  ScrollText,
} from "lucide-react"
import { CollapsibleLinkSections } from "@/components/collapsible-link-sections"
import {
  CADASTRO_FEATURED_CARDS,
  CADASTRO_PAGE_INSTRUCTION,
  CADASTRO_PAGE_TITLE,
  CADASTRO_SERVICES,
  type CadastroFeaturedCard,
} from "@/config/cadastro-services"
import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

const featuredIcons = [HelpCircle, ScrollText, MapPinned] as const

function FeaturedCard({
  card,
  icon: Icon,
}: {
  card: CadastroFeaturedCard
  icon: (typeof featuredIcons)[number]
}) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all",
        "hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-accent px-4 py-8 text-center sm:py-10">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
          <Icon className="size-7" aria-hidden />
        </span>
        <span className="text-sm font-bold uppercase tracking-wide text-primary sm:text-base">
          {card.title}
        </span>
        <span className="max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {card.description}
        </span>
      </div>
      <p className="border-t border-border bg-muted/50 py-2 text-center text-xs text-muted-foreground">
        Clique para acessar
        <ExternalLink className="ml-1 inline size-3 opacity-60" aria-hidden />
      </p>
    </a>
  )
}

export function CadastroServicesPage() {
  return (
    <div className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12")}>
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl lg:text-[1.65rem]">
          {CADASTRO_PAGE_TITLE}
        </h1>
      </header>

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
        {CADASTRO_FEATURED_CARDS.map((card, index) => (
          <FeaturedCard
            key={card.title}
            card={card}
            icon={featuredIcons[index] ?? HelpCircle}
          />
        ))}
      </div>

      <p
        className="mx-auto mt-8 max-w-4xl text-center text-sm font-bold uppercase tracking-wide text-destructive sm:mt-10 sm:text-base"
        role="note"
      >
        {CADASTRO_PAGE_INSTRUCTION}
      </p>

      <div className="mx-auto mt-6 max-w-4xl sm:mt-8">
        <CollapsibleLinkSections
          sections={CADASTRO_SERVICES}
          listTitle="cadastro-services-list-title"
          listAriaLabel="Lista de serviços de cadastramento"
        />
      </div>
    </div>
  )
}

