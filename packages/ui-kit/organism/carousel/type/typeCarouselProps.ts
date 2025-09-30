import type { TypeWidth } from "design-kit";
import type { ReactNode } from "react";
import type { SwiperProps } from "swiper/react";
import type { EnumCarouseControllerType } from "./enumCarouseControllerType";

export type TypeCarouselProps = {
  width?: TypeWidth;
  controllerClassName?: string;
  controllerType: EnumCarouseControllerType;
  swiperProps: SwiperProps;
  children: ReactNode;
};
