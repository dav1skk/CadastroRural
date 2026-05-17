import type { PainelPageConfig } from "@/config/painel-types"
import { PAINEL_ESTRUTURA_FUNDIARIA_MEDIA } from "@/config/painel-media-shared"

const WIX = "https://static.wixstatic.com/media"

export const PAINEL_ESTRUTURA_RESUMO_CONFIG: PainelPageConfig = {
  pageTitle: "Painel do Cadastro Rural Brasileiro — Estrutura Fundiária",
  subtitle: "Panorama da estrutura fundiária no Brasil (2026)",
  sourceUrl: "https://cadastrorural.wixsite.com/brasil/painel/estrutura-resumo",
  sourceLabel: "painel de estrutura resumo",
  sections: [
    {
      type: "figures",
      title: "Panorama da estrutura fundiária",
      figures: [
        {
          id: "infografico",
          src: `${WIX}/858b92_11816ac167d643dcba33cfc6478bd717~mv2.png/v1/crop/x_0,y_64,w_2752,h_1438/fill/w_1908,h_996,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/infograficoest-fund.png`,
          alt: "Panorama da estrutura fundiária no Brasil — perfil, domínio e destaques por estado",
        },
      ],
    },
    {
      type: "download",
      title:
        "Clique aqui e baixe o relatório analítico da estrutura fundiária brasileira",
      href: "https://incra.sharepoint.com/:w:/s/Estatisticas_cadastrais/IQAhnZeyuRgiQZ-9U5NQfWexAWJvYT5k3bpElCGlDWOeF_c?e=joayBA",
      bordered: true,
    },
    {
      type: "figures",
      title: "Dados por unidade da federação",
      bordered: true,
      figures: [
        {
          id: "tabela",
          src: `${WIX}/858b92_5fe2f7d43d3f4206963d7b8621893a0a~mv2.jpg/v1/crop/x_0,y_0,w_1198,h_613/fill/w_1198,h_613,al_c,q_85,enc_avif,quality_auto/tabelabrasil.jpg`,
          alt: "Tabela da estrutura fundiária brasileira por UF",
        },
      ],
    },
    {
      type: "media",
      bordered: true,
      section: PAINEL_ESTRUTURA_FUNDIARIA_MEDIA,
    },
  ],
}
