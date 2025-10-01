import Image from "next/image";
import { Badge } from "ui-kit/atom";
import { Col, Row, Typo } from "ui-kit/foundation";
import type { TypeSeriesCard } from "@/components/seriesCard/typeSeriesCard";
import st from "./seriesCard.module.css";

export function SeriesCard({
  coverUrl,
  name,
  description,
  linkUrl,
  involvedSeriesNumber,
  involvedArticleNumber,
}: TypeSeriesCard) {
  return (
    <a className={st.container} href={linkUrl}>
      <div className={st.coverWrapper}>
        <Image src={coverUrl} alt={"series cover"} fill />
      </div>
      <Col className={st.contentContainer} width={"fill-width"} gap={12}>
        <Typo.label.large className={st.hoveredUnderline} width={"fill-width"} fontWeight={"bold"}>
          {name}
        </Typo.label.large>
        <Typo.label.medium width={"fill-width"}>{description}</Typo.label.medium>
        <Row width={"fill-width"} gap={8} wrap>
          {involvedSeriesNumber && (
            <Badge
              color={"translucent-gray"}
              label={`${involvedSeriesNumber}`}
              leadIcon={"book_2"}
            />
          )}
          {involvedArticleNumber && (
            <Badge
              color={"translucent-gray"}
              label={`${involvedArticleNumber}`}
              leadIcon={"article"}
            />
          )}
        </Row>
      </Col>
    </a>
  );
}
