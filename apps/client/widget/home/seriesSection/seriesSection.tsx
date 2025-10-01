"use server";

import { HeadlineSection, LinkButton } from "ui-kit/atom";
import { Grid, Row } from "ui-kit/foundation";
import { SeriesCard } from "@/components/seriesCard/seriesCard";
import { SchemeSerieses } from "@/widget/home/seriesSection/schemeArticles";

export async function SeriesSection() {
  const data = await fetch(`${process.env.BASE_URL}/api/series`).then((res) => res.json());
  const zodParse = SchemeSerieses.safeParse(data);

  if (zodParse.success) {
    return (
      <HeadlineSection headline={"시리즈"}>
        <Grid width={"fill-width"} col={4} gap={24}>
          {zodParse.data.map((v, i) => (
            <SeriesCard key={i} {...v} />
          ))}
        </Grid>
        <Row width={"fill-width"} justifyContent={"center"}>
          <LinkButton
            href={"/series"}
            color={"translucent-gray"}
            size={"medium"}
            label={"모든 시리즈 보기"}
          />
        </Row>
      </HeadlineSection>
    );
  }
}
