'use client'

import { Col } from "sdu-kit";
import { styled } from "@linaria/react";
import type { TypeArticleImage } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { useState } from "react";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledContainer = styled(Col)`
  margin-top: var(--article-margin-top-xstrong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

const StyledImage = styled.img<{isLoading: boolean}>`
  width: 100%;
  height: 100%;
  background-color: var(--article-box-background-color);
  border: 1px solid var(--article-line);
  border-radius: var(--article-radius);
  object-fit: cover;
  aspect-ratio: ${({isLoading}) => isLoading ? "var(--article-media-aspect-ratio)" : ""};
`;

export function ArticleImage({ url, alt, width, height, caption }: TypeArticleImage) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StyledContainer className="article-image" gap={8} alignItems="center">
  <StyledImage onLoad={() => setIsLoading(false)} src={url} alt={alt} width={width} height={height} isLoading={isLoading} />
      {caption && <ArticleTypo.caption.medium $color="weak">{caption}</ArticleTypo.caption.medium>}
    </StyledContainer>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .container {
 *   padding: 20px 12px 12px;
 * }
 *
 * .image {
 *   width: 100%;
 *   height: 100%;
 *   background-color: var(--semantic-fill-weak);
 *   border: 1px solid var(--article-line);
 *   border-radius: var(--article-radius);
 *   object-fit: cover;
 * }
 *
 * ============================================ */
