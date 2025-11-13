import { styled } from "@linaria/react";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledContainer = styled.div`
  width: 100%;
  margin-top: var(--article-margin-top-xxstrong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--article-line);
`;

export function ArticleDivider() {
  return (
    <StyledContainer className="article-divider">
      <StyledDivider />
    </StyledContainer>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .divider {
 *   width: 100%;
 *   height: 1px;
 *   background-color: var(--semantic-line-normal);
 * }
 *
 * .container {
 *   width: 100%;
 *   padding: 16px;
 * }
 *
 * ============================================ */
