import { VariantsType } from "../type/variantsType";
import { variantsMetadata } from "../const/variantsMetadata";

export async function getDesignToken(variant: VariantsType) {
  const tokens = await Promise.all(variantsMetadata[variant].map(async(type) => {
    const path = `../../variants/${variant}/token/${type}.ts`;
    const tokenFile = await import(path as string);
    return {
      [type]: tokenFile[type]
    };
  }));
  return tokens;
}