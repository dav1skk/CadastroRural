import {
  CapacitacaoApoioPanel,
  CapacitacaoBodyText,
  CapacitacaoExternalLink,
  CapacitacaoPageLayout,
  CapacitacaoSection,
  CapacitacaoTwoColumnLayout,
} from "@/components/capacitacao/capacitacao-layout"
import { CapacitacaoPreparacaoLinkCard } from "@/components/capacitacao-preparacao-link-card"
import {
  CAPACITACAO_PTC_APOIO_LINKS,
  CAPACITACAO_PTC_INTRO_PARAGRAPHS,
  CAPACITACAO_PTC_INSTRUCTION,
  CAPACITACAO_PTC_PAGE_TITLE,
  CAPACITACAO_PTC_PREPARACAO_LINKS,
  CAPACITACAO_PTC_SECTION_TITLE,
  CAPACITACAO_PTC_TREINAMENTO_URL,
} from "@/config/capacitacao-conveniados-ptc"

export function CapacitacaoConveniadosPtcPage() {
  return (
    <CapacitacaoPageLayout
      title={CAPACITACAO_PTC_PAGE_TITLE}
      instruction={CAPACITACAO_PTC_INSTRUCTION}
    >
      <CapacitacaoTwoColumnLayout
        asideLabel="Preparação para o módulo inicial"
        main={
          <>
            <CapacitacaoSection title={CAPACITACAO_PTC_SECTION_TITLE}>
              {CAPACITACAO_PTC_INTRO_PARAGRAPHS.map((paragraph) => (
                <CapacitacaoBodyText key={paragraph.slice(0, 40)}>
                  {paragraph}
                </CapacitacaoBodyText>
              ))}
              <CapacitacaoBodyText>
                Ambiente para treinamento:{" "}
                <CapacitacaoExternalLink href={CAPACITACAO_PTC_TREINAMENTO_URL}>
                  {CAPACITACAO_PTC_TREINAMENTO_URL}
                </CapacitacaoExternalLink>
              </CapacitacaoBodyText>
            </CapacitacaoSection>

            <CapacitacaoApoioPanel
              title="Material de apoio"
              links={CAPACITACAO_PTC_APOIO_LINKS}
            />
          </>
        }
        aside={
          <>
            {CAPACITACAO_PTC_PREPARACAO_LINKS.map((link) => (
              <CapacitacaoPreparacaoLinkCard key={link.id} link={link} />
            ))}
          </>
        }
      />
    </CapacitacaoPageLayout>
  )
}
