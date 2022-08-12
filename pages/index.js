import EmblaCarousel from "../components/slider/embla";
import Image from "next/image";
import Artwork from "../public/Artwork5.png";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-left items-center">
        <div className="w-9/12 left-0 absolute z-50">
          <EmblaCarousel />
        </div>
        <div className="w-4/12 absolute z-40 right-0">
          <div className="w-full h-screen relative right-0">
            <Image src={Artwork} layout={"fill"} objectFit={"cover"} />
          </div>
        </div>
        <div className="w-full h-[80%] absolute z-10 bg-blue-200"></div>
        <div className="absolute z-20 top-6 left-10 text-7xl font-bold text-[#0D47A1]">
          OUR SERVICE
        </div>
      </div>
    </>
  );
}
