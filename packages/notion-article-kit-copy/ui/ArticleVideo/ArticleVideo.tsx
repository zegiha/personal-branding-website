'use client'

import { Col } from "../shared/FlexBox";
import type { TypeArticleVideo } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import st from "./style.module.css";

export function ArticleVideo({ url, format, caption }: TypeArticleVideo) {
  return (
    <Col className={`article-video ${st.container}`} gap={8} alignItems="center">
      {format === "youtube" ? (
        <iframe src={url} allowFullScreen className={st.iframe} />
      ) : (
        <video src={url} controls className={st.video} />
      )}
      {caption && <ArticleTypo.caption.medium $color="weak">{caption}</ArticleTypo.caption.medium>}
    </Col>
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
