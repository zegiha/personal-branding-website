// import { BlockMath } from "react-katex";
import { Col, Row } from "sdu-kit";
import { styled } from "@linaria/react";
import type { TypeArticleEquation } from "../../type";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledContainer = styled(Col)`
  margin-top: var(--article-margin-top-xstrong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

const StyledEquationBlock = styled(Row)`
  background-color: var(--article-box-background-color);
  border-radius: var(--article-radius);
  padding: var(--article-block-padding);
  width: 100%;
`;

export function ArticleEquation({ text }: TypeArticleEquation) {
  return (
    <StyledContainer className="article-equation" gap={20} alignItems="center">
      <StyledEquationBlock justifyContent={"center"}>
        {/* <BlockMath math={text} /> */}
      </StyledEquationBlock>
    </StyledContainer>
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
