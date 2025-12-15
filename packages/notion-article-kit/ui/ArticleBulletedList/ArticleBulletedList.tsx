import { RenderRichText } from "../RenderRichText";
import type { TypeArticleBulletedList, TypeArticleContent } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
import * as st from "./style.css";

export function ArticleBulletedList({
  richText,
  children,
}: Omit<TypeArticleBulletedList, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <ul className="article-bulleted-list">
      <li className={st.listItem}>
        <div className={st.listContent}>
          <ArticleTypo.label.medium className={`ul-item ${st.listMarker}`} />
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
    </ul>
  );
}
