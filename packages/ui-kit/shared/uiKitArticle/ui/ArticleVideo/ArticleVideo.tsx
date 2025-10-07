import { Col, Typo } from "../../../../foundation";
import type { TypeArticleVideo } from "../../type";
import st from "./style.module.css";

export function ArticleVideo({ url, caption }: TypeArticleVideo) {
  return (
    <Col className={st.container} gap={8} alignItems="center">
      <video src={url} controls className={st.video} />
      {caption && <Typo.caption.medium color="weak">{caption}</Typo.caption.medium>}
    </Col>
  );
}
