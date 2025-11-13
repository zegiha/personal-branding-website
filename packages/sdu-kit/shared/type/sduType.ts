import type { SharedSizedBoxSduType } from "../ui/sizedBox.types";
import type { SharedFlexSduType, SharedColSduType, SharedRowSduType } from "../ui/flex.types";
import type { SharedGridSduType } from "../ui/grid.types";
import type { SharedIconSduType } from "../ui/icon.types";
import type { DefaultTextSduType } from "../../variants/default/foundation/text.types";
import type { DefaultIconSduType } from "../../variants/default/foundation/icon.types";
import { VariantsType } from "./variantsType";
import { TestAtomSduType } from "../../variants/test/atom/testAtom.types";
import { DefaultHeadlineSectionSduType } from "../../variants/default/components/atom/headlineSection/headlineSection.types";
import { DefaultHeadlineContainerSduType } from "../../variants/default/components/atom/headlineContainer/headlineContainer.types";

export type SduTypeWrapper<T extends {type: string, props: any}> = {
  meta?: {
    design: VariantsType,
    theme: 'light' | 'dark' | null
  }
  children?: Array<SduTypeWrapper<T> | string>;
} & T

export type SduType = SduTypeWrapper<
  | TestAtomSduType
  | SharedSizedBoxSduType
  | SharedFlexSduType
  | SharedColSduType
  | SharedRowSduType
  | SharedGridSduType
  | SharedIconSduType
  | DefaultTextSduType
  | DefaultIconSduType
  | DefaultHeadlineSectionSduType
  | DefaultHeadlineContainerSduType
>