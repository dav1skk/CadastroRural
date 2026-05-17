import { HeroMapSection } from "@/components/hero-map-section"
import { QuickAccessGuide } from "@/components/quick-access-guide"
import { heroContentWidthClassName, siteContainerClassName } from "@/lib/layout"
import { cn } from "@/lib/utils"

export function HomePage() {
  return (
    <div className={cn(siteContainerClassName, "py-0")}>
      <div
        className={cn(
          "grid w-full gap-8",
          "lg:grid-cols-[minmax(0,1fr)_min(100%,20rem)] lg:gap-10",
          "xl:grid-cols-[minmax(0,1fr)_22rem]",
        )}
      >
        <div className={heroContentWidthClassName}>
          <HeroMapSection />
        </div>

        <div className="mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
          <QuickAccessGuide />
        </div>
      </div>
    </div>
  )
}
