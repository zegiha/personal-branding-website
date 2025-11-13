import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleParagraph } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import { Col } from "../shared/FlexBox";
import st from "./style.module.css";

export function ArticleParagraph({
  richText,
  children,
}: Omit<TypeArticleParagraph, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <>
      <ArticleTypo.label.medium className={`article-paragraph ${st.paragraph}`}>
        <RenderRichText richText={richText} />
      </ArticleTypo.label.medium>
      {!!children && <Col className={st.childrenIndent}><RenderArticleContent contents={children} /></Col>}
    </>
  );
}
