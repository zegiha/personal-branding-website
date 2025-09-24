import type {
	TypeTypographyVariant,
	TypeTypographySubVariant,
	TypeTypographyTagName,
} from "../type";

export function getTagNameByVariant(
	variant: TypeTypographyVariant,
	subVariant: TypeTypographySubVariant,
): TypeTypographyTagName {
	switch (variant) {
		case "display":
			return "h1";
		case "headline":
			switch (subVariant) {
				case "large":
					return "h1";
				case "medium":
					return "h2";
				case "submedium":
					return "h2";
				case "small":
					return "h3";
			}
		case "label":
			return "p";
		case "caption":
			return "small";
	}
}
