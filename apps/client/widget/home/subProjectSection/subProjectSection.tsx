"use server";

import { HeadlineSection } from "ui-kit/atom";
import { Typo } from "ui-kit/foundation";
import { chunk2DFrom1D } from "@/helper/chunk2DFrom1D";
import { SchemeSubProjectGridItem } from "@/widget/home/subProjectSection/schemeSubProjectGridItem";
import { SubProjectCarousel } from "@/widget/home/subProjectSection/subProjectCarousel";
import { SubProjectGrid } from "@/widget/home/subProjectSection/subProjectGrid";
import { SubProjectGridItem } from "@/widget/home/subProjectSection/subProjectGridItem";

export async function SubProjectSection() {
  const data = await fetch(`${process.env.BASE_URL}/api/subproject`).then((res) => res.json());
  const validateData = SchemeSubProjectGridItem.safeParse(data);

  if (validateData.success) {
    return (
      <HeadlineSection headline={"서브프로젝트"}>
        <SubProjectCarousel>
          {chunk2DFrom1D(validateData.data, 4).map((v, i) => (
            <SubProjectGrid key={i}>
              {v.map((v, i) => (
                <SubProjectGridItem key={i} {...v} />
              ))}
            </SubProjectGrid>
          ))}
        </SubProjectCarousel>
      </HeadlineSection>
    );
  } else {
    return <Typo.headline.medium>타입에러</Typo.headline.medium>;
  }
}
