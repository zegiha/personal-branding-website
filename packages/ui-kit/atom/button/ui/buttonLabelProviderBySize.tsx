import { Typo } from "../../../foundation";
import type { TypeButtonProps } from "../type";

export default function ButtonLabelProviderBySize({
  size,
  label,
}: Pick<TypeButtonProps, "size" | "label">) {
  switch (size) {
    case "medium":
      return <Typo.label.medium color={"inherit"}>{label}</Typo.label.medium>;
    case "large":
      return (
        <Typo.label.large fontWeight={"bold"} color={"inherit"}>
          {label}
        </Typo.label.large>
      );
  }
}
