import { Search, X } from "lucide-react"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { searchSiteIndex, type SiteSearchResult } from "@/config/site-search"
import { cn } from "@/lib/utils"

function isInternalPath(href: string) {
  return href.startsWith("/")
}

function SearchResultItem({
  result,
  active,
  onSelect,
}: {
  result: SiteSearchResult
  active: boolean
  onSelect: () => void
}) {
  const className = cn(
    "flex w-full flex-col gap-0.5 rounded-sm px-3 py-2 text-left text-sm transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    active ? "bg-accent text-accent-foreground" : "hover:bg-accent/70",
  )
  const content = (
    <>
      <span className="font-medium leading-snug">{result.label}</span>
      <span className="text-xs text-muted-foreground">{result.category}</span>
    </>
  )

  if (isInternalPath(result.href)) {
    return (
      <Link
        to={result.href}
        role="option"
        aria-selected={active}
        className={className}
        onClick={onSelect}
      >
        {content}
      </Link>
    )
  }

  return (
    <a
      href={result.href}
      role="option"
      aria-selected={active}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onSelect}
    >
      {content}
    </a>
  )
}

export function HeaderSearch({ className }: { className?: string }) {
  const listboxId = useId()
  const inputId = `${listboxId}-input`
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const results = searchSiteIndex(query)
  const showResults = open && query.trim().length > 0
  const highlightedIndex =
    showResults && results.length > 0
      ? activeIndex >= results.length
        ? results.length - 1
        : activeIndex
      : -1

  const close = useCallback(() => {
    setOpen(false)
    setActiveIndex(-1)
    setExpanded(false)
  }, [])

  const clear = useCallback(() => {
    setQuery("")
    setActiveIndex(-1)
    inputRef.current?.focus()
  }, [])

  const selectResult = useCallback(
    (result: SiteSearchResult) => {
      close()
      setQuery("")
      if (isInternalPath(result.href)) {
        navigate(result.href)
        return
      }
      window.open(result.href, "_blank", "noopener,noreferrer")
    },
    [close, navigate],
  )

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        close()
      }
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [close])

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      event.preventDefault()
      if (query) clear()
      else close()
      inputRef.current?.blur()
      return
    }

    if (!showResults || results.length === 0) return

    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveIndex((index) => (index + 1) % results.length)
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveIndex((index) =>
        index <= 0 ? results.length - 1 : index - 1,
      )
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      event.preventDefault()
      selectResult(results[highlightedIndex])
    }
  }

  const inputClassName = cn(
    "h-7 w-full min-w-0 rounded-sm border border-primary-foreground/30 bg-primary-foreground/10",
    "pl-7 pr-7 text-xs text-primary-foreground placeholder:text-primary-foreground/55",
    "transition-colors focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
  )

  return (
    <div
      ref={containerRef}
      className={cn("relative shrink-0", className)}
    >
      <div
        className={cn(
          "flex items-center justify-end",
          expanded
            ? "w-full min-w-0 sm:w-[7.5rem] md:w-32"
            : "w-7 sm:w-[7.5rem] md:w-32",
        )}
      >
        {!expanded && (
          <button
            type="button"
            className="flex size-7 items-center justify-center rounded-sm text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:hidden"
            aria-label="Abrir pesquisa"
            aria-expanded={expanded}
            onClick={() => {
              setExpanded(true)
              requestAnimationFrame(() => inputRef.current?.focus())
            }}
          >
            <Search className="size-3.5" aria-hidden />
          </button>
        )}

        <div
          className={cn(
            "relative min-w-0 flex-1",
            expanded ? "block" : "hidden sm:block",
          )}
        >
          <label htmlFor={inputId} className="sr-only">
            Pesquisar no site
          </label>
          <Search
            className="pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-primary-foreground/70"
            aria-hidden
          />
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setOpen(true)
              setActiveIndex(-1)
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            placeholder="Buscar…"
            autoComplete="off"
            role="combobox"
            aria-expanded={showResults}
            aria-controls={showResults ? listboxId : undefined}
            aria-autocomplete="list"
            aria-activedescendant={
              highlightedIndex >= 0
                ? `${listboxId}-option-${highlightedIndex}`
                : undefined
            }
            className={inputClassName}
          />
          {(query || expanded) && (
            <button
              type="button"
              onClick={() => {
                if (query) clear()
                else {
                  close()
                  inputRef.current?.blur()
                }
              }}
              className={cn(
                "absolute top-1/2 right-0.5 flex size-5 -translate-y-1/2 items-center justify-center rounded-sm",
                "text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground",
                expanded && !query && "sm:hidden",
              )}
              aria-label={query ? "Limpar pesquisa" : "Fechar pesquisa"}
            >
              <X className="size-3" aria-hidden />
            </button>
          )}
        </div>
      </div>

      {showResults && (
        <div
          className="absolute top-full right-0 z-[60] mt-1.5 w-[min(100vw-2rem,16rem)] overflow-hidden rounded-sm border border-border bg-popover text-popover-foreground shadow-lg sm:w-64"
          role="listbox"
          id={listboxId}
        >
          {results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-muted-foreground">
              Nenhum resultado para «{query.trim()}».
            </p>
          ) : (
            <ul className="max-h-72 overflow-y-auto py-1">
              {results.map((result, index) => (
                <li
                  key={result.id}
                  id={`${listboxId}-option-${index}`}
                  role="presentation"
                >
                  <SearchResultItem
                    result={result}
                    active={index === highlightedIndex}
                    onSelect={() => {
                      setQuery("")
                      close()
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
