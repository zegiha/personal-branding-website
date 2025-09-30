"use server";

import { Row, Typo } from "ui-kit/foundation";
import HeroContainer from "@/widget/home/heroSection/heroContainer";
import { HeroItem } from "@/widget/home/heroSection/heroItem";
import { SchemeHeroItemProps } from "@/widget/home/heroSection/schemeHeroItemProps";
import st from "./heroSection.module.css";

export async function HeroSection() {
  const data = await fetch(`http://localhost:3000/api/hero`).then((res) => res.json());
  const parsedData = SchemeHeroItemProps.safeParse(data);

  if (parsedData.success) {
    return (
      <Row className={st.container} width={"fill-width"} justifyContent={"center"}>
        <Row className={st.wrapper} width={"fill-width"}>
          <HeroContainer>
            {parsedData.data.map((v, i) => (
              <HeroItem key={i} {...v} />
            ))}
          </HeroContainer>
        </Row>
      </Row>
    );
  } else {
    return <Typo.label.medium>Type is not matching</Typo.label.medium>;
  }
}
