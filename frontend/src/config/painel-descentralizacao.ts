import type { PainelPageConfig } from "@/config/painel-types"
import { PAINEL_DESCENTRALIZACAO_MEDIA } from "@/config/painel-media-shared"
import { HERO_MAP } from "@/config/hero-content"

const WIX = "https://static.wixstatic.com/media"

export const PAINEL_DESCENTRALIZACAO_CONFIG: PainelPageConfig = {
  pageTitle:
    "A municipalização do Sistema Nacional de Cadastro Rural — SNCR",
  sourceUrl: "https://cadastrorural.wixsite.com/brasil/painel/municipios",
  sourceLabel: "painel de descentralização",
  sections: [
    {
      type: "map",
      instruction: "Clique no mapa",
      figure: {
        id: "mapa-brasil",
        src: `${WIX}/858b92_b4fbd9cfa28342bfb2895c2d62fe0ea5~mv2.jpg/v1/fill/w_850,h_703,al_c,q_85,enc_avif,quality_auto/brasilgoogle.jpg`,
        alt: "Mapa interativo da municipalização do SNCR no Brasil",
        href: HERO_MAP.href,
      },
    },
    {
      type: "media",
      bordered: true,
      section: {
        ...PAINEL_DESCENTRALIZACAO_MEDIA,
        title:
          "Clique na figura abaixo e acesse algumas mídias sobre a estrutura fundiária",
        video: {
          label: "Assista o vídeo",
          title: "Municipalização do SNCR",
          sourceUrl:
            "https://cadastrorural.wixsite.com/brasil/painel/municipios",
        },
      },
    },
  ],
}
