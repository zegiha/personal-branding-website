import type { TypeUiKitContentColor } from "../../../shared";
import type { TypeIconKey } from "./typeIconKey";

export type InterfaceIcon = {
  iconKey: TypeIconKey;
  size?: number;
  color?: TypeUiKitContentColor;
  fill?: boolean;
  disableTransition?: boolean;
};
