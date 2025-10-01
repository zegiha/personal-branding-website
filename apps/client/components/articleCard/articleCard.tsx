import Image from "next/image";
import { Badge } from "ui-kit/atom";
import { Col, Row, Typo } from "ui-kit/foundation";
import type { TypeArticleCardProps } from "@/components/articleCard/typeArticleCardProps";
import st from "./articleCard.module.css";

export function ArticleCard({
  coverUrl,
  headline,
  readingTime,
  viewCount,
  linkUrl,
}: TypeArticleCardProps) {
  return (
    <a className={st.container} href={linkUrl}>
      <div className={st.coverWrapper}>
        <Image src={coverUrl} alt={"article card cover image"} fill />
      </div>
      <Col className={st.contentContainer} width={"fill-width"} gap={8}>
        <Typo.label.large className={st.hoveredUnderline} width={"fill-width"} color={"strong"}>
          {headline}
        </Typo.label.large>
        <Row width={"fill-width"} gap={8} wrap>
          <Badge color={"translucent-gray"} leadIcon={"schedule"} label={`${readingTime} 분`} />
          <Badge color={"translucent-gray"} leadIcon={"visibility"} label={`${viewCount}`} />
        </Row>
      </Col>
    </a>
  );
}
