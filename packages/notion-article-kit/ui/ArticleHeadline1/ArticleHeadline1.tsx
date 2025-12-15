import type { TypeArticleHeadline1 } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderRichText } from "../RenderRichText";
import * as st from "./style.css";

export function ArticleHeadline1({ richText }: TypeArticleHeadline1) {
  return (
    <ArticleTypo.headline.large className={`article-headline1 ${st.headline}`} color="strong">
      <RenderRichText richText={richText} />
    </ArticleTypo.headline.large>
  );
}
