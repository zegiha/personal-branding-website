import { Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleHeadline1 } from "../../type";
import st from "./style.module.css";

export function ArticleHeadline1({ richText }: TypeArticleHeadline1) {
  return (
    <Typo.headline.large className={st.headline} color="strong" fontWeight="bold" isMarkdown={true}>
      {renderRichText(richText)}
    </Typo.headline.large>
  );
}
