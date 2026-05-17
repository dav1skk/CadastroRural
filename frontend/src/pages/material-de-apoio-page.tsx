import { CollapsibleLinkSections } from "@/components/collapsible-link-sections"
import { InstructionalContentPage } from "@/components/instructional-content-page"
import {
  MATERIAL_PAGE_INSTRUCTION,
  MATERIAL_PAGE_TITLE,
  MATERIAL_SECTIONS,
} from "@/config/material-de-apoio"

export function MaterialDeApoioPage() {
  return (
    <InstructionalContentPage
      title={MATERIAL_PAGE_TITLE}
      instruction={MATERIAL_PAGE_INSTRUCTION}
    >
      <CollapsibleLinkSections
        sections={MATERIAL_SECTIONS}
        listTitle="material-list-title"
        listAriaLabel="Sistemas eletrônicos, consultas auxiliares e manuais"
      />
    </InstructionalContentPage>
  )
}
