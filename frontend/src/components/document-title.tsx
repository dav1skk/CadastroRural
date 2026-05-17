import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { SITE_TITLE, pageLabelForPath } from "@/config/navigation"

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const pageLabel = pageLabelForPath(pathname)
    document.title = pageLabel ? `${SITE_TITLE} - ${pageLabel}` : SITE_TITLE
  }, [pathname])

  return null
}
