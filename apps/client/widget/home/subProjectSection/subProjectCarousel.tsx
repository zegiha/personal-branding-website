"use client";

import type { ReactNode } from "react";
import { Carousel } from "ui-kit/organism";
import { EnumCarouseControllerType } from "ui-kit/organism/carousel/type";

export function SubProjectCarousel({ children }: { children: ReactNode }) {
  return <Carousel controllerType={EnumCarouseControllerType.NAVIGATION}>{children}</Carousel>;
}
