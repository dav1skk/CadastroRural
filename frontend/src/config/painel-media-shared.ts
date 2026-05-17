const WIX_MEDIA = "https://static.wixstatic.com/media"

export const PAINEL_PODCAST_IMAGE =
  `${WIX_MEDIA}/858b92_db067e6073a8402f89a98449507f3d94~mv2.png/v1/fill/w_406,h_228,al_c,lg_1,q_85,enc_avif,quality_auto/podcast.png`

export const PAINEL_MEDIA_LINKS = {
  podcast:
    "https://incra.sharepoint.com/:u:/s/Estatisticas_cadastrais/IQBA0Vdngz6RTIRKXazF_vLkAQxXyErl3JhTi-zj4Eo5nig?e=DgeQkn",
  panorama:
    "https://incra.sharepoint.com/:b:/s/Estatisticas_cadastrais/IQBO5HAE7SDqSprBZdBP6YoWAQOgeh3vOFHEN01RKdW6NDs?e=hkmgvJ",
  cenario:
    "https://incra.sharepoint.com/:b:/s/Estatisticas_cadastrais/IQCeZjnHxsoHRpvToajHEKivAUaFm3F5TPY42muBI5eQBLk?e=wpc5dX",
} as const

export const PAINEL_PANORAMA_IMAGE =
  `${WIX_MEDIA}/858b92_6ea32b77cc4143a7b5ed4e5cbdf280af~mv2.jpg/v1/fill/w_304,h_170,al_c,lg_1,q_80,enc_avif,quality_auto/panorama.jpg`

export const PAINEL_CENARIO_IMAGE =
  `${WIX_MEDIA}/858b92_1c2b1fed3b4f427393c4f9b219349f80~mv2.jpg/v1/fill/w_304,h_170,al_c,lg_1,q_80,enc_avif,quality_auto/64porcento.jpg`

export const PAINEL_ESTRUTURA_FUNDIARIA_MEDIA = {
  title:
    "Clique na figura abaixo e acesse algumas mídias sobre a estrutura fundiária",
  video: {
    label: "Assista o vídeo",
    title: "Estrutura fundiária no Brasil",
    sourceUrl: "https://cadastrorural.wixsite.com/brasil/painel/estrutura-resumo",
  },
  items: [
    {
      id: "podcast",
      label: "Ouça o podcast",
      imageSrc: PAINEL_PODCAST_IMAGE,
      imageAlt: "Podcast sobre a estrutura fundiária",
      href: PAINEL_MEDIA_LINKS.podcast,
    },
    {
      id: "radiografia",
      label: "Radiografia do cadastro",
      imageSrc:
        `${WIX_MEDIA}/858b92_ee68dc061907459c8816545eefa66dc0~mv2.jpg/v1/fill/w_302,h_166,al_c,q_80,enc_avif,quality_auto/radiografia.jpg`,
      imageAlt: "A Radiografia do Cadastro Rural Brasileiro",
      href:
        "https://incra.sharepoint.com/:b:/s/Estatisticas_cadastrais/IQD8qkeScy3tRbfshNY4BoAOAWBaObCfFsM4vscFXjjkFLQ?e=V7WVHG",
    },
    {
      id: "totais",
      label: "Totais por município",
      imageSrc:
        `${WIX_MEDIA}/858b92_8e80cc8110a246cab0558c38f18ae593~mv2.jpg/v1/fill/w_302,h_166,al_c,lg_1,q_80,enc_avif,quality_auto/relat.jpg`,
      imageAlt: "Totais por município",
      href:
        "https://incra.sharepoint.com/:x:/s/Estatisticas_cadastrais/IQAuEW-8I8OFTYsbthh7xZ_cAeNGSqk0cgVPMa5ej1IfEuA?e=uuNol4",
    },
  ],
} as const

export const PAINEL_CNIR_MEDIA = {
  title:
    "Clique na figura abaixo e acesse algumas mídias sobre a estrutura fundiária",
  video: {
    label: "Assista o vídeo",
    title: "Vinculação SNCR/INCRA e CAFIR/RFB no CNIR",
    sourceUrl: "https://cadastrorural.wixsite.com/brasil/painel/cnir",
  },
  items: [
    {
      id: "podcast",
      label: "Ouça o podcast",
      imageSrc: PAINEL_PODCAST_IMAGE,
      imageAlt: "Podcast sobre o CNIR",
      href: PAINEL_MEDIA_LINKS.podcast,
    },
    {
      id: "panorama",
      label: "Panorama",
      imageSrc: PAINEL_PANORAMA_IMAGE,
      imageAlt: "Panorama da regularização de imóveis rurais no Brasil",
      href: PAINEL_MEDIA_LINKS.panorama,
    },
    {
      id: "cenario",
      label: "Cenário",
      imageSrc: PAINEL_CENARIO_IMAGE,
      imageAlt: "Cenário do IR no Brasil — 64% de vinculação",
      href: PAINEL_MEDIA_LINKS.cenario,
    },
  ],
} as const

export const PAINEL_DESCENTRALIZACAO_MEDIA = PAINEL_CNIR_MEDIA

export const PAINEL_AUDITORIA_MEDIA = {
  title: "Clique e acesse abaixo algumas mídias digitais sobre a DCR",
  video: {
    label: "Assista o vídeo",
    title: "Auditoria das DCR processadas automaticamente",
    sourceUrl: "https://cadastrorural.wixsite.com/brasil/painel/auditoria",
  },
  items: [
    {
      id: "podcast",
      label: "Ouça o podcast",
      imageSrc: PAINEL_PODCAST_IMAGE,
      imageAlt: "Podcast sobre a DCR",
      href:
        "https://incra.sharepoint.com/:b:/s/Estatisticas_cadastrais/IQBS-a7knP1RSK3oKgtRuewfAezNNKzg8l47F8pJOFztkHc?e=y3Drc7",
    },
    {
      id: "raio-x",
      label: "Raio-X do cadastro",
      imageSrc:
        `${WIX_MEDIA}/858b92_d8762076186844c08b7106745cc0624b~mv2.jpg/v1/fill/w_334,h_195,al_c,lg_1,q_80,enc_avif,quality_auto/RAIOX.jpg`,
      imageAlt: "Raio-X do Cadastro Rural — resultados do projeto-piloto",
      href:
        "https://incra.sharepoint.com/:b:/s/Estatisticas_cadastrais/IQBS-a7knP1RSK3oKgtRuewfAezNNKzg8l47F8pJOFztkHc?e=y3Drc7",
    },
  ],
} as const
