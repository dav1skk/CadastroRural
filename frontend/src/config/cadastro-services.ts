import type { CollapsibleSection } from "@/config/content-links"

export type CadastroFeaturedCard = {
  title: string
  description: string
  href: string
  external?: boolean
}

export type CadastroService = CollapsibleSection

export const CADASTRO_PAGE_TITLE =
  "Cadastramento no INCRA e seus serviços"

export const CADASTRO_PAGE_INSTRUCTION =
  "Clique em cada item de interesse para maiores informações (são links)."

export const CADASTRO_FEATURED_CARDS: CadastroFeaturedCard[] = [
  {
    title: "Perguntas frequentes",
    description: "Dúvidas sobre cadastro rural, CCIR, DCR e demais serviços.",
    href: "https://www.gov.br/incra/pt-br/canais_atendimento/perguntas-frequentes",
    external: true,
  },
  {
    title: "Carta de Serviços",
    description: "Compromissos, prazos e canais de atendimento do INCRA.",
    href: "https://www.gov.br/incra/pt-br/acesso-a-informacao/carta-de-servicos",
    external: true,
  },
  {
    title: "Plataforma de Governança Territorial",
    description: "PGT — informações territoriais e governança fundiária.",
    href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria",
    external: true,
  },
]

export const CADASTRO_SERVICES: CadastroService[] = [
  {
    id: 1,
    title: "Cadastramento de imóvel rural",
    links: [
      {
        label: "Manual — Declaração para Cadastro Rural (DCR)",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/atualizacao-e-inclusao-cadastral-de-imovel-rural",
        external: true,
      },
      {
        label: "DCR — Declaração para Cadastro Rural (online)",
        href: "https://sncr.serpro.gov.br/dcr",
        external: true,
      },
      {
        label: "Modelo de declaração",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/atualizacao-e-inclusao-cadastral-de-imovel-rural",
        external: true,
      },
      {
        label: "Conversão de unidades de medida",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
      {
        label: "Índices básicos (ZP, ZTM e outros)",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 2,
    title: "Pagamento da taxa de serviços cadastrais para emissão do CCIR",
    links: [
      {
        label: "Pagamento e emissão do CCIR",
        href: "https://sncr.serpro.gov.br/ccir",
        external: true,
      },
    ],
  },
  {
    id: 3,
    title: "Emissão do Certificado de Cadastro — CCIR",
    links: [
      {
        label: "Emitir CCIR",
        href: "https://sncr.serpro.gov.br/ccir/emissao",
        external: true,
      },
    ],
  },
  {
    id: 4,
    title: "Conferência de autenticidade do CCIR",
    links: [
      {
        label: "Consultar autenticidade do CCIR",
        href: "https://sncr.serpro.gov.br/ccir/consulta",
        external: true,
      },
    ],
  },
  {
    id: 5,
    title: "Cancelamento de cadastro de imóvel rural",
    links: [
      {
        label: "Requerimento",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 6,
    title: "Descaracterização de imóvel rural em zona urbana",
    links: [
      {
        label: "Requerimento",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
      {
        label: "Informações específicas — Minas Gerais",
        href: "https://www.gov.br/incra/pt-br/canais_atendimento/unidades-do-incra",
        external: true,
      },
    ],
  },
  {
    id: 7,
    title:
      "Autorização para desmembrar área inferior à FMP na zona rural (Decreto nº 62.504/68)",
    links: [
      {
        label: "Requerimento",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 8,
    title: "Emissão de certidão de contagem de tempo de cadastro (INSS)",
    links: [
      {
        label: "Preenchimento online",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
      {
        label: "Informações sobre a necessidade da certidão",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-imovel-rural",
        external: true,
      },
      {
        label: "Declaração específica para trabalhador rural",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
      {
        label: "Tutorial",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 9,
    title: "Emissão de certidão negativa de cadastro",
    links: [
      {
        label: "Requerimento",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 10,
    title:
      "Consulta pública da relação de todos os imóveis rurais cadastrados por município e UF",
    links: [
      {
        label: "SNCR — Consulta pública",
        href: "https://consultapublica.incra.gov.br/",
        external: true,
      },
    ],
  },
  {
    id: 11,
    title: "Devolução de taxa cadastral recolhida indevidamente",
    links: [
      {
        label: "Solicitar devolução",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 12,
    title:
      "Autorização para aquisição ou arrendamento de imóvel rural por estrangeiro",
    links: [
      {
        label: "Memorando orientativo",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
      {
        label: "Declaração — controle estrangeiro",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
      {
        label: "Declaração — controle nacional",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 13,
    title:
      "Vinculação e desvinculação de cadastros INCRA/RFB e criação de CIB",
    links: [
      {
        label: "Manual de procedimentos",
        href: "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 14,
    title:
      "Consultar parcelas com georreferenciamento certificado após 22/11/2013",
    links: [
      {
        label: "Consulta de parcelas certificadas",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 15,
    title:
      "Consultar imóveis com georreferenciamento certificado até 22/11/2013",
    links: [
      {
        label: "Consulta de imóveis certificados",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 16,
    title:
      "Lista de profissionais credenciados a georreferenciar (para certificação)",
    links: [
      {
        label: "Profissionais credenciados",
        href: "https://www.gov.br/incra/pt-br/servicos/imovel-rural",
        external: true,
      },
    ],
  },
  {
    id: 17,
    title:
      "Obter coordenadas e arquivos dos imóveis rurais georreferenciados (certificados)",
    links: [
      {
        label: "Obter coordenadas e arquivos",
        href: "https://www.gov.br/pt-br/servicos/obter-coordenadas-e-arquivos-dos-imoveis-rurais-certificados",
        external: true,
      },
    ],
  },
  {
    id: 18,
    title:
      "Solicitar cópia ou acesso a processos administrativos (Usuário Externo)",
    links: [
      {
        label: "Termo de declaração",
        href: "https://www.gov.br/incra/pt-br/acesso-a-informacao",
        external: true,
      },
      {
        label: "Manual do usuário",
        href: "https://www.gov.br/incra/pt-br/acesso-a-informacao",
        external: true,
      },
    ],
  },
]
