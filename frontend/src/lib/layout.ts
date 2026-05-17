/** Largura máxima do conteúdo do site (equivalente a `max-w-7xl` = 80rem). */
export const SITE_MAX_WIDTH_REM = 80

/** Hero: 60% da largura original do site (48rem). */
export const HERO_MAX_WIDTH_REM = SITE_MAX_WIDTH_REM * 0.6

export const siteContainerClassName =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"

/** Faixa de 60% centralizada na página (hero, etc.). */
export const centeredContentWidthClassName =
  "mx-auto min-w-0 w-full max-w-[min(100%,var(--hero-max-width))]"

/** Conteúdo do header em largura total (alinhado à gov bar). */
export const headerContentWidthClassName =
  "w-full min-w-0 px-4 sm:px-6 lg:px-8"

/** Hero na home: 60% alinhado à coluna principal em telas grandes. */
export const heroContentWidthClassName =
  `${centeredContentWidthClassName} lg:mx-0 lg:max-w-[var(--hero-max-width)]`

export const heroContainerClassName =
  `${heroContentWidthClassName} text-center`
