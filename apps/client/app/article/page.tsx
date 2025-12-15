'use server'

import {
  Header,
  SectionGroup
} from "@/components";
import { PopularityAndLatestSection } from "@/widget/article/popularityAndLatestSection";
import {AllArticleSection} from "@/widget/article/allArticleSection";
import {getSortedArticleSummary} from "@/widget/article/utils/getSortedArticleSummary";
import {getArticleList} from "@/widget/article/utils/getArticleList";

export default async function Page() {
  const popularityAndLatestSectionInitialData = await getSortedArticleSummary({pageParam: 1, activeKey: 'POPULARITY'});
  const allArticleSectionInitialData = await getArticleList({page: 1})

  return (
    <>
      <Header />
      <SectionGroup backgroundColor={'odd'}>
        <PopularityAndLatestSection initialData={popularityAndLatestSectionInitialData}/>
        <AllArticleSection initialData={allArticleSectionInitialData}/>
      </SectionGroup>
    </>
  )
}