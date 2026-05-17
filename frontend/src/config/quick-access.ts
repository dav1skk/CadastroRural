export type QuickAccessLink = {
  label: string
  href: string
  external?: boolean
}

export type QuickAccessSection = {
  title: string
  links: QuickAccessLink[]
}

export const QUICK_ACCESS_SECTIONS: QuickAccessSection[] = [
  {
    title: "Espaço Cidadão",
    links: [
      {
        label: "DCR — Declaração de Cadastro Rural",
        href: "https://sncr.serpro.gov.br/dcr",
        external: true,
      },
      {
        label: "DCR — Ambiente para teste (Mamae/01.01.1980)",
        href: "https://sncr.serpro.gov.br/dcr",
        external: true,
      },
      {
        label: "Manual — Atualização cadastral",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/atualizacao-e-inclusao-cadastral-de-imovel-rural",
        external: true,
      },
      {
        label: "SNCR — Consulta pública",
        href: "https://consultapublica.incra.gov.br/",
        external: true,
      },
      {
        label: "CCIR 2026 — pagamento e emissão",
        href: "https://sncr.serpro.gov.br/ccir",
        external: true,
      },
      {
        label: "Dúvidas frequentes — Cadastro rural",
        href: "https://www.gov.br/incra/pt-br/canais_atendimento/perguntas-frequentes",
        external: true,
      },
      {
        label: "Normativos sobre cadastro rural",
        href: "/normas-de-cadastro",
      },
      {
        label: "Mercado de Terras — Atlas 2025",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/mercado-de-terras",
        external: true,
      },
      {
        label: "Pedido de acesso à informação",
        href: "https://www.gov.br/incra/pt-br/acesso-a-informacao",
        external: true,
      },
      {
        label: "Denúncia, reclamação, elogio ou sugestão",
        href: "https://falabr.cgu.gov.br/publico/Manifestacao/SelecionarTipoManifestacao.aspx?Tipo=1&orgao=Incra",
        external: true,
      },
    ],
  },
  {
    title: "Espaço Prefeitura Municipal",
    links: [
      {
        label: "Acordos de Adesão vigentes",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-rural/acordos-de-adesao",
        external: true,
      },
      {
        label: "Unidades Municipais de cadastro ativas",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-rural/unidades-municipais",
        external: true,
      },
    ],
  },
]
