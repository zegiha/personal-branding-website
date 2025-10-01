import type { ReactNode } from "react";
import st from "./seriesGrid.module.css";

export function SeriesGrid({ children }: { children: ReactNode }) {
  return <div className={st.container}>{children}</div>;
}
