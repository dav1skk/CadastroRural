import { Link, useLocation } from "react-router-dom"
import {
  GovPanel,
  GovPanelHeader,
  GovPanelTitle,
  govNavLinkClassName,
} from "@/components/gov-panel"
import { HeaderSearch } from "@/components/header-search"
import { NavDropdownMenu } from "@/components/nav-dropdown-menu"
import {
  NAV_ITEMS,
  type NavDropdownItem,
  type NavLinkItem,
} from "@/config/navigation"
import { headerContentWidthClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

function isNavActive(pathname: string, path: string) {
  if (path === "/") return pathname === "/"
  return pathname === path || pathname.startsWith(`${path}/`)
}

function isDropdownActive(pathname: string, item: NavDropdownItem) {
  return item.items.some(
    (child) => child.path && isNavActive(pathname, child.path),
  )
}

function LogoLink() {
  return (
    <Link
      to="/"
      className="flex size-9 shrink-0 items-center justify-center rounded-sm border border-primary-foreground/30 bg-primary-foreground/10 text-sm font-bold tracking-tight text-primary-foreground transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      aria-label="Cadastro Rural — voltar ao início"
    >
      CR
    </Link>
  )
}

function NavLinkLabel({ item }: { item: NavLinkItem }) {
  const short = item.shortLabel ?? item.label
  return (
    <>
      <span className="xl:hidden">{short}</span>
      <span className="hidden xl:inline">{item.label}</span>
    </>
  )
}

function NavItems({ pathname }: { pathname: string }) {
  return (
    <>
      {NAV_ITEMS.map((entry) => {
        if (entry.type === "dropdown") {
          return (
            <NavDropdownMenu
              key={entry.id}
              item={entry}
              pathname={pathname}
              active={isDropdownActive(pathname, entry)}
            />
          )
        }

        const active = isNavActive(pathname, entry.path)
        return (
          <li key={entry.path} className="shrink-0">
            <Link
              to={entry.path}
              aria-current={active ? "page" : undefined}
              className={govNavLinkClassName(
                active,
                "inline-flex shrink-0 whitespace-nowrap px-2 py-2 text-right text-xs sm:px-2.5 sm:text-[0.8125rem] lg:px-3 lg:text-sm",
                true,
              )}
            >
              <NavLinkLabel item={entry} />
            </Link>
          </li>
        )
      })}
    </>
  )
}

export function SiteHeader() {
  const { pathname } = useLocation()

  return (
    <header className="w-full">
      <GovPanel className="overflow-visible rounded-none border-0 bg-transparent shadow-none">
        <GovPanelHeader className="overflow-visible py-2 sm:py-2.5">
          <div
            className={cn(
              headerContentWidthClassName,
              "flex min-h-11 items-center gap-2 sm:gap-3",
            )}
          >
            <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
              <LogoLink />
              <GovPanelTitle className="max-w-[4.5rem] truncate sm:max-w-[8rem] md:max-w-none">
                Cadastro Rural
              </GovPanelTitle>
            </div>

            <div className="ml-auto flex min-w-0 items-center justify-end gap-1 sm:gap-1.5">
              <nav
                className="min-w-0 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Navegação principal"
              >
                <ul className="flex w-max flex-nowrap items-center justify-end gap-0 sm:gap-0.5">
                  <NavItems pathname={pathname} />
                </ul>
              </nav>
              <HeaderSearch />
            </div>
          </div>
        </GovPanelHeader>
      </GovPanel>
    </header>
  )
}
