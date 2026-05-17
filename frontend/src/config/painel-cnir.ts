import type { PainelPageConfig } from "@/config/painel-types"
import { PAINEL_CNIR_MEDIA } from "@/config/painel-media-shared"

const WIX = "https://static.wixstatic.com/media"

export const PAINEL_CNIR_CONFIG: PainelPageConfig = {
  pageTitle: "Painel do Cadastro Rural Brasileiro — CNIR",
  subtitle:
    "A vinculação entre os cadastros SNCR/INCRA e CAFIR/RFB no CNIR",
  sourceUrl: "https://cadastrorural.wixsite.com/brasil/painel/cnir",
  sourceLabel: "painel CNIR",
  sections: [
    {
      type: "figures",
      title: "Cadastros de imóveis rurais vinculados no CNIR",
      layout: "grid-2",
      figures: [
        {
          id: "tabela",
          src: `${WIX}/858b92_a57e59ac50c645dc8f1a1751de578b1f~mv2.jpg/v1/crop/x_8,y_0,w_437,h_742/fill/w_524,h_890,al_c,lg_1,q_85,enc_avif,quality_auto/cnir.jpg`,
          alt: "Tabela de imóveis vinculados e sem vinculação no CNIR por UF",
        },
        {
          id: "panorama",
          src: `${WIX}/858b92_8e79550442b24b67be88f53edf1e91af~mv2.png/v1/crop/x_0,y_0,w_1536,h_2698/fill/w_902,h_1586,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/panormaCIB.png`,
          alt: "Panorama da regularização de imóveis rurais e vinculação ao CNIR",
        },
      ],
    },
    {
      type: "figures",
      title: "% de vinculação no CNIR por unidade da federação",
      bordered: true,
      figures: [
        {
          id: "grafico",
          src: `${WIX}/858b92_36e5ffe49d7f40ff99d9aad42103b142~mv2.png/v1/crop/x_0,y_10,w_1099,h_485/fill/w_1099,h_485,al_c,q_90,enc_avif,quality_auto/graficocnir2.png`,
          alt: "Gráfico de vinculação no CNIR por UF",
        },
      ],
    },
    {
      type: "media",
      bordered: true,
      section: PAINEL_CNIR_MEDIA,
    },
  ],
}
