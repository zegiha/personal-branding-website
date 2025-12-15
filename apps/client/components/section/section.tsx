import type { ReactNode } from "react"
import { container, wrap, backgroundEven, backgroundOdd } from "./st.css"
import { Text } from "@/components"
import { cn } from "@/utils"

export function Section({
  children,
  gap,
  headline,
  className,
  backgroundColor,
}: {
  children?: ReactNode
  gap?: number
  headline?: string
  className?: string
  backgroundColor?: 'odd' | 'even'
}) {
  const backgroundColorClassName = backgroundColor ?
    backgroundColor === 'odd' ? backgroundOdd : backgroundEven :
    ''
  return (
    <section className={cn(container, backgroundColorClassName, className)}>
      <div className={wrap} style={{ gap }}>
        {headline && <Text type='headline' size='medium' color='strong'>{headline}</Text>}
        {children}
      </div>
    </section>
  )
}