'use client';

import 'swiper/css';
import { Swiper, SwiperSlide, type SwiperClass as SwiperType } from 'swiper/react';
import {useState} from 'react';
import { controlButtonGroup } from './st.css';
import { Pagination } from './pagination';
import { Navigation } from './navigation';
import type {ComponentType, PropsWithChildren} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {DefaultPagination} from "@/hooks/useInfiniteQueryWithCarousel";

export type CarouselProps<T> = {
  gap?: number
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  controlGroupPosition?: 'start' | 'center' | 'end';
  maxPage: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onSlideTo?: ({pastPage, newPage}: {pastPage: number, newPage: number}) => void;
  Success: ComponentType<{data: Array<T>}>
  PendingOrFetching: ComponentType
  Error: ComponentType
  Wrapper: ComponentType<{key?: string | number} & PropsWithChildren>
} & Pick<ReturnType<typeof useInfiniteQuery<DefaultPagination<T>>>, 'data' | 'status'>

export function Carousel<T>({
  gap=0,
  loop=false,
  navigation = true,
  pagination = true,
  controlGroupPosition = 'end',
  maxPage,
  onNext,
  onPrevious,
  onSlideTo,
  status,
  data,
  Success,
  PendingOrFetching,
  Error,
  Wrapper,
}: CarouselProps<T>) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    swiper?.slidePrev();
    onPrevious?.();
  }
  const handleNext = () => {
    swiper?.slideNext();
    onNext?.();
  }
  const handleSlideTo = (index: number) => {
    onSlideTo?.({pastPage: (activeIndex ?? 0) + 1, newPage: index + 1});
    swiper?.slideTo(index);
  }

  return (
    <>
      <Swiper
        spaceBetween={gap}
        style={{width: '100%'}}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setActiveIndex(swiper.realIndex ?? null);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        loop={loop}
      >
        {status === 'success' && data && (
          Array.from({length: maxPage}).map((_, i) => (
            <SwiperSlide key={i}>
              <Wrapper>
                {i < data.pages.length ?
                  <Success data={data.pages[i].data}/> :
                  <PendingOrFetching/>}
              </Wrapper>
            </SwiperSlide>
          ))
        )}
        {status === 'pending' && (
          <Wrapper>
            <PendingOrFetching/>
          </Wrapper>
        )}
        {status === 'error' && <Error/>}
      </Swiper>
      {(pagination || navigation) && activeIndex !== null && (
        <div className={controlButtonGroup} style={{justifyContent: controlGroupPosition}}>
          {pagination ? (
            <Pagination
              disablePrevious={activeIndex === 0 && !loop}
              disableNext={activeIndex === maxPage-1 && !loop}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            >
              {navigation && (
                <Navigation
                  handleSlideTo={handleSlideTo}
                  activeIndex={activeIndex ?? 0}
                  total={maxPage ?? 0}
                />
              )}
            </Pagination>
          ):(
            <Navigation
              handleSlideTo={handleSlideTo}
              activeIndex={activeIndex ?? 1}
              total={maxPage ?? 0}
            />
          )}
        </div>
      )}
    </>
  )
}
