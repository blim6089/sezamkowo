import Image from "next/image";

import Email from "@/assets/images/icons/email.svg";
import Phone from "@/assets/images/icons/phone.svg";
import Time from "@/assets/images/icons/time.svg";
import Calendar from "@/assets/images/icons/calendar.svg";
import MapPin from "@/assets/images/icons/map-pin.svg";
import Schedule from "@/assets/images/schedule.png";

import ClubImage1 from "@/assets/images/clubs/1.png";
import ClubImage2 from "@/assets/images/clubs/2.png";
import ClubImage3 from "@/assets/images/clubs/3.png";

const Club = (props) => {
  const label = {
    new: "Nowy Wawer",
    old: "Marysin Wawerski",
  };

  return (
    <div className={`pb-16 relative ${props.page ? `pt-[60px]` : ``}`}>
      <div
        className={`w-full h-[560px] absolute top-0 left-0 ${
          props.page ? `bg-gradient-to-b from-[#E0AFA030] to-white ` : ``
        }`}
      ></div>
      <div className="relative z-10">
        <div
          className={`flex flex-col items-center py-5 ${
            props.target ? `bg-[#F6F6F6]` : `bg-transparent`
          }`}
        >
          <p
            className={`font-bold text-4xl text-center text-[#463F3A] mb-6 ${
              props.page ? `uppercase` : ``
            }`}
          >
            <span>
              Klubik Sezamkowo {props.target ? `- ${label[props.target]}` : ``}
            </span>
          </p>
          <p className="max-w-[945px] text-base text-[#463F3A] text-center leading-5 mb-10">
            Jest to cykl cotygodniowych zajęć sensorycznych dla dzieci od 1,5 do
            4 lat. W zajęciach uczestniczą razem rodzic i dziecko. Weźcie
            koniecznie coś na przebranie, będzie brudzenie się, taplanie i masa
            sensorycznych, wielowymiarowych doświadczeń.
          </p>
          {!props.page && (
            <div className="flex justify-center">
              <span className="min-w-[400px] flex items-center justify-center">
                <Image src={Phone} />
                <span className="text-base text-[#463F3A] mx-2">
                  +48 785 900 905
                </span>
              </span>
              <span className="min-w-[400px] flex items-center justify-center">
                <Image src={Email} />
                <span className="text-base text-[#463F3A] mx-2">
                  email{" "}
                  <span className="underline">zlobek@sezamkowo.waw.pl.</span>
                </span>
              </span>
            </div>
          )}
        </div>
        <div className={`flex py-2 px-[165px] ${props.target ? `pt-10` : ``}`}>
          <div className="w-2/3">
            <Image src={Schedule} />
          </div>
          <div className="w-1/3 pl-3">
            <div className="border border-[#DDDDDD] rounded-2xl pt-[18px] px-5 pb-8 bg-white">
              <p className="font-bold text-2xl text-[#FFA25E] mb-7 uppercase">
                Sensoryka dla Smyka!
              </p>
              <div className="flex items-center">
                <div className="flex items-center mr-8 mb-6">
                  <Image src={Time} />
                  <span className="text-base text-[#646464] leading-5 ml-6">
                    16:30-17:30
                  </span>
                </div>
                <div className="flex items-center mr-8 mb-6">
                  <Image src={Calendar} />
                  <span className="text-base text-[#646464] leading-5 ml-6">
                    Każdy piątek
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Image src={MapPin} />
                <span className="text-base text-[#646464] leading-5 ml-6">
                  ul. Sezam 5g, Żłobek Sezamkowo
                </span>
              </div>
              <div className="text-base text-[#463F3A] leading-5 mb-20">
                W każdy piątek o 16:30 zapraszamy rodziców wraz z dziećmi na
                polisensoryczne doświadczanie świata.
                <br />
                <br />
                <br />
                Rozbudzamy wszystkie zmysły zapachami, strukturami, konsystencją
                i dźwiękami
              </div>
              <div className="flex mx-[-3px] pb-[22px] border-b border-b-[#F2F3F3]">
                <div className="w-1/3 px-[3px]">
                  <Image src={ClubImage1} />
                </div>
                <div className="w-1/3 px-[3px]">
                  <Image src={ClubImage2} />
                </div>
                <div className="w-1/3 px-[3px]">
                  <Image src={ClubImage3} />
                </div>
              </div>
              <div className="flex justify-end pt-[18px]">
                <button className="h-[55px] px-6 shadow-button rounded-full border border-[#FFA25E] font-bold text-lg text-[#FFA25E]">
                  Zarezerwuj
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
