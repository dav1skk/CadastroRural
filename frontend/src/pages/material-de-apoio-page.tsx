import { CollapsibleLinkSections } from "@/components/collapsible-link-sections"
import {
  MATERIAL_PAGE_INSTRUCTION,
  MATERIAL_PAGE_TITLE,
  MATERIAL_SECTIONS,
} from "@/config/material-de-apoio"
import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

export function MaterialDeApoioPage() {
  return (
    <div className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12")}>
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl lg:text-[1.65rem]">
          {MATERIAL_PAGE_TITLE}
        </h1>
      </header>

      <p
        className="mx-auto mt-8 max-w-4xl text-center text-sm font-bold uppercase tracking-wide text-destructive sm:mt-10 sm:text-base"
        role="note"
      >
        {MATERIAL_PAGE_INSTRUCTION}
      </p>

      <div className="mx-auto mt-6 max-w-4xl sm:mt-8">
        <CollapsibleLinkSections
          sections={MATERIAL_SECTIONS}
          listTitle="material-list-title"
          listAriaLabel="Sistemas eletrônicos, consultas auxiliares e manuais"
        />
      </div>
    </div>
  )
}
