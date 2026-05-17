import type { ReactNode } from "react"
import { capacitacaoInstructionClassName } from "@/components/capacitacao/capacitacao-layout"
import { siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

export function InstructionalContentPage({
  title,
  instruction,
  children,
  contentClassName = "mx-auto mt-6 max-w-4xl sm:mt-8",
}: {
  title: string
  instruction: string
  children: ReactNode
  contentClassName?: string
}) {
  return (
    <div className={cn(siteContainerClassName, "py-8 sm:py-10 lg:py-12")}>
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl lg:text-[1.65rem]">
          {title}
        </h1>
      </header>

      <p
        className={cn(capacitacaoInstructionClassName, "mt-8 sm:mt-10")}
        role="note"
      >
        {instruction}
      </p>

      <div className={contentClassName}>{children}</div>
    </div>
  )
}
