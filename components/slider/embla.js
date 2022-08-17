import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./button";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
// import "../css/embla.css";
import Image from "next/dist/client/image";
import Pic1 from "../../public/duit.jpg";

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
          {/* <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <Image src={Pic1} layout={"responsive"} objectFit={"cover"} />
            </div>
          </div> */}
          {/* ))} */}
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <div className="border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
                <div className="w-full h-36 rounded-t-md">
                  <Image
                    src={Pic1}
                    layout={"responsive"}
                    objectFit={"cover"}
                    className={"rounded-t-md"}
                  />
                </div>
                <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                  <p className="text-lg font-semibold text-left">
                    Pinjaman bunga 1%
                  </p>
                  <p className="text-sm text-justify pb-2">
                    Vestibulum sit amet tortor libero lobortis semper at et
                    odio. In eu tellus tellus. Pellentesque ullamcorper
                    ultrices. Aenean facilisis vitae purus facilisis semper.
                  </p>
                  <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                    Lihat detail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <div className="border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
                <div className="w-full h-36 rounded-t-md">
                  <Image
                    src={Pic1}
                    layout={"responsive"}
                    objectFit={"cover"}
                    className={"rounded-t-md"}
                  />
                </div>
                <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                  <p className="text-lg font-semibold text-left">
                    Pinjaman bunga 1%
                  </p>
                  <p className="text-sm text-justify pb-2">
                    Vestibulum sit amet tortor libero lobortis semper at et
                    odio. In eu tellus tellus. Pellentesque ullamcorper
                    ultrices. Aenean facilisis vitae purus facilisis semper.
                  </p>
                  <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                    Lihat detail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <div className="border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
                <div className="w-full h-36 rounded-t-md">
                  <Image
                    src={Pic1}
                    layout={"responsive"}
                    objectFit={"cover"}
                    className={"rounded-t-md"}
                  />
                </div>
                <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                  <p className="text-lg font-semibold text-left">
                    Pinjaman bunga 1%
                  </p>
                  <p className="text-sm text-justify pb-2">
                    Vestibulum sit amet tortor libero lobortis semper at et
                    odio. In eu tellus tellus. Pellentesque ullamcorper
                    ultrices. Aenean facilisis vitae purus facilisis semper.
                  </p>
                  <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                    Lihat detail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <div className="border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
                <div className="w-full h-36 rounded-t-md">
                  <Image
                    src={Pic1}
                    layout={"responsive"}
                    objectFit={"cover"}
                    className={"rounded-t-md"}
                  />
                </div>
                <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                  <p className="text-lg font-semibold text-left">
                    Pinjaman bunga 1%
                  </p>
                  <p className="text-sm text-justify pb-2">
                    Vestibulum sit amet tortor libero lobortis semper at et
                    odio. In eu tellus tellus. Pellentesque ullamcorper
                    ultrices. Aenean facilisis vitae purus facilisis semper.
                  </p>
                  <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                    Lihat detail
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner relative rounded-md">
              <div className="border border-[#2196F3] bg-white rounded-md shadow-md shadow-blue-300">
                <div className="w-full h-36 rounded-t-md">
                  <Image
                    src={Pic1}
                    layout={"responsive"}
                    objectFit={"cover"}
                    className={"rounded-t-md"}
                  />
                </div>
                <div className="w-full rounded-b-md px-2 py-2 flex flex-col space-y-3">
                  <p className="text-lg font-semibold text-left">
                    Pinjaman bunga 1%
                  </p>
                  <p className="text-sm text-justify pb-2">
                    Vestibulum sit amet tortor libero lobortis semper at et
                    odio. In eu tellus tellus. Pellentesque ullamcorper
                    ultrices. Aenean facilisis vitae purus facilisis semper.
                  </p>
                  <button className="border border-blue-500 rounded-md px-2 py-1 font-semibold hover:text-blue-500">
                    Lihat detail
                  </button>
                </div>
              </div>
            </div>
          </div>
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
