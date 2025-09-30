import { getWidthClass } from "design-kit/helper/getWidthClass";
import { getWidthStyle } from "design-kit/helper/getWidthStyle";
import { Children, useRef } from "react";
import "swiper/css";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";
import { Col } from "../../../foundation";
import type { TypeCarouselProps } from "../type";
import st from "./carousel.module.css";
import { CarouselControllerProvider } from "./carouselControllerProvider";

export function Carousel({
  width,
  controllerClassName,
  controllerType,
  swiperProps,
  children,
}: TypeCarouselProps) {
  const ref = useRef<SwiperClass | null>(null);
  const isWidth = width !== undefined;

  return (
    <Col className={st.container} width={width} gap={24}>
      <Swiper
        {...swiperProps}
        onSwiper={(sw) => {
          ref.current = sw;
          if (swiperProps?.onSwiper) swiperProps.onSwiper(sw);
        }}
        className={getWidthClass(width === "fill-flex" ? "fill-width" : width)}
        style={isWidth ? getWidthStyle(width) : { width: "100%" }}
      >
        {Children.map(children, (v, i) => (
          <SwiperSlide key={i}>{v}</SwiperSlide>
        ))}
      </Swiper>
      <CarouselControllerProvider
        swiperRef={ref}
        controllerType={controllerType}
        controllerClassName={controllerClassName ?? st.controllerDefault}
      />
    </Col>
  );
}
