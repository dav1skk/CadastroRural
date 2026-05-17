import type { CollapsibleSection, ContentLink } from "@/config/content-links"

const ext = (label: string, href: string): ContentLink => ({
  label,
  href,
  external: true,
})

export const MATERIAL_PAGE_TITLE = "Sistemas eletrônicos e manuais auxiliares"

export const MATERIAL_PAGE_INSTRUCTION =
  "Clique em cada item para acessar o sistema ou a documentação (são links)."

export const MATERIAL_TREINAMENTO_NOTE =
  "Confirme as informações de nome da mãe e nascimento na conta gov.br ao acessar os ambientes de treinamento."

export const MATERIAL_SECTIONS: CollapsibleSection[] = [
  {
    id: 1,
    title: "Sistemas de produção",
    links: [
      ext(
        "Sistema Nacional de Cadastro Rural — SNCR",
        "https://sncr.serpro.gov.br/sncr-web/",
      ),
      ext(
        "Pagamento e emissão do CCIR",
        "https://sncr.serpro.gov.br/ccir",
      ),
      ext(
        "Conferência de autenticidade do CCIR",
        "https://sncr.serpro.gov.br/ccir/consulta",
      ),
      ext(
        "Declaração de Cadastro Rural — DCR",
        "https://sncr.serpro.gov.br/dcr/",
      ),
      ext(
        "Cadastro Nacional de Imóveis Rurais — CNIR",
        "https://cnir.serpro.gov.br/",
      ),
      ext(
        "Plataforma de Governança Territorial — PGT",
        "https://pro-pgt-incra.estaleiro.serpro.gov.br/pgt/home",
      ),
    ],
  },
  {
    id: 2,
    title: "Sistemas para treinamento",
    note: MATERIAL_TREINAMENTO_NOTE,
    links: [
      ext(
        "SNCR TREINA (nome da mãe: MAMAE, nascimento: 01/01/1980)",
        "https://treinasncr.serpro.gov.br/sncr-web/",
      ),
      ext(
        "DCR TREINA (nome da mãe: MAMAE, nascimento: 01/01/1980)",
        "https://treinasncr.serpro.gov.br/dcr/",
      ),
      ext(
        "Gerador de códigos (CPF, CNPJ, etc.)",
        "https://www.geradordecpf.org/",
      ),
    ],
  },
  {
    id: 3,
    title: "Sistemas para consultas auxiliares",
    links: [
      ext(
        "Índices Básicos (FMP, MF, etc.)",
        "https://www.gov.br/pt-br/servicos/consultar-indices-basicos",
      ),
      ext(
        "Sala da Cidadania Digital (beneficiários da Reforma Agrária)",
        "https://saladacidadania.incra.gov.br/",
      ),
      ext(
        "Consulta de processos no SEI/INCRA (somente processos públicos)",
        "https://sei.incra.gov.br/sei/modulos/pesquisa/md_pesq_processo_pesquisar.php?acao_externa=protocolo_pesquisar&acao_origem_externa=protocolo_pesquisar&id_orgao_acesso_externo=0",
      ),
      ext(
        "SNCI/INCRA (certificação de imóveis até 22/11/2013)",
        "https://certificacao.incra.gov.br/Certifica/",
      ),
      ext(
        "SIGEF/INCRA (certificação de parcelas a partir de 23/11/2013)",
        "https://sigef.incra.gov.br/",
      ),
      ext(
        "CAFIR/RFB (consulta por CIB)",
        "https://coletorcafir.receita.fazenda.gov.br/coletor/",
      ),
      ext(
        "CAFIR/RFB (consulta histórico do CIB)",
        "https://servicos.receita.federal.gov.br/servico/certidoes/#/home/cib",
      ),
      ext("CPF", "https://www.gov.br/pt-br/servicos/consultar-cpf"),
      ext(
        "CNPJ",
        "https://www.gov.br/pt-br/servicos/consultar-cadastro-nacional-de-pessoas-juridicas",
      ),
      ext(
        "SINTER/RFB",
        "https://www.gov.br/pt-br/servicos/consultar-imoveis-no-sinter",
      ),
      ext("Mapa ONR", "https://mapa.onr.org.br/"),
      ext(
        "Registro eletrônico (certidão, matrícula, pesquisa, protocolo, etc.)",
        "https://registradores.onr.org.br/",
      ),
      ext("CAR", "https://www.car.gov.br/"),
    ],
  },
  {
    id: 4,
    title: "Manuais para baixar",
    links: [
      ext(
        "Manual de Preenchimento da Declaração de Cadastro",
        "https://sncr.serpro.gov.br/dcr/public/downloads/ajuda/manualDCR.pdf",
      ),
      ext(
        "Manual de Cadastro Rural — 2009 — Módulo Recepção",
        "https://aa5dc839-e7e7-4717-9f93-5f9356560709.filesusr.com/ugd/858b92_b068551ffbc64d408b7cfc4c7909d15b.pdf",
      ),
      ext(
        "Manual de Cadastro Rural — 2009 — Módulo Análise",
        "https://aa5dc839-e7e7-4717-9f93-5f9356560709.filesusr.com/ugd/858b92_22beb976bd4b45bead1eac3dfc7fded2.pdf",
      ),
      ext(
        "Manual do SNCR — Módulo usuário do sistema",
        "https://aa5dc839-e7e7-4717-9f93-5f9356560709.filesusr.com/ugd/858b92_6cf92568530843b493a682f779feb4e9.pdf",
      ),
      ext(
        "Manual da PGT/INCRA",
        "https://www.cnabrasil.org.br/assets/images/Comunicado-Tecnico_Plataforma-Governanca-Territorial.pdf",
      ),
      ext("Manual da conta GOV.BR", "https://acesso.gov.br/faq/"),
      ext(
        "Manual do CNIR/INCRA/RFB",
        "https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/manualcnir.pdf",
      ),
      ext(
        "Manual do SEI/INCRA (usuário externo)",
        "https://www.gov.br/ancine/pt-br/assuntos/outros-sistemas/ManualUsuarioExternoSEIANCINE.pdf",
      ),
      ext(
        "Manual do SIGEF/INCRA",
        "https://sigef.incra.gov.br/documentos/manual/",
      ),
      ext(
        "Manual de Redação Oficial",
        "http://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica/manual-de-redacao.pdf",
      ),
      ext(
        "Manual do CAR/MMA",
        "https://www.car.gov.br/manuais/Manual_Central_do_Proprietario_Possuidor.pdf",
      ),
      ext(
        "Manual da DITR",
        "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/itr/perguntas-e-respostas-itr-2023.pdf/@@download/file",
      ),
      ext(
        "Manual do Convênio ITR — Municípios/RFB",
        "https://www.enat.receita.economia.gov.br/pt-br/area_nacional/areas_interesse/portal-itr-1/",
      ),
    ],
  },
  {
    id: 5,
    title: "Outros sites",
    links: [
      ext("INCRA", "https://www.gov.br/incra/pt-br"),
      ext(
        "Certidão de matrícula online",
        "https://www.registrodeimoveis.org.br/",
      ),
      ext(
        "Calcula DV",
        "https://cadcobol.com.br/calcula_cpf_cnpj_caepf.htm",
      ),
      ext(
        "CAFIR/RFB (baixa .csv contendo todos os CIBs)",
        "https://dados.gov.br/dados/conjuntos-dados/cadastro-de-imoveis-rurais---cafir",
      ),
      ext(
        "Valores de Terra Nua — VTN/RFB",
        "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos/vtn",
      ),
      ext(
        "Mercado de Terra — RAMT/INCRA",
        "https://simet.incra.gov.br/#/relatorio-valores-terra-municipio",
      ),
      ext(
        "Consulta pública do SNCR",
        "https://consultapublica.incra.gov.br/",
      ),
    ],
  },
]
