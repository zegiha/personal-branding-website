import type { TypeArticleHeadline2 } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderRichText } from "../RenderRichText";
import * as st from "./style.css";

export function ArticleHeadline2({ richText }: TypeArticleHeadline2) {
  return (
    <ArticleTypo.headline.medium className={`article-headline2 ${st.headline}`} color="strong">
      <RenderRichText richText={richText} />
    </ArticleTypo.headline.medium>
  );
}
