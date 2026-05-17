import { ChevronDown, ExternalLink, FileText } from "lucide-react"
import { Link } from "react-router-dom"
import { GovPanel } from "@/components/gov-panel"
import type { CollapsibleSection, ContentLink } from "@/config/content-links"
import { cn } from "@/lib/utils"

function ContentLinkItem({ link }: { link: ContentLink }) {
  const className = cn(
    "group flex items-start gap-2 rounded-sm px-3 py-2 text-sm leading-snug transition-colors",
    "text-foreground hover:bg-accent hover:text-accent-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  )

  const content = (
    <>
      <FileText
        className="mt-0.5 size-4 shrink-0 text-primary"
        aria-hidden
      />
      <span className="min-w-0 flex-1">{link.label}</span>
      {link.external ? (
        <ExternalLink
          className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-foreground"
          aria-hidden
        />
      ) : null}
    </>
  )

  if (link.external) {
    return (
      <li>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link to={link.href} className={className}>
        {content}
      </Link>
    </li>
  )
}

function CollapsibleSectionItem({
  id,
  title,
  links,
  note,
}: CollapsibleSection) {
  return (
    <li className="border-b border-border last:border-b-0">
      <details className="group">
        <summary
          className={cn(
            "flex cursor-pointer list-none items-start gap-3 px-4 py-4 transition-colors",
            "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
            "[&::-webkit-details-marker]:hidden",
          )}
        >
          <span
            className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-sm bg-primary text-xs font-bold text-primary-foreground"
            aria-hidden
          >
            {id}
          </span>
          <span className="min-w-0 flex-1 pr-2 text-sm font-semibold leading-snug text-foreground sm:text-base">
            {title}
          </span>
          <ChevronDown
            className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <div className="border-t border-border bg-[var(--gov-gray-5)]/60 pb-2 pt-1">
          {note ? (
            <p
              className="mx-3 mb-1 mt-2 rounded-sm border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs leading-relaxed text-destructive sm:text-sm"
              role="note"
            >
              {note}
            </p>
          ) : null}
          <ul>
            {links.map((link) => (
              <ContentLinkItem key={link.label} link={link} />
            ))}
          </ul>
        </div>
      </details>
    </li>
  )
}

type CollapsibleLinkSectionsProps = {
  sections: CollapsibleSection[]
  listTitle: string
  listAriaLabel?: string
}

export function CollapsibleLinkSections({
  sections,
  listTitle,
  listAriaLabel,
}: CollapsibleLinkSectionsProps) {
  return (
    <section aria-labelledby={listTitle}>
      <h2 id={listTitle} className="sr-only">
        {listAriaLabel ?? listTitle}
      </h2>
      <GovPanel>
        <ol className="list-none">
          {sections.map((section) => (
            <CollapsibleSectionItem key={section.id} {...section} />
          ))}
        </ol>
      </GovPanel>
    </section>
  )
}
