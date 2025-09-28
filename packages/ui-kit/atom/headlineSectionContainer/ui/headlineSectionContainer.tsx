import type { ReactNode } from "react";
import { Col } from "../../../foundation";
import st from "./headlineSectionContainer.module.css";

export function HeadlineSectionContainer({ children }: { children: ReactNode }) {
  return (
    <Col className={st.container} width={"fill-width"}>
      {children}
    </Col>
  );
}
