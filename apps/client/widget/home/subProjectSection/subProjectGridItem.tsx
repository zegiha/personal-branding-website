"use server";

import classNames from "classnames";
import { getTextColorForImage, getThemeFromServer } from "design-kit/server";
import Image from "next/image";
import { Badge, LinkButton } from "ui-kit/atom";
import { Col, Row, Typo } from "ui-kit/foundation";
import type { TypeSubProjectGridItemProps } from "@/widget/home/subProjectSection/typeSubProjectGridItemProps";
import st from "./subProjectGridItem.module.css";

export async function SubProjectGridItem({
  coverUrl,
  headline,
  subHeadline,
  badges,
  linkUrl,
  linkLabel,
  moreLinkUrl,
}: TypeSubProjectGridItemProps) {
  const theme = await getThemeFromServer();
  const themeMode = await getTextColorForImage(coverUrl);

  return (
    <div className={classNames(st.cardContainer, `${theme}-${themeMode}`)}>
      <Image src={coverUrl} alt={"sub project card"} fill />
      <Typo.headline.small className={st.staticContent}>{headline}</Typo.headline.small>
      <Col className={st.notHoverContent}>
        <Typo.headline.small style={{ opacity: 0 }}>{headline}</Typo.headline.small>
      </Col>
      <Col className={st.hoverContent} width={"fill-width"} justifyContent={"space-between"}>
        <Col width={"fill-width"} gap={12}>
          <Typo.headline.small style={{ opacity: 0 }}>{headline}</Typo.headline.small>
          <Typo.label.medium>{subHeadline}</Typo.label.medium>
          <Row width={"fill-width"} gap={8} wrap>
            {badges.map((v, i) => (
              <Badge key={i} color={"translucent-gray"} leadIcon={v.icon} label={v.label} />
            ))}
          </Row>
        </Col>
        <Row width={"fill-width"} gap={12}>
          <LinkButton
            href={moreLinkUrl}
            size={"medium"}
            color={"translucent-gray"}
            label={"더보기"}
          />
          <LinkButton
            href={linkUrl}
            size={"medium"}
            color={"gray"}
            label={linkLabel}
            trailIcon={"open_in_new"}
          />
        </Row>
      </Col>
    </div>
  );
}
