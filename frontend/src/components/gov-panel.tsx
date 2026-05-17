import * as React from "react"
import {
  govPanelClassName,
  govPanelHeaderClassName,
  govPanelSectionClassName,
  govPanelTitleClassName,
} from "@/components/gov-panel-styles"
import { cn } from "@/lib/utils"

export function GovPanel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(govPanelClassName, className)} {...props} />
}

export function GovPanelHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(govPanelHeaderClassName, className)} {...props} />
}

export function GovPanelTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return <h2 className={cn(govPanelTitleClassName, className)} {...props} />
}

export function GovPanelSectionTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return <h3 className={cn(govPanelSectionClassName, className)} {...props} />
}
