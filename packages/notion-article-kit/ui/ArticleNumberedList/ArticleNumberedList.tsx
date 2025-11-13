
import { Col, Row } from "sdu-kit";
import { styled } from "@linaria/react";
import { RenderRichText } from "../RenderRichText";
import type { TypeArticleContent, TypeArticleNumberedList } from "../../type";
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

const StyledMarkerSize = styled(ArticleTypo.label.medium)`
  min-width: var(--article-list-marker-width);
  max-height: var(--article-list-marker-height);
  min-height: var(--article-list-marker-height);
`;

const StyledChildrenIndent = styled(Col)`
  padding-left: var(--article-margin-nested);
`;

export function ArticleNumberedList({
  richText,
  children,
}: Omit<TypeArticleNumberedList, "type" | "children"> & {
  children?: Array<TypeArticleContent | undefined>;
}) {
  return (
    <ol className="article-numbered-list">
      <StyledListItem>
        <StyledListContent gap={0}>
          <StyledMarkerSize className="ol-item"  />
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
    </ol>
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
 *   width: 24px;
 *   height: 27px;
 *   background-color: red;  // DEBUG - should be removed
 *   flex-shrink: 0;
 * }
 *
 * .childrenIndent {
 *   padding-left: 24px;
 * }
 *
 * .markerSize {
 *   min-width: 24px;
 * }
 *
 * ============================================ */
