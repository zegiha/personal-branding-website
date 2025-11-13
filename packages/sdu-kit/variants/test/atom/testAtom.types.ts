import { ComponentProps } from "react";
import { TestAtomCmp } from "./testAtomCmp";

export type TestAtomSduType = {
  type: 'test-testAtom';
  props: ComponentProps<typeof TestAtomCmp>
};