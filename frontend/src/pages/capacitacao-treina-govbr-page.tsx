import {
  CapacitacaoApoioPanel,
  CapacitacaoBodyText,
  CapacitacaoExternalLink,
  CapacitacaoPageLayout,
  CapacitacaoSection,
} from "@/components/capacitacao/capacitacao-layout"
import {
  TREINA_GOVBR_INSTRUCTION,
  TREINA_GOVBR_INTRO,
  TREINA_GOVBR_LINKS_UTEIS,
  TREINA_GOVBR_PAGE_TITLE,
  TREINA_GOVBR_PASSOS,
  TREINA_GOVBR_TREINAMENTO_URL,
} from "@/config/capacitacao-treina-govbr"

export function CapacitacaoTreinaGovbrPage() {
  return (
    <CapacitacaoPageLayout
      title={TREINA_GOVBR_PAGE_TITLE}
      instruction={TREINA_GOVBR_INSTRUCTION}
      contentClassName="max-w-3xl"
    >
      <CapacitacaoBodyText>{TREINA_GOVBR_INTRO}</CapacitacaoBodyText>

      <CapacitacaoBodyText>
        Exemplo de ambiente:{" "}
        <CapacitacaoExternalLink href={TREINA_GOVBR_TREINAMENTO_URL}>
          {TREINA_GOVBR_TREINAMENTO_URL}
        </CapacitacaoExternalLink>
      </CapacitacaoBodyText>

      <div className="space-y-8 sm:space-y-10">
        {TREINA_GOVBR_PASSOS.map((passo, index) => (
          <CapacitacaoSection
            key={passo.id}
            title={passo.title}
            bordered={index > 0}
          >
            <CapacitacaoBodyText>{passo.body}</CapacitacaoBodyText>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
              {passo.detalhes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </CapacitacaoSection>
        ))}
      </div>

      <CapacitacaoApoioPanel
        title="Links úteis"
        links={[...TREINA_GOVBR_LINKS_UTEIS]}
      />
    </CapacitacaoPageLayout>
  )
}
