import type { ReactNode } from "react";
import { Col, Typo } from "../../../foundation";
import st from "./headlineSection.module.css";

export function HeadlineSection({ headline, children }: { headline: string; children: ReactNode }) {
  return (
    <Col
      className={st.headlineSectionContainer}
      width={"fill-width"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Col className={st.headlineSectionWrapper} width={"fill-width"} gap={24}>
        <Typo.headline.medium>{headline}</Typo.headline.medium>
        {children}
      </Col>
    </Col>
  );
}
