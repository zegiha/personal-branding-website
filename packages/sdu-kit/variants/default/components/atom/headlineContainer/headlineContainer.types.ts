import { HeadlineContainer } from "./headlineContainer"
import { ComponentProps } from "react";

export type DefaultHeadlineContainerSduType = {
  type: 'default-headlineContainer'
  props: Omit<ComponentProps<typeof HeadlineContainer>, 'children'>
}