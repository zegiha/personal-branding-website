import { RenderRichText } from "../RenderRichText";
import type { TypeArticleCallout } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import * as st from "./style.css";

export function ArticleCallout({ richText, emoji }: TypeArticleCallout) {
  return (
    <div className={`article-callout ${st.container}`}>
      <div className={st.calloutBlock}>
        {emoji && <ArticleTypo.label.medium className={st.emoji}>{emoji}</ArticleTypo.label.medium>}
        <ArticleTypo.label.medium>
          <RenderRichText richText={richText} />
        </ArticleTypo.label.medium>
      </div>
    </div>
  );
}
