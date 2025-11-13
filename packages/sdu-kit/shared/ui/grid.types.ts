import { ComponentProps } from "react";
import { Grid } from "./grid";

export type SharedGridSduType = {
  type: 'shared-grid';
  props: ComponentProps<typeof Grid>
}
