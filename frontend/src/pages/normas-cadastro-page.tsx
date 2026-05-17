import { CollapsibleLinkSections } from "@/components/collapsible-link-sections"
import { InstructionalContentPage } from "@/components/instructional-content-page"
import {
  NORMAS_PAGE_INSTRUCTION,
  NORMAS_PAGE_TITLE,
  NORMAS_SECTIONS,
} from "@/config/normas-cadastro"

export function NormasCadastroPage() {
  return (
    <InstructionalContentPage
      title={NORMAS_PAGE_TITLE}
      instruction={NORMAS_PAGE_INSTRUCTION}
    >
      <CollapsibleLinkSections
        sections={NORMAS_SECTIONS}
        listTitle="normas-list-title"
        listAriaLabel="Coletânia de normas e orientações sobre cadastro rural"
      />
    </InstructionalContentPage>
  )
}
