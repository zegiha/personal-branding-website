import { ComponentProps } from "react"
import { HeadlineSection } from "./headlineSection"

export type DefaultHeadlineSectionSduType = {
  type: 'default-headlineSection'
  props: Omit<ComponentProps<typeof HeadlineSection>, 'children'>
}