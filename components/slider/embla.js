import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./button";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
// import "../css/embla.css";
import Image from "next/dist/client/image";
import Pic1 from "../../public/cat.jpg";

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 4,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <Image src={Pic1} layout={"responsive"} objectFit={"cover"} />
            </div>
          </div>
          {/* ))} */}
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <Image src={Pic1} layout={"responsive"} objectFit={"cover"} />
            </div>
          </div>
          {/* ))} */}
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <Image src={Pic1} layout={"responsive"} objectFit={"cover"} />
            </div>
          </div>
          {/* ))} */}
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <Image src={Pic1} layout={"responsive"} objectFit={"cover"} />
            </div>
          </div>
          {/* ))} */}
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <Image src={Pic1} layout={"responsive"} objectFit={"cover"} />
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      <div className="">
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
