import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleHeadline3 } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledHeadline = styled(ArticleTypo.headline.small)`
  margin-top: var(--article-margin-top-strong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

export function ArticleHeadline3({ richText }: TypeArticleHeadline3) {
  return (
    <StyledHeadline className="article-headline3" $color="strong">
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
