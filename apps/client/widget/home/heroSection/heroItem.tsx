"use server";

import Image from "next/image";
import { LinkButton } from "ui-kit/atom";
import { Col, Typo } from "ui-kit/foundation";
import type { TypeHeroItemProps } from "@/widget/home/heroSection/typeHeroItem";
import st from "./heroItem.module.css";

export async function HeroItem({
  bannerUrl,
  headline,
  subHeadline,
  linkUrl,
  linkLabel,
}: TypeHeroItemProps) {
  return (
    <div className={st.container}>
      <div className={st.bannerWrapper}>
        <Image src={bannerUrl} alt={`hero banner`} fill={true} fetchPriority={"high"} />
      </div>
      <Col className={st.textWrapper} width={"fill-width"} gap={24} justifyContent={"center"}>
        <Col width={"fill-width"} gap={12}>
          <Typo.display.medium>{headline}</Typo.display.medium>
          <Typo.label.large>{subHeadline}</Typo.label.large>
        </Col>
        <LinkButton
          width={"fit-content"}
          href={linkUrl}
          size={"medium"}
          color={"gray"}
          label={linkLabel}
          trailIcon={"open_in_new"}
        />
      </Col>
    </div>
  );
}
