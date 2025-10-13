import { Col, Typo } from "../../../../foundation";
import type { TypeArticleVideo } from "../../type";
import st from "./style.module.css";

export function ArticleVideo({ url, format, caption }: TypeArticleVideo) {
  return (
    <Col className={st.container} gap={8} alignItems="center">
      {format === "youtube" ? (
        <iframe className={st.iframe} src={url} allowFullScreen></iframe>
      ) : (
        <video src={url} controls className={st.video} />
      )}
      {caption && <Typo.caption.medium color="weak">{caption}</Typo.caption.medium>}
    </Col>
  );
}
