import type { ReactNode } from "react";
import st from "./subProjectGrid.module.css";

export function SubProjectGrid({ children }: { children: ReactNode }) {
  return <div className={st.container}>{children}</div>;
}
