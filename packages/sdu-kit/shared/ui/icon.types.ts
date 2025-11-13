import { ComponentProps } from "react";
import { Icon } from "./icon";

export type SharedIconSduType = {
  type: 'shared-icon';
  props: ComponentProps<typeof Icon>
}
