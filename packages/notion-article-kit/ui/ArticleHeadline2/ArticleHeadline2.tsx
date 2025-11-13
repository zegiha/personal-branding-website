import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleHeadline2 } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledHeadline = styled(ArticleTypo.headline.medium)`
  margin-top: var(--article-margin-top-strong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

export function ArticleHeadline2({ richText }: TypeArticleHeadline2) {
  return (
    <StyledHeadline className="article-headline2" $color="strong">
      <RenderRichText richText={richText} />
    </StyledHeadline>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .headline {
 *   padding-top: 16px;
 *   padding-bottom: 12px;
 * }
 *
 * ============================================ */
