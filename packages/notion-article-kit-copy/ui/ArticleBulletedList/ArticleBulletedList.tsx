import { Col, Row } from "../shared/FlexBox";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleBulletedList, TypeArticleContent } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import st from "./style.module.css";

export function ArticleBulletedList({
  richText,
  children,
}: Omit<TypeArticleBulletedList, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <ul className="article-bulleted-list">
      <li className={`article-bulleted-list ${st.listItem}`}>
        <Row gap={0} className={st.listContent}>
          <ArticleTypo.label.medium className={`ul-item ${st.listMarker}`} />
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
    </ul>
  );
}
