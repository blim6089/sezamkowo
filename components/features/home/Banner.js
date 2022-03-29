import Image from "next/image";
import Link from "next/link";
import BannerImage from "@/assets/images/home/banner.png";
import HomeWarning from "@/assets/images/home/home-warning.svg";
import HomeDanger from "@/assets/images/home/home-danger.svg";

const Banner = () => {
  return (
    <div>
      <Image src={BannerImage} />
      <div className="relative bg-white pt-[60px] pb-[102px] px-[172px]">
        <div className="w-[600px] h-[143px] rounded-full bg-white text-center pt-[25px] absolute top-[-50px] left-1/2 -translate-x-1/2">
          <span className="font-bold text-5xl text-[#605954]">
            Witaj w sezamkowie
          </span>
        </div>
        <p className="text-[23px] text-center mb-20 relative z-10">
          – jest to wyjątkowy żłobek w Warszawie. Wyróżnia nas przede wszystkim
          domowa atmosfera, małe, kameralne grupy oraz spokojne i bezpieczne
          miejsce. Naszym celem jest tworzenie miejsca pełnego akceptacji i
          poszanowania dla potrzeb każdego dziecka.
        </p>
        <div className="flex justify-center">
          <Link href="/location/new">
            <a className="mx-14 flex items-center bg-white shadow hover:shadow-lg transition rounded-2xl p-10">
              <div className="w-[102px] h-[90px] flex items-center justify-center rounded-2xl bg-[#FFF3EB] border border-[#FFA25E]">
                <Image src={HomeWarning} />
              </div>
              <span className="mx-5 font-bold text-2xl text-[#FFA25E]">
                Nowy Wawer
              </span>
            </a>
          </Link>
          <Link href="/location/old">
            <a className="mx-14 flex items-center bg-white shadow hover:shadow-lg transition rounded-2xl p-10">
              <div className="w-[102px] h-[90px] flex items-center justify-center rounded-2xl bg-[#FFEDF0] border border-[#FF8FA3]">
                <Image src={HomeDanger} />
              </div>
              <span className="mx-5 font-bold text-2xl text-[#FF8FA3]">
                Marysin wAwerski
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
