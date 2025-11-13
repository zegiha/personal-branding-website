import { Col, Row } from "sdu-kit";
import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleQuote } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledContainer = styled(Col)`
  margin-top: var(--article-margin-top-xstrong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

const StyledQuoteBlock = styled.div`
  border-left: 2px solid var(--article-line);
  padding: var(--article-block-padding);
`;

const StyledChildrenIndent = styled(Col)`
  padding-left: var(--article-indent-nested);
`;

export function ArticleQuote({
  richText,
  children,
}: Omit<TypeArticleQuote, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <StyledContainer className="article-quote">
      <StyledQuoteBlock>
        <Row gap={8} alignItems="flex-start">
          <Col gap={0}>
            <ArticleTypo.label.medium><RenderRichText richText={richText} /></ArticleTypo.label.medium>
            {!!children && <StyledChildrenIndent><RenderArticleContent contents={children} /></StyledChildrenIndent>}
          </Col>
        </Row>
      </StyledQuoteBlock>
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
 * .quoteBlock {
 *   border-left: 2px solid var(--semantic-line-normal);
 *   padding: 24px;
 * }
 *
 * .quoteIcon {
 *   font-size: 24px;
 * }
 *
 * .childrenIndent {
 *   padding-left: 24px;
 * }
 *
 * ============================================ */
