import type { ReactNode } from "react";
import { Col, Typo } from "../../../foundation";
import st from "./headlineSection.module.css";

export function HeadlineSection({ headline, children }: { headline: string; children: ReactNode }) {
  return (
    <Col className={st.headlineSectionContainer} width={"fill-width"}>
      <Col width={"fill-flex"} gap={24}>
        <Typo.headline.medium>{headline}</Typo.headline.medium>
        {children}
      </Col>
    </Col>
  );
}
