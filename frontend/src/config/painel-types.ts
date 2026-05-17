export type PainelFigureItem = {
  id: string
  src: string
  alt: string
  href?: string
}

export type PainelMediaItem = {
  id: string
  label: string
  imageSrc: string
  imageAlt: string
  href: string
}

export type PainelMediaSection = {
  title: string
  video?: {
    label: string
    title: string
    sourceUrl: string
  }
  items: readonly PainelMediaItem[]
}

export type PainelFiguresSection = {
  type: "figures"
  title: string
  bordered?: boolean
  layout?: "stack" | "grid-2"
  figures: readonly PainelFigureItem[]
}

export type PainelDownloadSection = {
  type: "download"
  title: string
  href: string
  bordered?: boolean
}

export type PainelMediaBlockSection = {
  type: "media"
  section: PainelMediaSection
  bordered?: boolean
}

export type PainelMapSection = {
  type: "map"
  instruction: string
  figure: PainelFigureItem
}

export type PainelSection =
  | PainelFiguresSection
  | PainelDownloadSection
  | PainelMediaBlockSection
  | PainelMapSection

export type PainelPageConfig = {
  pageTitle: string
  subtitle?: string
  sections: readonly PainelSection[]
  sourceUrl: string
  sourceLabel?: string
}
