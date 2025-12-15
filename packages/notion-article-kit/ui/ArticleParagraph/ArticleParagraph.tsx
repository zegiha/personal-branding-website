import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleParagraph } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import * as st from "./style.css";

export function ArticleParagraph({
  richText,
  children,
}: Omit<TypeArticleParagraph, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <>
      <ArticleTypo.label.medium className={`article-paragraph ${st.paragraph}`}>
        <RenderRichText richText={richText} />
      </ArticleTypo.label.medium>
      {!!children && (
        <div className={st.childrenIndent}>
          <RenderArticleContent contents={children} />
        </div>
      )}
    </>
  );
}
