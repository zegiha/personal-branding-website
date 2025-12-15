'use client'

import {getArticleList} from "@/widget/article/utils/getArticleList";
import {ArticleSummary, BlurImageEntity, PaginationEntity} from "@/types";
import {useInfiniteQuery} from "@tanstack/react-query";
import {QUERY_KEYS} from "@/consts";
import {ArticleListItem, Section, Button} from "@/components";
import {buttonWrap} from "@/widget/article/styles/allArticleList.css";

export function AllArticleSection({
  initialData,
}: {
  initialData: PaginationEntity<BlurImageEntity<ArticleSummary>>;
}) {
  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS['ARTICLE_LIST']],
    queryFn: ({pageParam}) => getArticleList({page: pageParam}),
    initialPageParam: 1,
    initialData: {
      pages: [{...initialData}],
      pageParams: [1],
    },
    getNextPageParam: (last) => {
      return last.currentPage === last.totalPage ? undefined : last.currentPage + 1
    },
    select: (v) => {
      return v.pages.map((v) => v.data).flat()
    }
  })

  return (
    <Section headline="전체" gap={24}>
      {status === 'success' && !isFetching ? (
        data.map((v, i) => (
          <ArticleListItem
            key={`${v.title}-${i}`}
            {...v}
            isPriority={i < 4}
          />
        ))
      ): (
        initialData.data.map((v, i) => (
          <ArticleListItem
            key={`${v.title}-${i}`}
            {...v}
            isPriority={i < 4}
          />
        ))
      )}
      {hasNextPage && (
        <div className={buttonWrap}>
          <Button color={'gray'} translucent label={'더보기'} onClick={fetchNextPage}/>
        </div>
      )}
    </Section>
  )
}