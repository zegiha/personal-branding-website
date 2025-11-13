import { VariantsType } from "../type/variantsType";

export const variantsMetadata: Record<VariantsType, string[]> = {
  default: ['palette', 'semantic', 'radius', 'typography'],
  test: [],
} as const;