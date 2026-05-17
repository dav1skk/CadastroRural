import {
  CapacitacaoBodyText,
  CapacitacaoExternalLink,
  CapacitacaoPageLayout,
  CapacitacaoSection,
} from "@/components/capacitacao/capacitacao-layout"
import { GovPanel, GovPanelHeader, GovPanelTitle } from "@/components/gov-panel"
import {
  CAPACITACAO_INTERNA_INSTRUCTION,
  CAPACITACAO_INTERNA_INTRO,
  CAPACITACAO_INTERNA_ITEMS,
  CAPACITACAO_INTERNA_PAGE_TITLE,
  CAPACITACAO_INTERNA_SECTION_TITLE,
} from "@/config/capacitacao-interna"

export function CapacitacaoInternaPage() {
  return (
    <CapacitacaoPageLayout
      title={CAPACITACAO_INTERNA_PAGE_TITLE}
      instruction={CAPACITACAO_INTERNA_INSTRUCTION}
      contentClassName="max-w-4xl"
    >
      <CapacitacaoBodyText>{CAPACITACAO_INTERNA_INTRO}</CapacitacaoBodyText>

      <CapacitacaoSection title={CAPACITACAO_INTERNA_SECTION_TITLE} bordered>
        <GovPanel>
          <GovPanelHeader>
            <GovPanelTitle>Passos do evento</GovPanelTitle>
          </GovPanelHeader>
          <ol className="divide-y divide-border">
            {CAPACITACAO_INTERNA_ITEMS.map((item, index) => (
              <li
                key={item.id}
                className="flex flex-wrap items-baseline gap-x-2 px-4 py-3 text-sm leading-relaxed sm:text-[0.9375rem]"
              >
                <span className="font-bold text-primary">{index + 1}.</span>
                <span className="font-medium text-foreground">{item.label}</span>
                {item.href ? (
                  <CapacitacaoExternalLink href={item.href}>
                    {item.status ?? "Link"}
                  </CapacitacaoExternalLink>
                ) : (
                  <span className="text-muted-foreground">{item.status}</span>
                )}
              </li>
            ))}
          </ol>
        </GovPanel>
      </CapacitacaoSection>
    </CapacitacaoPageLayout>
  )
}
