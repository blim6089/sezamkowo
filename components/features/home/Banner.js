import Image from "next/image";
import Link from "next/link";
import BannerImage from "@/assets/images/home/banner.png";
import HomeWarning from "@/assets/images/home/home-warning.svg";
import SmallHomeWarning from "@/assets/images/home/small-home-warning.svg";
import HomeDanger from "@/assets/images/home/home-danger.svg";
import SmallHomeDanger from "@/assets/images/home/small-home-danger.svg";

const Banner = () => {
  return (
    <div>
      <div className="h-[240px] lg:h-auto flex">
        <Image src={BannerImage} className="object-cover" />
      </div>
      <div className="relative bg-white pt-[34px] xl:pt-[60px] pb-[26px] md:pb-[102px] px-5 2xl:px-[172px]">
        <div className="w-[335px] xl:w-[600px] h-[72px] xl:h-[143px] rounded-full bg-white text-center pt-4 xl:pt-[25px] absolute -top-9 xl:top-[-50px] left-1/2 -translate-x-1/2">
          <span className="font-bold text-[27px] xl:text-5xl text-[#605954]">
            Witaj w sezamkowie
          </span>
        </div>
        <p className="text-lg xl:text-[23px] leading-[18px] xl:leading-normal text-center mb-11 md:mb-20 relative z-10">
          – jest to wyjątkowy żłobek w Warszawie. Wyróżnia nas przede wszystkim
          domowa atmosfera, małe, kameralne grupy oraz spokojne i bezpieczne
          miejsce. Naszym celem jest tworzenie miejsca pełnego akceptacji i
          poszanowania dla potrzeb każdego dziecka.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <Link href="/location/new">
            <a className="mb-[18px] md:mb-0 mx-0 md:mx-5 xl:mx-14 w-full md:w-auto flex items-center bg-white shadow hover:shadow-lg transition rounded-2xl px-8 py-6 xl:p-10 pr-0">
              <div className="shrink-0 w-[46px] h-10 xl:w-[102px] xl:h-[90px] flex items-center justify-center rounded-[10px] xl:rounded-2xl bg-[#FFF3EB] border border-[#FFA25E]">
                <div className="hidden xl:flex">
                  <Image src={HomeWarning} />
                </div>
                <div className="flex xl:hidden">
                  <Image src={SmallHomeWarning} />
                </div>
              </div>
              <span className="uppercase ml-4 xl:ml-5 font-bold text-[22px] xl:text-2xl text-[#FFA25E]">
                Nowy Wawer
              </span>
            </a>
          </Link>
          <Link href="/location/old">
            <a className="mb-[18px] md:mb-0 mx-0 md:mx-5 xl:mx-14 w-full md:w-auto flex items-center bg-white shadow hover:shadow-lg transition rounded-2xl px-8 py-6 xl:p-10 pr-0">
              <div className="shrink-0 w-[46px] h-10 xl:w-[102px] xl:h-[90px] flex items-center justify-center rounded-[10px] xl:rounded-2xl bg-[#FFEDF0] border border-[#FF8FA3]">
                <div className="hidden xl:flex">
                  <Image src={HomeDanger} />
                </div>
                <div className="flex xl:hidden">
                  <Image src={SmallHomeDanger} />
                </div>
              </div>
              <span className="uppercase ml-4 xl:ml-5 font-bold text-[22px] xl:text-2xl text-[#FF8FA3]">
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
