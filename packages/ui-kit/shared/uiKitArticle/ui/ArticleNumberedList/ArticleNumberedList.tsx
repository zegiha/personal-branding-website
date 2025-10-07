import type { ReactNode } from "react";
import { Col, Row, Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleNumberedList } from "../../type";
import st from "./style.module.css";

export function ArticleNumberedList({
  richText,
  children,
}: Omit<TypeArticleNumberedList, "type" | "children"> & {
  children?: ReactNode;
}) {
  return (
    <li className={st.listItem}>
      <Row className={st.listContent} gap={0}>
        <Typo.label.medium className={`ol-item ${st.markerSize}`} isMarkdown={true} />
        <Typo.label.medium isMarkdown={true}>
          {renderRichText(richText)}
        </Typo.label.medium>
      </Row>
      {children && (
        <Col gap={0} className={st.childrenIndent}>
          {children}
        </Col>
      )}
    </li>
  );
}
