import EmblaCarousel from "../components/slider/embla";
import Image from "next/image";
import Artwork from "../public/Artwork3.png";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-yellow-100 flex justify-left items-center">
        <div className="w-9/12 absolute z-50">
          <EmblaCarousel />
        </div>
        <div className="w-3/12 h-96 absolute z-40 right-0">
          <Image src={Artwork} layout={"responsive"} objectFit={"cover"} />
        </div>
      </div>
    </>
  );
}
