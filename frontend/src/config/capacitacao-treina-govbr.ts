export const TREINA_GOVBR_PAGE_TITLE = "Treina gov.br"

export const TREINA_GOVBR_INSTRUCTION =
  "Siga os passos abaixo para criar ou acessar sua conta gov.br nos ambientes de treinamento do SNCR."

export const TREINA_GOVBR_INTRO =
  "Os sistemas de treinamento (por exemplo, DCR e SNCR) utilizam o gov.br para identificação e autenticação. Confira as informações de nome da mãe e data de nascimento cadastradas na sua conta antes de acessar o ambiente."

export const TREINA_GOVBR_TREINAMENTO_URL =
  "https://treinasncr.serpro.gov.br/dcr"

export const TREINA_GOVBR_PASSOS = [
  {
    id: "passo-1",
    title: "Passo 1 — Acesso ao sistema",
    body: "Acesse o sistema de treinamento desejado (exemplo: treinasncr.serpro.gov.br/dcr). Na tela de login, clique no botão «Entrar com gov.br». O gov.br é o serviço oficial de identificação digital para acesso aos serviços públicos on-line.",
    detalhes: [
      "Localize a área «Acesso ao Sistema» na página inicial do ambiente de treinamento.",
      "Selecione «Entrar com gov.br» (não use login próprio do sistema, quando disponível apenas o gov.br).",
      "Informe seu CPF na página do gov.br e, em seguida, sua senha, quando solicitada.",
    ],
  },
  {
    id: "passo-2",
    title: "Passo 2 — Criação da conta",
    body: "Se, depois de digitar o CPF, não aparecer o campo de senha, significa que ainda não existe conta gov.br vinculada. Nesse caso, o sistema exibirá a opção «Vamos criar sua conta gov.br».",
    detalhes: [
      "Leia e aceite os Termos de Uso e a Política de Privacidade.",
      "Clique em «Continuar» e preencha os dados solicitados (e-mail, celular etc.).",
      "Conclua o cadastro conforme as orientações na tela; depois volte ao ambiente de treinamento e entre novamente com gov.br.",
    ],
  },
] as const

export const TREINA_GOVBR_LINKS_UTEIS = [
  {
    id: "acesso-govbr",
    label: "Portal e FAQ da conta gov.br",
    href: "https://acesso.gov.br/faq/",
    external: true,
  },
  {
    id: "treina-dcr",
    label: "Ambiente de treinamento — DCR",
    href: "https://treinasncr.serpro.gov.br/dcr/",
    external: true,
  },
  {
    id: "treina-sncr",
    label: "Ambiente de treinamento — SNCR",
    href: "https://treinasncr.serpro.gov.br/sncr-web/",
    external: true,
  },
] as const
