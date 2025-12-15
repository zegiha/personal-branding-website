import type { TypeArticleImage } from "../../type";
import { ArticleTypo } from "../ArticleTypo";
import * as st from "./style.css";

export function ArticleImage({ url, alt, width, height, caption }: TypeArticleImage) {
  return (
    <div className={`article-image ${st.container}`}>
      <img
        src={url}
        alt={alt}
        width={width}
        height={height}
        className={st.image}
      />
      {caption && <ArticleTypo.caption.medium color="weak">{caption}</ArticleTypo.caption.medium>}
    </div>
  );
}
