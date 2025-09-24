type GrayScale = {
  "00": string;
  "10": string;
  "20": string;
  "30": string;
  "40": string;
  "50": string;
  "60": string;
  "70": string;
  "80": string;
};

type ColorScale = {
  "00": string;
  "10": string;
};

type PaletteHex = {
  gray: GrayScale;
  red: ColorScale;
  pink: ColorScale;
  blue: ColorScale;
  yellow: ColorScale;
  green: ColorScale;
};

type PaletteRgb = {
  gray: GrayScale;
  red: ColorScale;
  pink: ColorScale;
  blue: ColorScale;
  yellow: ColorScale;
  green: ColorScale;
};

export declare const palette: {
  default: {
    hex: PaletteHex;
    rgb: PaletteRgb;
  };
};
