import { Col } from "sdu-kit";
import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleParagraph } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledParagraph = styled(ArticleTypo.label.medium)`
  margin-top: var(--article-margin-top-normal);
  margin-bottom: var(--article-margin-bottom-normal);
`;

const StyledChildrenIndent = styled(Col)`
  padding-left: var(--article-indent-nested);
`;

export function ArticleParagraph({
  richText,
  children,
}: Omit<TypeArticleParagraph, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <>
      <StyledParagraph className="article-paragraph">
        <RenderRichText richText={richText} />
      </StyledParagraph>
      {!!children && <StyledChildrenIndent><RenderArticleContent contents={children} /></StyledChildrenIndent>}
    </>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .paragraph {
 *   padding: 6px;
 * }
 *
 * .childrenIndent {
 *   padding-left: 24px;
 * }
 *
 * ============================================ */
