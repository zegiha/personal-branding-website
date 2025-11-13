import { VariantsType } from "../type/variantsType";
import { paletteCss as defaultPaletteCss } from "../../variants/default/token/palette";
import { semanticLightCss as defaultSemanticLightCss, semanticDarkCss as defaultSemanticDarkCss } from "../../variants/default/token/semantic";
import { paletteCss as testPaletteCss } from "../../variants/test/token/palette";

export function getDesignAndThemeClass(meta?: {
  design: VariantsType,
  theme: 'light' | 'dark' | null
}) {
  if(!meta) return ''
  const {design, theme} = meta
  if(design === 'default') {
    if(theme === 'light') {
      return `${defaultPaletteCss} ${defaultSemanticLightCss}`
    } else if(theme === 'dark') {
      return `${defaultPaletteCss} ${defaultSemanticDarkCss}`
    } else {
      throw new Error('Theme is required for default variant')
    }
  } else if(design === 'test') {
    if(theme !== null) {
      throw new Error('Theme is not allowed for test variant')
    } else {
      return `${testPaletteCss}`
    }
  }
}