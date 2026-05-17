export type CapacitacaoModule = {
  id: string
  title: string
  description: string
}

export type CapacitacaoPreparacaoLink = {
  id: string
  href: string
  title: string
  description: string
}

export type CapacitacaoApoioLink = {
  id: string
  label: string
  href: string
  external?: boolean
}

export const CAPACITACAO_UMC_PAGE_TITLE =
  "Capacitação para servidores municipais"

export const CAPACITACAO_UMC_INSTRUCTION =
  "Clique nos links ao lado para acessar a preparação no ambiente virtual."

export const CAPACITACAO_UMC_MODULES: CapacitacaoModule[] = [
  {
    id: "modulo-i",
    title:
      "Módulo I. Inicial (híbrido) — unidade categoria bronze",
    description:
      "Havendo Acordo de Adesão vigente, a municipalidade encaminha formalmente ao INCRA a indicação dos servidores do seu quadro funcional que responderão pela UMC. Esses servidores serão capacitados por técnicos do INCRA, quando obterão acesso às consultas do SNCR, assim como digitação da Declaração de Cadastro Rural — DCR e emissão do CCIR.",
  },
  {
    id: "modulo-ii",
    title:
      "Módulo II. Intermediário (presencial) — unidade categoria prata",
    description:
      "Participando do Módulo Intermediário, os servidores passam a ter seu acesso ampliado para análise de DCR até 4 módulos fiscais.",
  },
  {
    id: "modulo-iii",
    title:
      "Módulo III. Avançado (seminário híbrido) — unidade categoria ouro",
    description:
      "Depois de aprovado nos módulos anteriores, os servidores poderão participar de evento de capacitação para analisar DCR de imóveis com até 15 módulos fiscais. Trata de evento de nivelamento com periodicidade anual em que as normas cadastrais são revistas e os conhecimentos técnicos são ampliados.",
  },
]

export const CAPACITACAO_UMC_PREPARACAO_LINKS: CapacitacaoPreparacaoLink[] = [
  {
    id: "modulo-inicial-parte-01",
    href: "https://cadastrorural.wixsite.com/cursoumc",
    title: "Preparação para o módulo inicial — parte 01",
    description:
      "Ambiente Virtual de Aprendizagem (AVA/UMC): apresentação da plataforma, orientações de acesso e conteúdos introdutórios para a capacitação híbrida do módulo inicial.",
  },
  {
    id: "modulo-inicial-parte-02",
    href: "https://cadastrorural.wixsite.com/cursoumc/conceitos",
    title: "Preparação para o módulo inicial — parte 02",
    description:
      "Continuação da preparação no AVA: conceitos fundamentais de cadastro rural, SNCR e DCR, como base para o módulo presencial e para o uso das ferramentas do sistema.",
  },
]

export const CAPACITACAO_UMC_PROXIMAS_TURMAS = {
  title: "Próximas turmas — presencial",
  items: [
    { label: "Investimento", value: "Gratuito" },
    { label: "Módulo", value: "A definir" },
    { label: "Local", value: "A definir" },
    { label: "Data", value: "A definir" },
  ],
} as const

export const CAPACITACAO_UMC_INSCRICOES = {
  title: "I. Das inscrições",
  steps: [
    {
      id: "passo-1",
      title: "Passo 1",
      body: "Baixe o documento informativo (Ofício Circular ou Edital) disponibilizado pelo INCRA.",
    },
    {
      id: "passo-2",
      title: "Passo 2",
      body: "Realize a inscrição por meio do formulário eletrônico indicado no edital.",
    },
    {
      id: "passo-3",
      title: "Passo 3",
      body: "Envie os documentos em formato .pdf para o e-mail indicado no edital, até às 23h59 do prazo estabelecido. Assunto: \"Novo representante da UMC/(informe o nome do município)\". Documentos: Portaria ou Decreto de designação; cópia de documento de identidade, CPF e comprovante de residência; declaração de vínculo com a Prefeitura; Termo de Declaração de Concordância e Veracidade (modelos disponíveis no edital — clique aqui quando publicado).",
    },
    {
      id: "passo-4",
      title: "Passo 4",
      body: "Cadastre-se previamente no SEI/INCRA, quando exigido. Quem ainda não possui cadastro deve seguir as orientações do edital.",
    },
    {
      id: "passo-5",
      title: "Passo 5",
      body: "Conclua a preparação teórica no Ambiente Virtual de Aprendizagem (AVA/UMC) pelo link indicado no edital ou nas imagens ao lado.",
    },
  ],
} as const

export const CAPACITACAO_UMC_PARTICIPACAO = {
  title: "II. Da participação no evento presencial",
  steps: [
    {
      id: "passo-6",
      title: "Passo 6",
      body: "Acesso ao local do evento. Recomenda-se chegar com antecedência, preferencialmente no dia anterior, quando o deslocamento for longo.",
    },
    {
      id: "passo-7",
      title: "Passo 7",
      body: "Durante o evento:",
      subitems: [
        "Não é permitido o uso de telefone celular no interior da sala de aula.",
        "No primeiro dia haverá prova de conhecimentos com base no conteúdo do AVA/UMC.",
        "Recomenda-se levar caneca, caderno e caneta de uso pessoal.",
        "Serão realizadas avaliações práticas e teóricas.",
        "Comprovante de deslocamento ou declaração de comparecimento poderá ser solicitado conforme orientação do edital.",
      ],
    },
  ],
} as const

export const CAPACITACAO_UMC_POS_EVENTO = {
  title: "III. Do pós-evento",
  sections: [
    {
      id: "certificacao",
      title: "Certificação",
      body: "O certificado será enviado em até 30 dias após o evento, conforme frequência e desempenho.",
    },
    {
      id: "acesso",
      title: "Acesso ao sistema",
      body: "Para concessão de acesso ao SNCR: ausência de falta grave, frequência mínima de 80% e nota igual ou superior a 70%. O acesso será concedido em até 30 dias após o evento.",
    },
  ],
  apoioTitle: "Material de apoio",
  apoioLinks: [
    {
      id: "faq",
      label: "perguntas frequentes",
      href: "https://www.gov.br/incra/pt-br/canais_atendimento/perguntas-frequentes",
      external: true,
    },
    {
      id: "servicos",
      label: "serviços disponibilizados",
      href: "/servicos-de-cadastro",
    },
    {
      id: "normativos",
      label: "normativos de cadastro rural",
      href: "/normas-de-cadastro",
    },
    {
      id: "manuais",
      label: "sistemas e manuais de cadastro rural",
      href: "/material-de-apoio",
    },
  ] satisfies CapacitacaoApoioLink[],
} as const
