'use client'

import { Col } from "sdu-kit";
import { styled } from "@linaria/react";
import type { TypeArticleVideo } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledContainer = styled(Col)`
  margin-top: var(--article-margin-top-xstrong);
  margin-bottom: var(--article-margin-bottom-strong);
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
  background-color: var(--article-box-background-color);
  border: 1px solid var(--article-line);
  border-radius: var(--article-radius);
`;

const StyledIframe = styled.iframe`
  width: 100%;
  aspect-ratio: var(--article-media-aspect-ratio);
  background-color: var(--article-box-background-color);
  border: 1px solid var(--article-line);
  border-radius: var(--article-radius);
`;

export function ArticleVideo({ url, format, caption }: TypeArticleVideo) {
  return (
    <StyledContainer className="article-video" gap={8} alignItems="center">
      {format === "youtube" ? (
        <StyledIframe src={url} allowFullScreen />
      ) : (
        <StyledVideo src={url} controls />
      )}
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
 * .video {
 *   width: 100%;
 *   height: auto;
 *   object-fit: cover;
 *   background-color: var(--semantic-container-even);
 *   border: 1px solid var(--semantic-line-normal);
 *   border-radius: var(--radius-large);
 * }
 *
 * .iframe {
 *   width: 100%;
 *   aspect-ratio: 16 / 9;
 *   background-color: var(--semantic-container-even);
 *   border: 1px solid var(--semantic-line-normal);
 *   border-radius: var(--radius-large);
 * }
 *
 * ============================================ */
