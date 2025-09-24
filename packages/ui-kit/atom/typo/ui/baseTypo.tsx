import { createElement } from "react";
import { firstCharacterToUpperCase } from "../../../helper/firstCharacterToUpperCase";
import {
	getTagNameByVariant,
	getDefaultFontWeightByTypographyVariant,
	getDefaultColorByTypographyVariant,
	getCSSVariableByTypographyColor,
} from "../helper";
import { InterfaceBaseTypo, TypeTypographyTagName } from "../type";
import st from "./baseTypo.module.css";
import { widthModuleCSS } from "design-kit";
import cn from "classnames";

export function BaseTypo<V extends TypeTypographyTagName>({
	variant,
	subVariant,
	isMarkdown,
	width,
	color,
	textAlign,
	textWrap = "pretty",
	textOverflowLine,
	fontWeight,
	flexShrink,
	underline,
	className: propsClassName = "",
	children,
	...rest
}: InterfaceBaseTypo<V>) {
	const isWidth = width !== undefined && width !== null;
	const isWidthStatic =
		width !== "fill-flex" && width !== "fill-width" && width !== "auto" && width !== "fit-content";

	const dashToCamelCase = (v: string) => {
		return v.replace(/-./g, (str) => str[1].toUpperCase());
	};

	return createElement(
		getTagNameByVariant(variant, subVariant),
		{
			...rest,
			className: cn(
				`${variant}-${subVariant}${isMarkdown ? "-markdown" : ""}`,
				`${fontWeight ? `typography-${fontWeight}` : getDefaultFontWeightByTypographyVariant(variant)}`,
				st[
					`uiKitTypographyColor${firstCharacterToUpperCase(getDefaultColorByTypographyVariant(variant))}`
				],
				isWidth && !isWidthStatic && widthModuleCSS[dashToCamelCase(width)],
				textAlign && st[`uiKitTypographyTextAlign${firstCharacterToUpperCase(textAlign)}`],
				textWrap && st[`uiKitTypographyTextWrap${firstCharacterToUpperCase(textWrap)}`],
				flexShrink === false && st.uiKitTypographyDisableFlexShrink,
				underline && st.uiKitTypographyUnderline,
				propsClassName,
			),
			style: {
				width: isWidth && isWidthStatic ? width : undefined,
				...(textOverflowLine
					? {
							textOverflow: "ellipsis",
							overflow: "hidden",
							lineClamp: textOverflowLine,
							whiteSpace: "nowrap",
						}
					: {}),
				color: color ? getCSSVariableByTypographyColor(color) : undefined,
			},
		},
		children,
	);
}
