import cn from "classnames";
import type { ReactNode } from "react";
import { Col, Row, Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleBulletedList } from "../../type";
import st from "./style.module.css";

export function ArticleBulletedList({
  richText,
  children,
}: Omit<TypeArticleBulletedList, "type" | "children"> & { children?: ReactNode }) {
  return (
    <li className={st.listItem}>
      <Row className={st.listContent} gap={0}>
        <Typo.label.medium
          className={cn("ul-item", st.listMarker)}
          isMarkdown={true}
        ></Typo.label.medium>
        <Typo.label.medium isMarkdown={true}>{renderRichText(richText)}</Typo.label.medium>
      </Row>
      {children && (
        <Col gap={0} className={st.childrenIndent}>
          {children}
        </Col>
      )}
    </li>
  );
}
