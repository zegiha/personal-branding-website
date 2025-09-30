import { IconButton } from "../../../atom";
import { Row } from "../../../foundation";
import type { TypeCarouselNavigationProps } from "../type";

export function CarouselNavigation({ className, swiperRef }: TypeCarouselNavigationProps) {
  return (
    <Row className={className} width={"fit-content"} gap={8}>
      <IconButton
        type={"button"}
        iconKey={"chevron_left"}
        size={"medium"}
        color={"fill"}
        onClick={() => {
          if (swiperRef.current?.allowSlidePrev) swiperRef.current.slidePrev();
        }}
      />
      <IconButton
        type={"button"}
        iconKey={"chevron_right"}
        size={"medium"}
        color={"fill"}
        onClick={() => {
          if (swiperRef.current?.allowSlideNext) swiperRef.current.slideNext();
        }}
      />
    </Row>
  );
}
