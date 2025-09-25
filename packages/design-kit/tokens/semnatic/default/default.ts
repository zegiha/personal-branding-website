import { palette } from "../../palette/index";

const paletteHex = palette.default.hex;
const paletteRgb = palette.default.rgb;

export const semantic = {
  default: {
    light: {
      label: {
        strong: paletteHex.gray["60"],
        normal: paletteHex.gray["50"],
        weak: paletteHex.gray["40"],
      },
      container: {
        even: paletteHex.gray["10"],
        odd: paletteHex.gray["00"],
      },
      fill: {
        normal: `rgba(${paletteRgb.gray["30"]}, 0.16)`,
        weak: `rgba(${paletteRgb.gray["30"]}, 0.08)`,
      },
      line: {
        normal: `rgba(${paletteRgb.gray["30"]}, 0.24)`,
      },
      black: {
        static: paletteHex.gray["80"],
        variable: paletteHex.gray["80"],
        translucent: {
          static: {
            "64": `rgba(${paletteRgb.gray["80"]}, 0.64)`,
          },
        },
      },
      white: {
        static: paletteHex.gray["00"],
        variable: paletteHex.gray["00"],
        translucent: {
          variable: {
            "00": `rgba(${paletteRgb.gray["00"]}, 0)`,
            "24": `rgba(${paletteRgb.gray["00"]}, 0.24)`,
          },
        },
      },
      interaction: {
        hover: `rgba(${paletteRgb.gray["40"]}, 0.2)`,
        active: `rgba(${paletteRgb.gray["40"]}, 0.28)`,
      },
      accent: {
        gray: paletteHex.gray["80"],
        red: paletteHex.red["00"],
        pink: paletteHex.pink["00"],
        blue: paletteHex.blue["00"],
        yellow: paletteHex.yellow["00"],
        green: paletteHex.green["00"],
        translucent: {
          gray: `rgba(${paletteRgb.gray["30"]}, 0.16)`,
          red: `rgba(${paletteRgb.red["00"]}, 0.16)`,
          pink: `rgba(${paletteRgb.pink["00"]}, 0.16)`,
          blue: `rgba(${paletteRgb.blue["00"]}, 0.16)`,
          yellow: `rgba(${paletteRgb.yellow["00"]}, 0.16)`,
          green: `rgba(${paletteRgb.green["00"]}, 0.16)`,
        },
      },
    },
    dark: {
      label: {
        strong: paletteHex.gray["00"],
        normal: paletteHex.gray["20"],
        weak: paletteHex.gray["40"],
      },
      container: {
        even: paletteHex.gray["70"],
        odd: paletteHex.gray["80"],
      },
      fill: {
        normal: `rgba(${paletteRgb.gray["30"]}, 0.16)`,
        weak: `rgba(${paletteRgb.gray["30"]}, 0.08)`,
      },
      line: {
        normal: `rgba(${paletteRgb.gray["30"]}, 0.24)`,
      },
      black: {
        static: paletteHex.gray["80"],
        variable: paletteHex.gray["00"],
        translucent: {
          static: {
            "64": `rgba(${paletteRgb.gray["80"]}, 0.64)`,
          },
        },
      },
      white: {
        static: paletteHex.gray["00"],
        variable: paletteHex.gray["80"],
        translucent: {
          variable: {
            "00": `rgba(${paletteRgb.gray["80"]}, 0.00)`,
            "24": `rgba(${paletteRgb.gray["80"]}, 0.24)`,
          },
        },
      },
      interaction: {
        hover: `rgba(${paletteRgb.gray["50"]}, 0.2)`,
        active: `rgba(${paletteRgb.gray["50"]}, 0.28)`,
      },
      accent: {
        gray: paletteHex.gray["00"],
        red: paletteHex.red["10"],
        pink: paletteHex.pink["10"],
        blue: paletteHex.blue["10"],
        yellow: paletteHex.yellow["10"],
        green: paletteHex.green["10"],
        translucent: {
          gray: `rgba(${paletteRgb.gray["30"]}, 0.16)`,
          red: `rgba(${paletteRgb.red["10"]}, 0.16)`,
          pink: `rgba(${paletteRgb.pink["10"]}, 0.16)`,
          blue: `rgba(${paletteRgb.blue["10"]}, 0.16)`,
          yellow: `rgba(${paletteRgb.yellow["10"]}, 0.16)`,
          green: `rgba(${paletteRgb.green["10"]}, 0.16)`,
        },
      },
    },
  },
};
