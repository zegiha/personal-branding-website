import { ComponentProps } from "react";
import { Icon } from "./icon";

export type DefaultIconSduType = {
  type: 'default-icon';
  props: ComponentProps<typeof Icon>
}
