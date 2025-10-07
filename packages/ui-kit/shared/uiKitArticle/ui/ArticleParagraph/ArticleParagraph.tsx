import type { ReactNode } from "react";
import { Col, Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleParagraph } from "../../type";
import st from "./style.module.css";

export function ArticleParagraph({
  richText,
  children,
}: Omit<TypeArticleParagraph, "type" | "children"> & { children?: ReactNode }) {
  return (
    <>
      <Typo.label.medium className={st.paragraph} isMarkdown={true}>
        {renderRichText(richText)}
      </Typo.label.medium>
      {children && <Col className={st.childrenIndent}>{children}</Col>}
    </>
  );
}
