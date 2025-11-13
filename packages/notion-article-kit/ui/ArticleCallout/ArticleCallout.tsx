import { Col, Row } from "sdu-kit";
import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleCallout } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledContainer = styled(Col)`
  margin-top: var(--article-margin-top-xstrong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

const StyledCalloutBlock = styled(Row)`
  background-color: var(--article-box-background-color);
  border-radius: var(--article-radius);
  padding: var(--article-block-padding);
`;

const StyledEmoji = styled(ArticleTypo.label.medium)`
  font-size: var(--article-icon-size);
  width: var(--article-icon-size);
  height: var(--article-icon-size);
`;

export function ArticleCallout({ richText, emoji }: TypeArticleCallout) {
  return (
    <StyledContainer className="article-callout">
      <StyledCalloutBlock width={"fill-width"} gap={8} alignItems="center">
        {emoji && <StyledEmoji>{emoji}</StyledEmoji>}
        <ArticleTypo.label.medium ><RenderRichText richText={richText} /></ArticleTypo.label.medium>
      </StyledCalloutBlock>
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
