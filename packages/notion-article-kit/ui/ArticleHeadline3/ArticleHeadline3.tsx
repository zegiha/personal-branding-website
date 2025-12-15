import type { TypeArticleHeadline3 } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderRichText } from "../RenderRichText";
import * as st from "./style.css";

export function ArticleHeadline3({ richText }: TypeArticleHeadline3) {
  return (
    <ArticleTypo.headline.small className={`article-headline3 ${st.headline}`} color="strong">
      <RenderRichText richText={richText} />
    </ArticleTypo.headline.small>
  );
}
