"use client";

import { MoveLeft, MoveRight } from "lucide-react";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useCallback } from "react";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
  const [emplaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emplaRef}>
      <div className="flex gap-8">{children}</div>
      <div className="pt-14 flex justify-center gap-8">
        <button onClick={scrollPrev}>
          <MoveLeft size={52} className="text-muted-foreground" />
        </button>
        <button onClick={scrollNext}>
          <MoveRight size={52} className="text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
