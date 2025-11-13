'use client'

import { Col } from "../shared/FlexBox";
import type { TypeArticleImage } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import { useState } from "react";
import st from "./style.module.css";

export function ArticleImage({ url, alt, width, height, caption }: TypeArticleImage) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Col className={`article-image ${st.container}`} gap={8} alignItems="center">
      <img
        onLoad={() => setIsLoading(false)}
        src={url}
        alt={alt}
        width={width}
        height={height}
        className={`${st.image} ${isLoading ? st.imageLoading : ''}`}
      />
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
