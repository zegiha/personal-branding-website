import { Col, Row, uiMap } from "sdu-kit";
import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleBulletedList, TypeArticleContent } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { RenderArticleContent } from "../RenderArticleContent";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledListItem = styled.li`
  list-style-type: none;
`;

const StyledListContent = styled(Row)`
  margin-top: var(--article-margin-top-normal);
  margin-bottom: var(--article-margin-bottom-normal);
`;

const StyledListMarker = styled(ArticleTypo.label.medium)`
  min-width: var(--article-list-marker-width);
`;

const StyledChildrenIndent = styled(Col)`
  padding-left: var(--article-indent-nested);
`;

export function ArticleBulletedList({
  richText,
  children,
}: Omit<TypeArticleBulletedList, "type" | "children"> & { children?: Array<TypeArticleContent | undefined> }) {
  return (
    <ul className="article-bulleted-list">
      <StyledListItem className="article-bulleted-list">
        <StyledListContent gap={0}>
          <StyledListMarker className="ul-item"/>
          <ArticleTypo.label.medium >
            <RenderRichText richText={richText} />
          </ArticleTypo.label.medium>
        </StyledListContent>
        {!!children && (
          <StyledChildrenIndent gap={0}>
            <RenderArticleContent contents={children} />
          </StyledChildrenIndent>
        )}
      </StyledListItem>
    </ul>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .listItem {
 *   list-style-type: none;
 * }
 *
 * .listContent {
 *   padding: 6px;
 * }
 *
 * .listMarker {
 *   min-width: 24px;
 * }
 *
 * .childrenIndent {
 *   padding-left: 24px;
 * }
 *
 * ============================================ */
