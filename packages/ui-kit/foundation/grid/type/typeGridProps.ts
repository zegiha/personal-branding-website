import type { TypeWidth } from "design-kit";
import type { ReactNode } from "react";

export type TypeGridProps = {
  width?: TypeWidth;
  col?: 2 | 4;
  row?: 2;
  gap?: number;
  children?: ReactNode;
};
