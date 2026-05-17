import {
  CapacitacaoApoioPanel,
  CapacitacaoInfoPanel,
  CapacitacaoModuleBlock,
  CapacitacaoPageLayout,
  CapacitacaoPreparacaoAside,
  CapacitacaoSection,
  CapacitacaoStepBlock,
  CapacitacaoTwoColumnLayout,
} from "@/components/capacitacao/capacitacao-layout"
import {
  CAPACITACAO_UMC_INSCRICOES,
  CAPACITACAO_UMC_INSTRUCTION,
  CAPACITACAO_UMC_MODULES,
  CAPACITACAO_UMC_PAGE_TITLE,
  CAPACITACAO_UMC_PARTICIPACAO,
  CAPACITACAO_UMC_POS_EVENTO,
  CAPACITACAO_UMC_PREPARACAO_LINKS,
  CAPACITACAO_UMC_PROXIMAS_TURMAS,
} from "@/config/capacitacao"

export function CapacitacaoUnidadeMunicipalPage() {
  return (
    <CapacitacaoPageLayout
      title={CAPACITACAO_UMC_PAGE_TITLE}
      instruction={CAPACITACAO_UMC_INSTRUCTION}
    >
      <CapacitacaoTwoColumnLayout
        asideLabel="Preparação para o módulo inicial"
        main={
          <>
            {CAPACITACAO_UMC_MODULES.map((module) => (
              <CapacitacaoModuleBlock
                key={module.id}
                title={module.title}
                description={module.description}
              />
            ))}

            <CapacitacaoInfoPanel
              title={CAPACITACAO_UMC_PROXIMAS_TURMAS.title}
              items={CAPACITACAO_UMC_PROXIMAS_TURMAS.items}
            />

            <CapacitacaoSection
              title={CAPACITACAO_UMC_INSCRICOES.title}
              bordered
            >
              <div className="space-y-4">
                {CAPACITACAO_UMC_INSCRICOES.steps.map((step) => (
                  <CapacitacaoStepBlock
                    key={step.id}
                    title={step.title}
                    body={step.body}
                  />
                ))}
              </div>
            </CapacitacaoSection>

            <CapacitacaoSection
              title={CAPACITACAO_UMC_PARTICIPACAO.title}
              bordered
            >
              <div className="space-y-4">
                {CAPACITACAO_UMC_PARTICIPACAO.steps.map((step) => (
                  <CapacitacaoStepBlock
                    key={step.id}
                    title={step.title}
                    body={step.body}
                    subitems={"subitems" in step ? step.subitems : undefined}
                  />
                ))}
              </div>
            </CapacitacaoSection>

            <CapacitacaoSection
              title={CAPACITACAO_UMC_POS_EVENTO.title}
              bordered
            >
              <div className="space-y-4">
                {CAPACITACAO_UMC_POS_EVENTO.sections.map((section) => (
                  <CapacitacaoStepBlock
                    key={section.id}
                    title={section.title}
                    body={section.body}
                  />
                ))}
              </div>
              <CapacitacaoApoioPanel
                title={CAPACITACAO_UMC_POS_EVENTO.apoioTitle}
                links={CAPACITACAO_UMC_POS_EVENTO.apoioLinks}
              />
            </CapacitacaoSection>
          </>
        }
        aside={<CapacitacaoPreparacaoAside links={CAPACITACAO_UMC_PREPARACAO_LINKS} />}
      />
    </CapacitacaoPageLayout>
  )
}
