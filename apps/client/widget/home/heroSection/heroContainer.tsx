"use client";

import type { ReactNode } from "react";
import { Autoplay } from "swiper/modules";
import { Carousel } from "ui-kit/organism";
import { EnumCarouseControllerType } from "ui-kit/organism/carousel/type";
import st from "./heroContainer.module.css";

export default function ({ children }: { children: ReactNode }) {
  return (
    <Carousel
      width={"fill-width"}
      swiperProps={{
        modules: [Autoplay],
        loop: true,
        // autoplay: { delay: 3000, pauseOnMouseEnter: true },
        speed: 640,
      }}
      controllerType={EnumCarouseControllerType.NAVIGATION}
      controllerClassName={st.buttonGroup}
    >
      {children}
    </Carousel>
  );
}
