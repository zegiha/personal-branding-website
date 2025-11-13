import { ComponentProps } from "react";
import { Text } from "./text";

export type DefaultTextSduType = {
  type: 'default-text';
  props: ComponentProps<typeof Text>
}
