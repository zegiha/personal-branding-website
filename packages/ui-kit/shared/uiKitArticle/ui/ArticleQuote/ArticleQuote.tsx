import type { ReactNode } from "react";
import { Col, Row, Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleQuote } from "../../type";
import st from "./style.module.css";

export function ArticleQuote({
  richText,
  children,
}: Omit<TypeArticleQuote, "type" | "children"> & { children?: ReactNode }) {
  return (
    <Col className={st.container} gap={20}>
      <div className={st.quoteBlock}>
        <Row gap={8} alignItems="start">
          <Typo.label.medium className={st.quoteIcon}>💬</Typo.label.medium>
          <Col gap={0}>
            <Typo.label.medium isMarkdown={true}>
              {renderRichText(richText)}
            </Typo.label.medium>
            {children && <Col className={st.childrenIndent}>{children}</Col>}
          </Col>
        </Row>
      </div>
    </Col>
  );
}
