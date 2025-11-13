import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleHeadline1 } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledHeadline = styled(ArticleTypo.headline.large)`
  margin-top: var(--article-margin-top-xxstrong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

export function ArticleHeadline1({ richText }: TypeArticleHeadline1) {
  return (
    <StyledHeadline className="article-headline1" $color="strong">
      <RenderRichText richText={richText} />
    </StyledHeadline>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .headline {
 *   padding-top: 24px;
 *   padding-bottom: 12px;
 * }
 *
 * ============================================ */
