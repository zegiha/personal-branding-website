import type {
  InterfaceBaseTypo,
  TypeTypographySubVariant,
  TypeTypographyTagName,
  TypeTypographyVariant,
} from "../type";
import { BaseTypo } from "./baseTypo";

function createTypo<V extends TypeTypographyTagName>(
  variant: TypeTypographyVariant,
  subVariant: TypeTypographySubVariant,
) {
  return (props: Omit<InterfaceBaseTypo<V>, "variant" | "subVariant">) => (
    <BaseTypo variant={variant} subVariant={subVariant} {...props} />
  );
}

export const Typo = {
  display: {
    medium: createTypo("display", "medium"),
  },
  headline: {
    large: createTypo("headline", "large"),
    medium: createTypo("headline", "medium"),
    submedium: createTypo("headline", "submedium"),
    small: createTypo("headline", "small"),
  },
  label: {
    large: createTypo("label", "large"),
    medium: createTypo("label", "medium"),
    small: createTypo("label", "submedium"),
  },
  caption: {
    medium: createTypo("caption", "medium"),
    small: createTypo("caption", "small"),
  },
};
