import type { PainelPageConfig } from "@/config/painel-types"
import { PAINEL_AUDITORIA_MEDIA } from "@/config/painel-media-shared"

const WIX = "https://static.wixstatic.com/media"

export const PAINEL_AUDITORIA_CONFIG: PainelPageConfig = {
  pageTitle: "Painel do Cadastro Rural Brasileiro — Auditoria",
  subtitle:
    "Auditoria de declarações de cadastro processadas automaticamente",
  sourceUrl: "https://cadastrorural.wixsite.com/brasil/painel/auditoria",
  sourceLabel: "painel de auditoria DCR",
  sections: [
    {
      type: "figures",
      title: "Panorama do processamento de cadastro rural no Brasil (2025)",
      figures: [
        {
          id: "panorama",
          src: `${WIX}/858b92_1579690e0b984fd09e37a2a74b9aff0b~mv2.png/v1/crop/x_0,y_42,w_2752,h_1451/fill/w_1908,h_1006,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed.png`,
          alt: "Panorama nacional e resultados da auditoria piloto das DCR em 2025",
        },
      ],
    },
    {
      type: "download",
      title:
        "Clique aqui e baixe o relatório da auditoria das DCR processadas automaticamente",
      href: "https://incra.sharepoint.com/:b:/s/Estatisticas_cadastrais/IQAGLBZGXRrPT5aqGenqZvF4AU7XIhy87xlKMsZLNbcgvOE?e=aFUjK7",
      bordered: true,
    },
    {
      type: "figures",
      title: "Auditoria do cadastro rural (SNCR): resultados e melhorias",
      bordered: true,
      figures: [
        {
          id: "auditoria-piloto",
          src: `${WIX}/858b92_18bdb9e14b8546bcb0e20306a9cfbb15~mv2.png/v1/crop/x_0,y_42,w_2752,h_1471/fill/w_1856,h_992,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/panoramadcr.png`,
          alt: "Resultados da auditoria piloto das declarações de cadastro rural",
        },
      ],
    },
    {
      type: "media",
      bordered: true,
      section: PAINEL_AUDITORIA_MEDIA,
    },
  ],
}
