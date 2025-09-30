import { CarouselNavigation } from "../../../molecule";
import { EnumCarouseControllerType, type TypeCarouselControllerProvider } from "../type";

export function CarouselControllerProvider({
  swiperRef,
  controllerClassName,
  controllerType,
}: TypeCarouselControllerProvider) {
  if (controllerType === EnumCarouseControllerType.NAVIGATION) {
    return <CarouselNavigation className={controllerClassName} swiperRef={swiperRef} />;
  }
  if (controllerType === EnumCarouseControllerType.PAGINATION)
    throw new Error("Pagination carouse controller does not ready");
}
