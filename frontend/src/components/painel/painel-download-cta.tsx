import { ExternalLink } from "lucide-react"
import { capacitacaoLinkClassName } from "@/components/capacitacao/capacitacao-layout"

export function PainelDownloadCta({
  title,
  href,
}: {
  title: string
  href: string
}) {
  return (
    <p className="text-center text-sm font-bold uppercase tracking-wide text-primary sm:text-base">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={capacitacaoLinkClassName}
      >
        {title}
        <ExternalLink className="ml-1.5 inline size-4 opacity-70" aria-hidden />
      </a>
    </p>
  )
}
