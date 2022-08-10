import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./button";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
// import "../css/embla.css";

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
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
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img
                className="embla__slide__img"
                src={
                  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt="A cool cat."
              />
            </div>
          </div>
          {/* ))} */}
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img
                className="embla__slide__img"
                src={
                  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt="A cool cat."
              />
            </div>
          </div>
          {/* ))} */}
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img
                className="embla__slide__img"
                src={
                  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt="A cool cat."
              />
            </div>
          </div>
          {/* ))} */}
          {/* {slides.map((index) => ( */}
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img
                className="embla__slide__img"
                src={
                  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt="A cool cat."
              />
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
