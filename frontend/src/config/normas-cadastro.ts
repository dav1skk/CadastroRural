import type { CollapsibleSection, ContentLink } from "@/config/content-links"
import {
  INCRA_ACORDOS_ADESAO_URL,
  INCRA_CADASTRO_URL,
  INCRA_CNIR_URL,
  INCRA_LEGISLACAO,
  INCRA_SERVICOS_IMOVEL_URL,
  SNCR_API_URL,
  SISATOS_URL,
  incraLegPdf,
} from "@/config/content-links"

const ext = (label: string, href: string): ContentLink => ({
  label,
  href,
  external: true,
})

export const NORMAS_PAGE_TITLE = "Coletânia de normas e orientações"

export const NORMAS_PAGE_INSTRUCTION =
  "Clique em cada item de interesse para maiores informações (são links)."

export const NORMAS_SECTIONS: CollapsibleSection[] = [
  {
    id: 1,
    title:
      "Cadastramento Rural no Sistema Nacional de Cadastro Rural - SNCR",
    links: [
      ext(
        "Procedimentos para atualização cadastral (Instrução Normativa INCRA nº 82/2015)",
        incraLegPdf("in_82_2015.pdf"),
      ),
      ext(
        "Cadastramento de áreas inferiores à Fração Mínima de Parcelamento (Nota Técnica INCRA nº 05/2014)",
        `${INCRA_LEGISLACAO}/nota-tecnica`,
      ),
      ext(
        "Último recadastramento geral obrigatório - 1992 (Instrução Especial INCRA nº 45/1992)",
        incraLegPdf("ie_45_1992.pdf"),
      ),
      ext(
        "Índices de produtividade (Instrução Normativa INCRA nº 11/2003)",
        incraLegPdf("in_11_2003.pdf"),
      ),
      ext(
        "Preenchimento da declaração pelo DCR (Ofício Circular INCRA/DFC nº 1616/2021)",
        INCRA_CADASTRO_URL,
      ),
      ext(
        "Anexação obrigatória de documentos comprobatórios (Portaria INCRA nº 1.374/2019)",
        SISATOS_URL,
      ),
      ext(
        "Critérios de atendimento prioritário (Portaria INCRA 26/2019)",
        SISATOS_URL,
      ),
    ],
  },
  {
    id: 2,
    title:
      "Cadastramento Rural Temático no Sistema Nacional de Cadastro Rural - SNCR",
    links: [
      ext(
        "Atualização cadastral de imóveis rurais objeto de certificação (Norma de Execução INCRA/DF nº 92/2010)",
        incraLegPdf("ne_92_2010.pdf"),
      ),
      ext(
        "Atualização cadastral das comunidades remanescentes de quilombos (Norma de Execução INCRA/DF nº 01/2017)",
        `${INCRA_LEGISLACAO}/norma-execucao`,
      ),
      ext(
        "Atualização cadastral de imóveis rurais objeto de regularização fundiária (Ofício Circular INCRA/DFC nº 1152/2021)",
        INCRA_CADASTRO_URL,
      ),
      ext(
        "Cadastro de posses por simples ocupação em glebas públicas federais na Amazônia Legal (Portaria Conjunta INCRA/SRFA nº 01/2017) - Revogada",
        SISATOS_URL,
      ),
      ext(
        "Recadastramento dos imóveis rurais localizados na Amazônia Legal (Instrução Normativa INCRA nº 44/2008)",
        incraLegPdf("in_44_2008.pdf"),
      ),
      ext(
        "Rotina para cadastramento dos projetos de assentamento e seus lotes (Ofício Circular INCRA/DF nº 229/2021)",
        INCRA_CADASTRO_URL,
      ),
    ],
  },
  {
    id: 3,
    title: "Aquisição e/ou arrendamento de imóvel rural por estrangeiros",
    links: [
      ext(
        "Autorização e atualização cadastral envolvendo estrangeiros (Instrução Normativa INCRA nº 88/2017)",
        incraLegPdf("in_88_2017.pdf"),
      ),
      ext(
        "Alteração da IN INCRA nº 88/2017 (Resolução INCRA/CD nº 51/2018)",
        `${INCRA_LEGISLACAO}/resolucao`,
      ),
      ext(
        "Situações jurídicas aperfeiçoadas antes do Parecer AGU/LA nº 01/2010 (Portaria Interministerial AGU/MDA nº 02/2014)",
        SISATOS_URL,
      ),
      ext(
        "Procedimento para processar requerimentos de autorização para estrangeiros (Instrução Normativa Conjunta MDA/Mapa/MDIC/MTUR nº 01/2012)",
        `${INCRA_LEGISLACAO}/instrucao-normativa-conjunta`,
      ),
      ext(
        "Manual sobre aquisição/arrendamento por Estrangeiro",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext(
        "Atualização cadastral no SNCR de imóveis adquiridos ou arrendados por estrangeiros, em descompasso legal",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
    ],
  },
  {
    id: 4,
    title: "Índices Básicos INCRA",
    links: [
      ext(
        "Instrução Especial 05/2022 - Índices Básicos 2022",
        incraLegPdf("ie_05_2022.pdf"),
      ),
    ],
  },
  {
    id: 5,
    title:
      "Vinculação, desvinculação e pedido de novo CIB no Cadastro Nacional de Imóveis Rurais - CNIR",
    links: [
      ext(
        "Formas de acesso dos cidadãos ao CNIR (Nota Técnica nº 01/2017)",
        INCRA_CNIR_URL,
      ),
      ext(
        "Cadastros envolvendo usufruto (Nota Técnica Conjunta RFB/INCRA nº 04/2020)",
        INCRA_CNIR_URL,
      ),
      ext(
        "Forma e prazos para vinculação dos cadastros no CNIR (Instrução Normativa Conjunta RFB/INCRA nº 1968/2020)",
        "https://www.in.gov.br/web/dou/-/instrucao-normativa-conjunta-n-1.968-de-30-de-dezembro-de-2020-283404186",
      ),
      ext(
        "Formas de vinculação no CNIR (Nota Técnica Conjunta Cocad/DFC nº 06/2020)",
        INCRA_CNIR_URL,
      ),
    ],
  },
  {
    id: 6,
    title: "Outros normativos sobre o CNIR",
    links: [
      ext(
        "Classificação de dados, armazenamento e consultas no CNIR (Nota Técnica nº 02/2017)",
        INCRA_CNIR_URL,
      ),
      ext(
        "Composição do CNIR (Nota Técnica nº 03/2017)",
        INCRA_CNIR_URL,
      ),
      ext(
        "Reuniões com a sociedade civil sobre CNIR (Nota Técnica Conjunta Cocad/DFC nº 05/2020)",
        INCRA_CNIR_URL,
      ),
      ext(
        "Base de dados do CNIR e cadastros temáticos (Resolução nº 01/2019)",
        INCRA_CNIR_URL,
      ),
      ext(
        "Designação dos membros do Comitê Técnico do CNIR (Portaria Conjunta RFB/INCRA nº 620/2016)",
        SISATOS_URL,
      ),
    ],
  },
  {
    id: 7,
    title: "Descaracterização de imóvel rural",
    links: [
      ext(
        "Nota Técnica INCRA nº 02/2016 (Parcelamento de solo pós revogação da Instrução INCRA nº 17B/1980)",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext(
        "Informação INCRA/DFC/NEEC nº 18/2016 (Nota Técnica INCRA nº 02/2016)",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext(
        "Orientação quanto aos pedidos de certidão de regularidade de parcelamento rural em Minas Gerais",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext(
        "Ofício Circular SR(MG) nº 878/2020 (Procedimentos para descaracterizar imóvel rural em zona urbana em Minas Gerais)",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext(
        "Provimento Conjunto TJMG/CGJMG nº 93/2020 (Código de Normas)",
        "https://www.tjmg.jus.br/portal-tjmg/processos/codigo-de-normas-e-procedimentos-do-foro-judicial/",
      ),
      ext(
        "Quadro comparativo Provimento Conjunto TJMG nº 260/CGJ/2013 e 90/2020",
        "https://www.tjmg.jus.br/portal-tjmg/processos/codigo-de-normas-e-procedimentos-do-foro-judicial/",
      ),
    ],
  },
  {
    id: 8,
    title: "Parcerias",
    links: [
      ext(
        "Troca de informações entre INCRA e Cartórios (Portaria INCRA nº 1252/22)",
        "https://www.in.gov.br/web/dou/-/portaria-n-1.252-de-15-de-junho-de-2022-419212271",
      ),
      ext("Prefeituras (Acordo de Adesão - UMC)", INCRA_ACORDOS_ADESAO_URL),
      ext(
        "Sindicatos (Acordo de Cooperação Técnica - Sala da Cidadania Digital)",
        "https://www.gov.br/incra/pt-br/canais_atendimento/unidades-do-incra",
      ),
    ],
  },
  {
    id: 9,
    title:
      "Taxa cadastral do Certificado de Cadastro de Imóveis Rurais - CCIR",
    links: [
      ext(
        "Emissão massiva 2026: Edital INCRA nº 382/2026 (publicado no DOU)",
        "https://www.in.gov.br/consulta/-/buscar/dou?q=edital+incra+382+2026",
      ),
      ext(
        "Isenção da Taxa de Serviços Cadastrais (Memo Circular DFC nº 54/2017)",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext(
        "Correção anual da Taxa de Serviços - 2022 (Ofício Circular DF 01/2022)",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
    ],
  },
  {
    id: 10,
    title: "Certidão de Contagem de Tempo para INSS",
    note: 'O Incra não emite mais a certidão. Atente-se aos itens "c", "d" e "e".',
    links: [
      ext(
        "Ofício Circular nº 995/2020/SR(MG)F-1 - Minas Gerais",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext("Ofício Circular 584/2024/DF/SEDE/INCRA", INCRA_SERVICOS_IMOVEL_URL),
      ext(
        "Passo a passo - Aposentadoria Rural por idade",
        "https://www.gov.br/inss/pt-br/direitos-e-deveres/aposentadorias/aposentadoria-por-idade-do-trabalhador-rural",
      ),
      ext(
        "Tutorial requerimento no INSS - Rural",
        "https://www.gov.br/pt-br/servicos/solicitar-aposentadoria-por-idade-para-trabalhador-rural",
      ),
      ext(
        "Autodeclaração do Segurado Especial Rural",
        "https://www.gov.br/inss/pt-br/direitos-e-deveres/aposentadorias/aposentadoria-por-idade-do-trabalhador-rural",
      ),
    ],
  },
  {
    id: 11,
    title: "SNCR",
    links: [
      ext("Últimas evoluções", INCRA_CADASTRO_URL),
      ext("Outros órgãos públicos (API-SNCR)", SNCR_API_URL),
      ext(
        "Usuários do SNCR (Portaria INCRA nº 1.249/2022)",
        SISATOS_URL,
      ),
    ],
  },
  {
    id: 12,
    title: "Orientações gerais",
    links: [
      ext(
        "Vedação de fornecimento de dados pessoais a terceiros (Orientação Jurídica Normativa PFE/INCRA nº 05/2021)",
        SISATOS_URL,
      ),
      ext(
        "Inibição de imóvel rural por prazo determinado (Nota PFE/INCRA nº 09/2020)",
        SISATOS_URL,
      ),
      ext(
        "Exigências documentais para protocolo no INCRA e recebimento de documentos em meio digital",
        INCRA_SERVICOS_IMOVEL_URL,
      ),
      ext(
        "Implantação do Protocolo Digital no Incra para cadastramento de Usuário Externo no SEI-INCRA",
        "https://www.gov.br/incra/pt-br/acesso-a-informacao",
      ),
      ext(
        "Composição e atribuições da equipe de Cadastro Rural em Minas Gerais (Nota Informativa INCRA/MG/F nº 3201/2022)",
        "https://www.gov.br/incra/pt-br/canais_atendimento/unidades-do-incra",
      ),
    ],
  },
]
