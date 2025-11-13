import { Col, Row } from "../shared/FlexBox";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleNumberedList } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import st from "./style.module.css";

export function ArticleNumberedList({
  richText,
  children,
}: Omit<TypeArticleNumberedList, "type" | "children"> & {
  children?: Array<TypeArticleContent | undefined>;
}) {
  return (
    <ol className="article-numbered-list">
      <li className={st.listItem}>
        <Row gap={0} className={st.listContent}>
          <ArticleTypo.label.medium className={`ol-item ${st.markerSize}`} />
          <ArticleTypo.label.medium>
            <RenderRichText richText={richText} />
          </ArticleTypo.label.medium>
        </Row>
        {!!children && (
          <Col gap={0} className={st.childrenIndent}>
            <RenderArticleContent contents={children} />
          </Col>
        )}
      </li>
    </ol>
  );
}
