import { Typo } from "../../../foundation";
import type { TypeLinkButtonProps } from "../type";

export default function LinkButtonLabelProviderBySize({
  size,
  label,
  fontWeight,
}: Pick<TypeLinkButtonProps, "size" | "label" | "fontWeight">) {
  switch (size) {
    case "medium":
      return (
        <Typo.label.medium fontWeight={fontWeight} color={"inherit"}>
          {label}
        </Typo.label.medium>
      );
    case "large":
      return (
        <Typo.label.large fontWeight={fontWeight} color={"inherit"}>
          {label}
        </Typo.label.large>
      );
  }
}