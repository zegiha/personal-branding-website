import Image from "next/image";
import { Col, Typo } from "../../../../foundation";
import type { TypeArticleImage } from "../../type";
import st from "./style.module.css";

export function ArticleImage({ url, alt, width, height, caption }: TypeArticleImage) {
  return (
    <Col className={st.container} gap={8} alignItems="center">
      <Image className={st.image} src={url} alt={alt} width={width} height={height} />
      {caption && <Typo.caption.medium color="weak">{caption}</Typo.caption.medium>}
    </Col>
  );
}
