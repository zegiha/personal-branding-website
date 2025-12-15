'use client'

import type { TypeArticleVideo } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import * as st from "./style.css";

export function ArticleVideo({ url, format, caption }: TypeArticleVideo) {
  return (
    <div className={`article-video ${st.container}`}>
      {format === "youtube" ? (
        <iframe src={url} allowFullScreen className={st.iframe} />
      ) : (
        <video src={url} controls className={st.video} />
      )}
      {caption && <ArticleTypo.caption.medium color="weak">{caption}</ArticleTypo.caption.medium>}
    </div>
  );
}
