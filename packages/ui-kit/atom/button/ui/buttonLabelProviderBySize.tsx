import { Typo } from "../../../foundation";
import type { TypeButtonProps } from "../type";

export default function ButtonLabelProviderBySize({
  size,
  label,
  fontWeight,
}: Pick<TypeButtonProps, "size" | "label" | "fontWeight">) {
  switch (size) {
    case "small":
      return (
        <Typo.label.small fontWeight={fontWeight} color={"inherit"}>
          {label}
        </Typo.label.small>
      );
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
