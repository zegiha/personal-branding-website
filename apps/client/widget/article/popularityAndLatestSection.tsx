'use client';

import {Suspense, useState} from "react";
import {QUERY_KEYS} from "@/consts";
import {ArticleSummary, BlurImageEntity, PaginationEntity} from "@/types";
import {useInfiniteQueryWithCarousel} from "@/hooks";
import {
  Section,
  ArticleCard,
  SegmentControl,
  ArticleCardContainer,
  ArticleCardSkeleton,
  type Carousel as CarouselType
} from "@/components"
import {lazy} from "react";
import {getSortedArticleSummary} from "@/widget/article/utils/getSortedArticleSummary";

const Carousel = lazy(() => import('@/components').then(m => ({default: m.Carousel}))) as typeof CarouselType

export function PopularityAndLatestSection({
  initialData,
}: {
  initialData: PaginationEntity<BlurImageEntity<ArticleSummary>>
}) {
  const [activeKey, setActiveKey] = useState<'POPULARITY' | 'LATEST'>('POPULARITY');

  const {
    data,
    status,
    carouselProps,
  } = useInfiniteQueryWithCarousel<BlurImageEntity<ArticleSummary>>({
    queryKey: [activeKey === 'POPULARITY' ? QUERY_KEYS.ARTICLE_LIST_POPULARITY : QUERY_KEYS.ARTICLE_LIST_LATEST],
    queryFn: ({pageParam}) => {
      return getSortedArticleSummary({
        pageParam,
        activeKey,
      })
    },
    initialData: activeKey === 'POPULARITY' ? {
      pages: [{...initialData}],
      pageParams: [1]
    } : undefined,
  })

  return (
    <Section gap={24}>
      <SegmentControl
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        items={[
          {key: 'POPULARITY', label: '인기'},
          {key: 'LATEST', label: '최신'},
        ]}
      />
      <Suspense fallback={<Fallback initialData={initialData}/>}>
        <Carousel
          key={activeKey}
          pagination={true}
          navigation={true}
          controlGroupPosition="center"
          gap={32}
          {...carouselProps}
          data={data}
          status={status}
          Success={Success}
          PendingOrFetching={PendingOrFetching}
          Error={() => <>Error</>}
          Wrapper={ArticleCardContainer}
        />
      </Suspense>
    </Section>
  )
}

function Fallback({
  initialData,
}: {
  initialData: PaginationEntity<BlurImageEntity<ArticleSummary>>
}) {
  return (
    <ArticleCardContainer>
      {initialData.data.map((v, i) => (
        <ArticleCard key={i} {...v}/>
      ))}
    </ArticleCardContainer>
  )
}

function Success({
  data
}: {
  data: Array<BlurImageEntity<ArticleSummary>>
}) {
  return data.map((v, i) => (
    <ArticleCard key={i} {...v} isPriority={i < 2} />
  ))
}

function PendingOrFetching() {
  return Array.from({length: 8}).map((_, i) => (
    <ArticleCardSkeleton key={i}/>
  ))
}
