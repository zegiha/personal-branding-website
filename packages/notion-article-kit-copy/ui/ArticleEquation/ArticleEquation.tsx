// import { BlockMath } from "react-katex";
import { Col } from "../shared/FlexBox";
import type { TypeArticleEquation } from "../../type";
import st from "./style.module.css";

export function ArticleEquation({ text }: TypeArticleEquation) {
  return (
    <Col className={`article-equation ${st.container}`} gap={20} alignItems="center">
      <div className={st.equationBlock}>
        {/* <BlockMath math={text} /> */}
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
 * .equationBlock {
 *   background-color: var(--semantic-container-even);
 *   border-radius: var(--article-radius);
 *   padding: 24px;
 *   width: 100%;
 * }
 *
 * ============================================ */
