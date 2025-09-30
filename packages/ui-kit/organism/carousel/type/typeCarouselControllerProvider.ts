import type { RefObject } from "react";
import type { SwiperClass } from "swiper/react";
import type { TypeCarouselProps } from "./typeCarouselProps";

export type TypeCarouselControllerProvider = {
  swiperRef: RefObject<SwiperClass | null>;
} & Pick<TypeCarouselProps, "controllerType" | "controllerClassName">;
