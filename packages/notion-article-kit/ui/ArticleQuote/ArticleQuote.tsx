import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleQuote } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import * as st from "./style.css";

export function ArticleQuote({
  richText,
  children,
}: Omit<TypeArticleQuote, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <div className={`article-quote ${st.container}`}>
      <div className={st.quoteBlock}>
        <div className={st.contentWrapper}>
          <div className={st.innerColumn}>
            <ArticleTypo.label.medium>
              <RenderRichText richText={richText} />
            </ArticleTypo.label.medium>
            {!!children && (
              <div className={st.childrenIndent}>
                <RenderArticleContent contents={children} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
