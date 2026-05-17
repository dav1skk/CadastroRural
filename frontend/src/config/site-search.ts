import type { CollapsibleSection } from "@/config/content-links"
import {
  CADASTRO_FEATURED_CARDS,
  CADASTRO_SERVICES,
} from "@/config/cadastro-services"
import {
  CAPACITACAO_UMC_PAGE_TITLE,
  CAPACITACAO_UMC_PREPARACAO_LINKS,
  CAPACITACAO_UMC_POS_EVENTO,
} from "@/config/capacitacao"
import { CAPACITACAO_PTC_PAGE_TITLE } from "@/config/capacitacao-conveniados-ptc"
import { CAPACITACAO_INTERNA_PAGE_TITLE } from "@/config/capacitacao-interna"
import {
  TREINA_GOVBR_LINKS_UTEIS,
  TREINA_GOVBR_PAGE_TITLE,
} from "@/config/capacitacao-treina-govbr"
import { MATERIAL_SECTIONS } from "@/config/material-de-apoio"
import { NAV_ITEMS } from "@/config/navigation"
import { NORMAS_SECTIONS } from "@/config/normas-cadastro"
import { PAINEL_PAGE_TITLE } from "@/config/painel"
import { PAINEL_AUDITORIA_CONFIG } from "@/config/painel-auditoria"
import { PAINEL_CNIR_CONFIG } from "@/config/painel-cnir"
import { PAINEL_DESCENTRALIZACAO_CONFIG } from "@/config/painel-descentralizacao"
import { PAINEL_ESTRUTURA_RESUMO_CONFIG } from "@/config/painel-estrutura-resumo"
import { PAINEL_DCR_PAGE_TITLE } from "@/config/painel-dcr"
import { QUICK_ACCESS_SECTIONS } from "@/config/quick-access"

export type SiteSearchResult = {
  id: string
  label: string
  href: string
  external?: boolean
  category: string
  searchText?: string
}

function normalizeForSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
}

function sectionsToResults(
  sections: CollapsibleSection[],
  category: string,
): Omit<SiteSearchResult, "id">[] {
  const items: Omit<SiteSearchResult, "id">[] = []
  for (const section of sections) {
    for (const link of section.links) {
      items.push({
        label: link.label,
        href: link.href,
        external: link.external,
        category,
        searchText: section.title,
      })
    }
  }
  return items
}

function buildIndex(): SiteSearchResult[] {
  const raw: Omit<SiteSearchResult, "id">[] = []
  const seen = new Set<string>()

  function add(item: Omit<SiteSearchResult, "id">) {
    const key = `${item.href}|${item.label}`
    if (seen.has(key)) return
    seen.add(key)
    raw.push(item)
  }

  for (const entry of NAV_ITEMS) {
    if (entry.type === "link") {
      add({
        label: entry.label,
        href: entry.path,
        category: "Páginas",
        searchText: entry.shortLabel,
      })
      continue
    }
    add({
      label: entry.label,
      href: entry.items.find((c) => c.path)?.path ?? "#",
      category: "Páginas",
      searchText: entry.shortLabel,
    })
    for (const child of entry.items) {
      if (!child.path) continue
      add({
        label: child.label,
        href: child.path,
        category: entry.label,
      })
    }
  }

  add({
    label: PAINEL_PAGE_TITLE,
    href: "/painel",
    category: "Painel",
    searchText: "estrutura completa dashboard",
  })
  add({
    label: PAINEL_ESTRUTURA_RESUMO_CONFIG.pageTitle,
    href: "/painel/estrutura-resumo",
    category: "Painel",
    searchText: PAINEL_ESTRUTURA_RESUMO_CONFIG.subtitle,
  })
  add({
    label: PAINEL_DCR_PAGE_TITLE,
    href: "/painel/dcr",
    category: "Painel",
    searchText: "analise dcr declaração",
  })
  add({
    label: PAINEL_AUDITORIA_CONFIG.pageTitle,
    href: "/painel/auditoria",
    category: "Painel",
  })
  add({
    label: PAINEL_CNIR_CONFIG.pageTitle,
    href: "/painel/cnir",
    category: "Painel",
  })
  add({
    label: PAINEL_DESCENTRALIZACAO_CONFIG.pageTitle,
    href: "/painel/descentralizacao",
    category: "Painel",
  })

  add({
    label: CAPACITACAO_UMC_PAGE_TITLE,
    href: "/capacitacao/unidade-municipal",
    category: "Capacitação",
    searchText: "umc municipal servidor",
  })
  add({
    label: CAPACITACAO_PTC_PAGE_TITLE,
    href: "/capacitacao/conveniados-ptc",
    category: "Capacitação",
    searchText: "programa terra cidadã ptc conveniados",
  })
  add({
    label: CAPACITACAO_INTERNA_PAGE_TITLE,
    href: "/capacitacao/interna",
    category: "Capacitação",
    searchText: "servidor federal cnpu",
  })
  add({
    label: TREINA_GOVBR_PAGE_TITLE,
    href: "/capacitacao/treina-govbr",
    category: "Capacitação",
    searchText: "gov.br treinamento conta",
  })

  for (const link of CAPACITACAO_UMC_PREPARACAO_LINKS) {
    add({
      label: link.title,
      href: link.href,
      external: true,
      category: "Capacitação",
      searchText: link.description,
    })
  }
  for (const link of CAPACITACAO_UMC_POS_EVENTO.apoioLinks) {
    add({
      label: link.label,
      href: link.href,
      external: link.external,
      category: "Capacitação",
    })
  }
  for (const link of TREINA_GOVBR_LINKS_UTEIS) {
    add({
      label: link.label,
      href: link.href,
      external: link.external,
      category: "Capacitação",
    })
  }

  for (const section of QUICK_ACCESS_SECTIONS) {
    for (const link of section.links) {
      add({
        label: link.label,
        href: link.href,
        external: link.external,
        category: section.title,
      })
    }
  }

  for (const card of CADASTRO_FEATURED_CARDS) {
    add({
      label: card.title,
      href: card.href,
      external: card.external,
      category: "Serviços de Cadastro",
      searchText: card.description,
    })
  }
  for (const item of sectionsToResults(CADASTRO_SERVICES, "Serviços de Cadastro")) {
    add(item)
  }
  for (const item of sectionsToResults(NORMAS_SECTIONS, "Normas de cadastro")) {
    add(item)
  }
  for (const item of sectionsToResults(MATERIAL_SECTIONS, "Material de apoio")) {
    add(item)
  }

  return raw.map((item, index) => ({
    ...item,
    id: `${item.href}-${index}`,
  }))
}

const SITE_SEARCH_INDEX = buildIndex()

export function searchSiteIndex(
  query: string,
  limit = 8,
): SiteSearchResult[] {
  const q = normalizeForSearch(query.trim())
  if (!q) return []

  const scored = SITE_SEARCH_INDEX.map((item) => {
    const label = normalizeForSearch(item.label)
    const category = normalizeForSearch(item.category)
    const extra = normalizeForSearch(item.searchText ?? "")
    const haystack = `${label} ${category} ${extra}`

    if (label.startsWith(q)) return { item, rank: 0 }
    if (label.includes(q)) return { item, rank: 1 }
    if (haystack.includes(q)) return { item, rank: 2 }
    return null
  }).filter((entry): entry is { item: SiteSearchResult; rank: number } =>
    entry !== null,
  )

  scored.sort((a, b) => a.rank - b.rank || a.item.label.localeCompare(b.item.label))

  return scored.slice(0, limit).map((entry) => entry.item)
}
