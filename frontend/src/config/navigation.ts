export type NavLinkItem = {
  type: "link"
  label: string
  /** Rótulo curto em telas menores (até lg) */
  shortLabel?: string
  path: string
}

export type NavDropdownChild = {
  label: string
  path?: string
}

export type NavDropdownItem = {
  type: "dropdown"
  id: string
  label: string
  shortLabel?: string
  items: NavDropdownChild[]
}

export type NavEntry = NavLinkItem | NavDropdownItem

export const SITE_TITLE = "Cadastro Rural"

export function pageLabelForPath(pathname: string): string | undefined {
  for (const entry of NAV_ITEMS) {
    if (entry.type === "link" && entry.path === pathname) {
      return entry.label
    }
    if (entry.type === "dropdown") {
      const child = entry.items.find((item) => item.path === pathname)
      if (child) return child.label
    }
  }
  return undefined
}

export const NAV_ITEMS: NavEntry[] = [
  { type: "link", label: "Início", path: "/" },
  {
    type: "link",
    label: "Serviços de Cadastro",
    shortLabel: "Serviços",
    path: "/servicos-de-cadastro",
  },
  {
    type: "link",
    label: "Normas de cadastro",
    shortLabel: "Normas",
    path: "/normas-de-cadastro",
  },
  {
    type: "link",
    label: "Material de apoio",
    shortLabel: "Material",
    path: "/material-de-apoio",
  },
  {
    type: "dropdown",
    id: "capacitacao",
    label: "Capacitação",
    items: [
      {
        label: "Unidade Municipal",
        path: "/capacitacao/unidade-municipal",
      },
      {
        label: "Programa Terra Cidadã",
        path: "/capacitacao/conveniados-ptc",
      },
      {
        label: "Interna",
        path: "/capacitacao/interna",
      },
      {
        label: "Treina gov.br",
        path: "/capacitacao/treina-govbr",
      },
    ],
  },
  {
    type: "dropdown",
    id: "painel",
    label: "Painel",
    items: [
      { label: "Estrutura completa", path: "/painel" },
      { label: "Estrutura resumo", path: "/painel/estrutura-resumo" },
      { label: "Analise DCR", path: "/painel/dcr" },
      { label: "Auditoria DCR", path: "/painel/auditoria" },
      { label: "CNIR", path: "/painel/cnir" },
      { label: "Descentralização", path: "/painel/descentralizacao" },
    ],
  },
]
