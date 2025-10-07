import { Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleHeadline3 } from "../../type";
import st from "./style.module.css";

export function ArticleHeadline3({ richText }: TypeArticleHeadline3) {
  return (
    <Typo.headline.small
      className={st.headline}
      color="strong"
      fontWeight="bold"
      isMarkdown={true}
    >
      {renderRichText(richText)}
    </Typo.headline.small>
  );
}
