import { Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleHeadline2 } from "../../type";
import st from "./style.module.css";

export function ArticleHeadline2({ richText }: TypeArticleHeadline2) {
  return (
    <Typo.headline.submedium
      className={st.headline}
      color="strong"
      fontWeight="bold"
      isMarkdown={true}
    >
      {renderRichText(richText)}
    </Typo.headline.submedium>
  );
}
