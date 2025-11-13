import { Col } from "../shared/FlexBox";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleCallout } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import st from "./style.module.css";

export function ArticleCallout({ richText, emoji }: TypeArticleCallout) {
  return (
    <Col className={`article-callout ${st.container}`}>
      <div className={st.calloutBlock}>
        {emoji && <ArticleTypo.label.medium className={st.emoji}>{emoji}</ArticleTypo.label.medium>}
        <ArticleTypo.label.medium><RenderRichText richText={richText} /></ArticleTypo.label.medium>
      </div>
    </Col>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .container {
 *   padding: 20px 12px;
 * }
 *
 * .calloutBlock {
 *   background-color: var(--semantic-container-even);
 *   border-radius: var(--article-radius);
 *   padding: 24px;
 * }
 *
 * .emoji {
 *   font-size: 24px;
 *   width: 24px;
 *   height: 24px;
 * }
 *
 * ============================================ */
