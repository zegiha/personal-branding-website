import { ComponentProps } from "react";
import { SizedBox } from "./sizedBox";

export type SharedSizedBoxSduType = {
  type: 'shared-sizedBox';
  props: ComponentProps<typeof SizedBox>
}
