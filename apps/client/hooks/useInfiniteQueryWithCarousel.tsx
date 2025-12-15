'use client'

import {useInfiniteQuery, UseInfiniteQueryOptions} from "@tanstack/react-query";
import {CarouselProps} from "@/components";
import {useEffect, useState} from "react";

export interface DefaultPagination<T>{
  currentPage: number,
  totalPage: number,
  totalData: number,
  data: Array<T>
}

export function useInfiniteQueryWithCarousel<T>({
  queryKey,
  queryFn,
  initialData,
}: {
  queryKey: UseInfiniteQueryOptions<DefaultPagination<T>>['queryKey']
  queryFn: UseInfiniteQueryOptions<DefaultPagination<T>>['queryFn']
  initialData?: UseInfiniteQueryOptions<DefaultPagination<T>>['initialData']
}): ReturnType<typeof useInfiniteQuery<DefaultPagination<T>>> & {
  carouselProps: Pick<CarouselProps<T>, 'onNext' | 'onPrevious' | 'onSlideTo' | 'maxPage'>
}  {
  const [fetchNextNumber, setFetchNextNumber] = useState<number>(0);
  const [fetchPrevNumber, setFetchPrevNumber] = useState<number>(0);

  const queryRes = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.currentPage < lastPage.totalPage ? lastPage.currentPage + 1 : null
    },
    initialData
  })

  const {
    hasNextPage,
    fetchNextPage,
    hasPreviousPage,
    fetchPreviousPage,
    isFetching,
  } = queryRes

  useEffect(() => {
    if(isFetching) return
    if(fetchNextNumber) {
      if(!hasNextPage) {
        setFetchNextNumber(0)
        return
      }
      fetchNextPage()
      setFetchNextNumber(p => p - 1)
    }
    if(fetchPrevNumber) {
      if(!hasPreviousPage) {
        setFetchPrevNumber(0)
        return
      }
      fetchPreviousPage()
      setFetchPrevNumber(p => p - 1)
    }
  }, [isFetching, fetchNextNumber, fetchPrevNumber, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage])

  return {
    ...queryRes,
    carouselProps: {
      onNext: () => {setFetchNextNumber(p => p + 1)},
      onPrevious: () => {setFetchPrevNumber(p => p + 1)},
      onSlideTo: ({pastPage, newPage}) => {
        const isNext = pastPage < newPage;
        const pageCount = Math.abs(newPage - pastPage);

        if(isNext) {
          setFetchNextNumber(p => p + pageCount);
        } else {
          setFetchPrevNumber(p => p + pageCount);
        }
      },
      maxPage: queryRes?.data?.pages[0].totalPage ?? 0
    },
  }
}