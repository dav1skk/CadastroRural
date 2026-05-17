import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import {
  GovPanel,
  GovPanelHeader,
  GovPanelSectionTitle,
  GovPanelTitle,
  govNavLinkClassName,
} from "@/components/gov-panel"
import {
  QUICK_ACCESS_SECTIONS,
  type QuickAccessLink,
} from "@/config/quick-access"

function QuickAccessItem({ link }: { link: QuickAccessLink }) {
  const className = govNavLinkClassName()

  const content = (
    <>
      <span className="min-w-0 flex-1">{link.label}</span>
      {link.external && (
        <ExternalLink
          className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-foreground"
          aria-hidden
        />
      )}
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

export function QuickAccessGuide() {
  return (
    <aside
      className="lg:sticky lg:top-28 lg:self-start"
      aria-labelledby="quick-access-title"
    >
      <nav aria-label="Acesso rápido">
        <GovPanel>
          <GovPanelHeader>
            <GovPanelTitle id="quick-access-title">Acesso rápido</GovPanelTitle>
          </GovPanelHeader>

          <div className="divide-y divide-border">
            {QUICK_ACCESS_SECTIONS.map((section) => (
              <section
                key={section.title}
                aria-labelledby={`qa-${section.title}`}
              >
                <GovPanelSectionTitle id={`qa-${section.title}`}>
                  {section.title}
                </GovPanelSectionTitle>
                <ul className="flex flex-col py-1">
                  {section.links.map((link) => (
                    <QuickAccessItem key={link.label} link={link} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </GovPanel>
      </nav>
    </aside>
  )
}
