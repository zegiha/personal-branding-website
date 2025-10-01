"use server";

import { HeadlineSection, LinkButton } from "ui-kit/atom";
import { Grid, Row } from "ui-kit/foundation";
import { ArticleCard } from "@/components/articleCard/articleCard";
import { SchemeArticles } from "@/widget/home/blogSection/schemeArticles";

export async function BlogSection() {
  const data = await fetch(`${process.env.BASE_URL}/api/blog/article`).then((res) => res.json());
  const parsedData = SchemeArticles.safeParse(data);

  if (parsedData.success) {
    return (
      <HeadlineSection headline={"블로그"}>
        <Grid width={"fill-width"} col={4} gap={24}>
          {parsedData.data.map((v, i) => (
            <ArticleCard key={i} {...v} />
          ))}
        </Grid>
        <Row width={"fill-width"} justifyContent={"center"}>
          <LinkButton
            href={"/blog"}
            size={"medium"}
            color={"translucent-gray"}
            label={"블로그로 가기"}
          />
        </Row>
      </HeadlineSection>
    );
  }
}
