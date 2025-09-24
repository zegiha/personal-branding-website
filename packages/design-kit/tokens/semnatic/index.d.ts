type LabelTokens = {
	strong: string;
	normal: string;
	weak: string;
};

type ContainerTokens = {
	even: string;
	odd: string;
};

type FillTokens = {
	normal: string;
	weak: string;
};

type LineTokens = {
	normal: string;
};

type BlackTokens = {
	static: string & {
		"64": string;
	};
	variable: string;
};

type WhiteTokens = {
	static: string;
	variable: string & {
		"00": string;
		"24": string;
	};
};

type InteractionTokens = {
	hover: string;
};

type AccentTokens = {
	gray: string;
	red: string;
	pink: string;
	blue: string;
	yellow: string;
	green: string;
	translucent: {
		gray: string;
		red: string;
		pink: string;
		blue: string;
		yellow: string;
		green: string;
	};
};

type DefaultThemeTokens = {
	label: LabelTokens;
	container: ContainerTokens;
	fill: FillTokens;
	line: LineTokens;
	black: BlackTokens;
	white: WhiteTokens;
	interaction: InteractionTokens;
	accent: AccentTokens;
};

export declare const semantic: {
	default: {
		light: DefaultThemeTokens;
		dark: DefaultThemeTokens;
	};
};
