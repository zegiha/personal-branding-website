import { Col, Row } from "../shared/FlexBox";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleQuote } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import st from "./style.module.css";

export function ArticleQuote({
  richText,
  children,
}: Omit<TypeArticleQuote, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <Col className={`article-quote ${st.container}`}>
      <div className={st.quoteBlock}>
        <Row gap={8} alignItems="flex-start">
          <Col gap={0}>
            <ArticleTypo.label.medium><RenderRichText richText={richText} /></ArticleTypo.label.medium>
            {!!children && <Col className={st.childrenIndent}><RenderArticleContent contents={children} /></Col>}
          </Col>
        </Row>
      </div>
    </Col>
  );
}
