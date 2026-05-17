import { useLayoutEffect, useRef } from "react"
import { GovTopBar } from "@/components/gov-top-bar"
import { SiteHeader } from "@/components/site-header"

function syncSiteChromeHeight(height: number) {
  document.documentElement.style.setProperty(
    "--site-chrome-height",
    `${height}px`,
  )
}

export function SiteChrome() {
  const chromeRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = chromeRef.current
    if (!el) return

    const update = () => syncSiteChromeHeight(el.offsetHeight)

    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener("resize", update)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", update)
      document.documentElement.style.removeProperty("--site-chrome-height")
    }
  }, [])

  return (
    <div
      ref={chromeRef}
      className="fixed inset-x-0 top-0 z-50 bg-background"
    >
      <GovTopBar />
      <SiteHeader />
    </div>
  )
}
