import type { ReactNode } from "react"
import { ExternalLink, FileText } from "lucide-react"
import { Link } from "react-router-dom"
import {
  GovPanel,
  GovPanelHeader,
  GovPanelTitle,
} from "@/components/gov-panel"
import { CapacitacaoPreparacaoLinkCard } from "@/components/capacitacao-preparacao-link-card"
import type {
  CapacitacaoApoioLink,
  CapacitacaoPreparacaoLink,
} from "@/config/capacitacao"
import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

export const capacitacaoSectionTitleClassName =
  "text-sm font-bold uppercase tracking-wide text-primary sm:text-base"

export const capacitacaoBodyClassName =
  "text-sm leading-relaxed text-foreground sm:text-[0.9375rem]"

export const capacitacaoStepTitleClassName = "text-sm font-bold text-foreground"

export const capacitacaoInstructionClassName =
  "mx-auto max-w-4xl text-center text-sm font-bold uppercase tracking-wide text-destructive sm:text-base"

export const capacitacaoLinkClassName =
  "font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/90"

export function CapacitacaoPageLayout({
  title,
  instruction,
  children,
  className,
  contentClassName,
}: {
  title: string
  instruction?: string
  children: ReactNode
  className?: string
  contentClassName?: string
}) {
  return (
    <div
      className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12", className)}
    >
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl lg:text-[1.65rem]">
          {title}
        </h1>
      </header>

      {instruction ? (
        <p
          className={cn(capacitacaoInstructionClassName, "mt-8 sm:mt-10")}
          role="note"
        >
          {instruction}
        </p>
      ) : null}

      <div
        className={cn(
          "mx-auto max-w-6xl",
          instruction ? "mt-6 sm:mt-8" : "mt-8 sm:mt-10",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function CapacitacaoTwoColumnLayout({
  main,
  aside,
  asideLabel = "Recursos complementares",
}: {
  main: ReactNode
  aside: ReactNode
  asideLabel?: string
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
      <div className="space-y-8 sm:space-y-10">{main}</div>
      <aside
        className="mx-auto grid w-full max-w-sm gap-6 sm:max-w-md lg:max-w-none lg:gap-8"
        aria-label={asideLabel}
      >
        {aside}
      </aside>
    </div>
  )
}

export function CapacitacaoSection({
  title,
  children,
  bordered = false,
  className,
}: {
  title: string
  children: ReactNode
  bordered?: boolean
  className?: string
}) {
  return (
    <section
      className={cn(
        "space-y-4",
        bordered && "border-t border-border pt-6 sm:pt-8",
        className,
      )}
    >
      <h2 className={capacitacaoSectionTitleClassName}>{title}</h2>
      {children}
    </section>
  )
}

export function CapacitacaoBodyText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <p className={cn(capacitacaoBodyClassName, className)}>{children}</p>
}

export function CapacitacaoExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(capacitacaoLinkClassName, className)}
    >
      {children}
    </a>
  )
}

export function CapacitacaoStepBlock({
  title,
  body,
  subitems,
}: {
  title: string
  body: string
  subitems?: readonly string[]
}) {
  return (
    <article className="space-y-2">
      <h3 className={capacitacaoStepTitleClassName}>{title}</h3>
      <p className={capacitacaoBodyClassName}>{body}</p>
      {subitems && subitems.length > 0 ? (
        <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
          {subitems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : null}
    </article>
  )
}

function ApoioLinkRow({ link }: { link: CapacitacaoApoioLink }) {
  const rowClassName = cn(
    "group flex items-start gap-2 px-4 py-3 text-sm leading-snug transition-colors",
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
          className={rowClassName}
        >
          {content}
        </a>
      </li>
    )
  }

  if (link.href.startsWith("/")) {
    return (
      <li>
        <Link to={link.href} className={rowClassName}>
          {content}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <a href={link.href} className={rowClassName}>
        {content}
      </a>
    </li>
  )
}

export function CapacitacaoApoioPanel({
  title,
  links,
}: {
  title: string
  links: readonly CapacitacaoApoioLink[]
}) {
  return (
    <GovPanel>
      <GovPanelHeader>
        <GovPanelTitle>{title}</GovPanelTitle>
      </GovPanelHeader>
      <ul className="divide-y divide-border">
        {links.map((link) => (
          <ApoioLinkRow key={link.id} link={link} />
        ))}
      </ul>
    </GovPanel>
  )
}

export function CapacitacaoModuleBlock({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <article className="space-y-2">
      <h2
        className={cn(capacitacaoSectionTitleClassName, "[text-wrap:balance]")}
      >
        {title}
      </h2>
      <p className={capacitacaoBodyClassName}>{description}</p>
    </article>
  )
}

export function CapacitacaoInfoPanel({
  title,
  items,
}: {
  title: string
  items: readonly { label: string; value: string }[]
}) {
  return (
    <GovPanel>
      <GovPanelHeader>
        <GovPanelTitle>{title}</GovPanelTitle>
      </GovPanelHeader>
      <dl className="divide-y divide-border">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-wrap gap-x-2 gap-y-0.5 px-4 py-3 text-sm sm:text-[0.9375rem]"
          >
            <dt className="font-bold uppercase tracking-wide text-primary">
              {item.label}
            </dt>
            <dd className="text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    </GovPanel>
  )
}

export function CapacitacaoPreparacaoAside({
  links,
}: {
  links: readonly CapacitacaoPreparacaoLink[]
}) {
  return (
    <>
      {links.map((link) => (
        <CapacitacaoPreparacaoLinkCard key={link.id} link={link} />
      ))}
    </>
  )
}
