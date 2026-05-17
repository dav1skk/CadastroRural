import { ChevronDown } from "lucide-react"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import { govNavLinkClassName } from "@/components/gov-panel"
import type { NavDropdownChild, NavDropdownItem } from "@/config/navigation"
import { cn } from "@/lib/utils"

function isChildActive(pathname: string, path: string) {
  return pathname === path || pathname.startsWith(`${path}/`)
}

function DropdownChildItem({
  child,
  pathname,
}: {
  child: NavDropdownChild
  pathname: string
}) {
  const className = cn(
    "block px-3 py-2 text-left text-xs leading-snug sm:text-sm",
    child.path
      ? "text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
      : "cursor-default text-foreground",
    child.path &&
      isChildActive(pathname, child.path) &&
      "bg-accent/80 font-semibold text-primary",
  )

  if (child.path) {
    return (
      <Link
        to={child.path}
        aria-current={
          isChildActive(pathname, child.path) ? "page" : undefined
        }
        className={className}
      >
        {child.label}
      </Link>
    )
  }

  return <span className={className}>{child.label}</span>
}

function NavDropdownLabel({ item }: { item: NavDropdownItem }) {
  const short = item.shortLabel ?? item.label
  return (
    <>
      <span className="xl:hidden">{short}</span>
      <span className="hidden xl:inline">{item.label}</span>
    </>
  )
}

type NavDropdownMenuProps = {
  item: NavDropdownItem
  pathname: string
  active: boolean
}

export function NavDropdownMenu({ item, pathname, active }: NavDropdownMenuProps) {
  const menuId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [open, setOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState<{
    top: number
    right: number
  } | null>(null)

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current
    if (!trigger) return
    const rect = trigger.getBoundingClientRect()
    setMenuStyle({
      top: rect.bottom,
      right: window.innerWidth - rect.right,
    })
  }, [])

  const showMenu = useCallback(() => {
    updateMenuPosition()
    setOpen(true)
  }, [updateMenuPosition])

  const hideMenu = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
    setOpen(false)
  }, [])

  const scheduleHideMenu = useCallback(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    hideTimeoutRef.current = setTimeout(() => {
      hideTimeoutRef.current = null
      setOpen(false)
    }, 120)
  }, [])

  const cancelScheduledHide = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!open) return
    updateMenuPosition()
    window.addEventListener("resize", updateMenuPosition)
    window.addEventListener("scroll", updateMenuPosition, true)
    return () => {
      window.removeEventListener("resize", updateMenuPosition)
      window.removeEventListener("scroll", updateMenuPosition, true)
    }
  }, [open, updateMenuPosition])

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (triggerRef.current?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      hideMenu()
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [open, hideMenu])

  return (
    <li
      className="relative shrink-0"
      onMouseEnter={() => {
        cancelScheduledHide()
        showMenu()
      }}
      onMouseLeave={scheduleHideMenu}
    >
      <button
        ref={triggerRef}
        type="button"
        id={`${menuId}-trigger`}
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => (open ? hideMenu() : showMenu())}
        className={govNavLinkClassName(
          active,
          "inline-flex shrink-0 cursor-default items-center gap-0.5 whitespace-nowrap px-2 py-2 text-right text-xs sm:gap-1 sm:px-2.5 sm:text-[0.8125rem] lg:px-3 lg:text-sm",
          true,
        )}
      >
        <NavDropdownLabel item={item} />
        <ChevronDown
          className={cn(
            "size-3.5 shrink-0 opacity-80 transition-transform",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open &&
        menuStyle &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-labelledby={`${menuId}-trigger`}
            style={{
              position: "fixed",
              top: menuStyle.top,
              right: menuStyle.right,
              zIndex: 60,
            }}
            className="pt-1"
            onMouseEnter={() => {
              cancelScheduledHide()
              showMenu()
            }}
            onMouseLeave={scheduleHideMenu}
          >
            <div className="min-w-[11.5rem] overflow-hidden rounded-sm border border-border bg-card py-1 shadow-md sm:min-w-[13rem]">
              <ul className="list-none">
                {item.items.map((child) => (
                  <li key={child.label} role="none">
                    <DropdownChildItem child={child} pathname={pathname} />
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </li>
  )
}
