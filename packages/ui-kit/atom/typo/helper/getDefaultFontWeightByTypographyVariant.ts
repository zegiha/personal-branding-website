import type { TypeTypographyVariant } from "../type";

export function getDefaultFontWeightByTypographyVariant(variant: TypeTypographyVariant) {
	if (variant === "display" || variant === "headline") return "typography-bold";
	if (variant === "label") return "typography-medium";
	return "typography-regular";
}
