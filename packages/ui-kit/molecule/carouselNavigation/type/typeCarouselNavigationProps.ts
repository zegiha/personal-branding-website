import type { RefObject } from "react";
import type { SwiperClass } from "swiper/react";

export type TypeCarouselNavigationProps = {
  className?: string;
  swiperRef: RefObject<SwiperClass | null>;
};
