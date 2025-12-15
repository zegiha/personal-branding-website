import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleNumberedList } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import * as st from "./style.css";

export function ArticleNumberedList({
  richText,
  children,
}: Omit<TypeArticleNumberedList, "type" | "children"> & {
  children?: Array<TypeArticleContent | undefined>;
}) {
  return (
    <ol className="article-numbered-list">
      <li className={st.listItem}>
        <div className={st.listContent}>
          <ArticleTypo.label.medium className={`ol-item ${st.markerSize}`} />
          <ArticleTypo.label.medium>
            <RenderRichText richText={richText} />
          </ArticleTypo.label.medium>
        </div>
        {!!children && (
          <div className={st.childrenIndent}>
            <RenderArticleContent contents={children} />
          </div>
        )}
      </li>
    </ol>
  );
}
