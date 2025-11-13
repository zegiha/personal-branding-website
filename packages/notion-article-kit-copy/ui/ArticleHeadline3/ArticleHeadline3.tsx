import { RenderRichText } from "../RenderRichText";
import type { TypeArticleHeadline3 } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import st from "./style.module.css";

export function ArticleHeadline3({ richText }: TypeArticleHeadline3) {
  return (
    <ArticleTypo.headline.small className={`article-headline3 ${st.headline}`} $color="strong">
      <RenderRichText richText={richText} />
    </ArticleTypo.headline.small>
  );
}
