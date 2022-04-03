import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/router";

import Check from "@/assets/images/icons/circle-check.svg";
import Line from "@/assets/images/line.png";
import MapPin from "@/assets/images/icons/map-pin.svg";
import GoogleMap from "@/components/GoogleMap";
import Gallery from "@/components/Gallery";
import Club from "@/components/Club";
import ContactForm from "@/components/ContactForm";

import Photo1 from "@/assets/images/gallery/1.png";
import Photo5 from "@/assets/images/gallery/5.png";
import Photo9 from "@/assets/images/gallery/9.png";
import Photo13 from "@/assets/images/gallery/13.png";
import Photo16 from "@/assets/images/gallery/16.png";
import Photo14 from "@/assets/images/gallery/14.png";
import Photo19 from "@/assets/images/gallery/19.png";
import Photo21 from "@/assets/images/gallery/21.png";
import Photo30 from "@/assets/images/gallery/30.png";
import PriceList from "components/PriceList";

export default function Location() {
  const title = {
    new: "Nowy Wawer",
    old: "Marysin Wawerski",
  };

  const router = useRouter();
  const { target } = router.query;
  const items = [
    {
      title: "Bogatą ofertę dydaktyczno wychowawczą",
      description:
        "Oferujemy rozwijające zajęcia: sensorykę, zajęcia dydaktyczne, logopedię, język angielski, zajęcia muzyczne, ruchowe i plastyczne.",
      top: "xl:mt-[30px]",
    },
    {
      title: "Profesjonalną opiekę",
      description:
        "Łagodnie i spokojnie przygotowujemy się wspólnie do nowej przygody. Dbamy o troszczymy się o każde dziecko, dbamy o jego rozwój i dobre samopoczucie. ",
      top: "xl:mt-[64px]",
    },
    {
      title: "Zdrowe posiłki",
      description:
        "Posiłki dla dzieci są różnorodne i zbilansowane. Dbamy o to by na ich talerzach nie zabrakło warzyw, owoców, strączków, kasz, nabiału, ryb, ziaren. Kolorowe i zdrowe posiłki zachęcają do próbowania nowych smaków.   ",
      top: "xl:mt-[20px]",
    },
    {
      title: "Wykfalifikowaną kadrę",
      description:
        "Pracujemy z osobami z pasją i przygotowaniem do pracy w żłobku. Mamy w swoim zespole pedagogów, psychologów, położne, logopedów, nauczycieli przedszkola. ",
      top: "xl:mt-[-30px]",
    },
    {
      title: "Rodzinną atmosferę",
      description:
        "Tworzymy dzieciom drugi dom, dbamy o siebie wzajemnie, wspieramy się i budujemy zaufanie. Wy, rodzice, dziadkowie, też jesteście częścią Sezamkowa.  ",
      top: "xl:mt-[8px]",
    },
  ];

  const informations = [
    "Sale są dostosowane do wieku dzieci, wyposażone w certyfikowane urządzenia i zabawki. Wnętrza są specjalnie projektowane pod kątem rozwoju najmłodszych i inspirowane pomocami stosowanymi przez Marię Montessori.  Dzieci bawią się i uczą w wybranych przez siebie kącikach tematycznych.",
    "Posiadamy duży plac zabaw gdzie dzieci bawią się i poznają świat",
    "Nasze sale oraz zabawki są codziennie starannie myte, czyszczone i dezynfekowane.",
    "Posiadamy oczyszczacze, które dbają o zdrowe i wolne od zanieszczyszczeń powietrze w salach. ",
    "Menu dzieci jest przygotowane przez dietetyka oraz dostosowane do indywidualnych potrzeb dzieci. Uwzględnia diety i specjalne potrzeby żywieniowe. ",
  ];

  return (
    <div>
      <div className="max-w-[1596px] mx-auto px-5 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between pt-8 lg:pt-[55px] pb-16 lg:pb-[95px]">
          <div className="w-full lg:w-1/2 xl:w-auto pt-8 max-w-[700px]">
            <p
              className={`font-bold text-5xl mb-6 ${
                target === `new` ? `text-[#FFA25E]` : `text-[#FF8FA3]`
              }`}
            >
              {title[target]}
            </p>
            <p className="text-lg text-[#463F3A] leading-6 mb-6">
              Żłobek w otoczeniu kameralnych domków jednorodzinnych, wokół
              spokój i cisza, miejsce otoczone zielenią, nad brzegiem kanałku
              Wawerskiego. Jest to miejsce spokojne, bliskie, pełne dobrych
              relacji.
            </p>
            <div className="hidden lg:block">
              <div className="flex items-center mb-[50px]">
                <Image src={MapPin} />
                <span className="mx-2 text-base text-[#646464]">
                  ul. Miłkowskiego 2a, 04-683 Warszawa
                </span>
              </div>
              <Button>Wypełnij formularz </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-auto">
            <div className="flex mb-8">
              <GoogleMap lat={59.955413} lng={30.337844} />
            </div>
            <div className="flex flex-col items-center lg:hidden">
              <div className="flex items-start mb-6">
                <Image src={MapPin} />
                <span className="mx-2 text-base text-[#646464]">
                  ul. Miłkowskiego 2a, 04-683 Warszawa
                </span>
              </div>
              <Button>Wypełnij formularz </Button>
            </div>
          </div>
        </div>
        <div className="pb-[100px]">
          <p className="font-bold text-center xl:text-left text-4xl text-[#605954] mb-8 xl:mb-12">
            Co zyskujesz?
          </p>
          <div className="relative">
            <div className="hidden xl:flex absolute w-[1320px] top-0 left-1/2 -translate-x-1/2">
              <Image src={Line} />
            </div>
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between relative z-10">
              {items.map((item, index) => {
                return (
                  <div
                    className={`flex flex-col items-center max-w-auto xl:max-w-[300px] mb-11 ${item.top}`}
                    key={index}
                  >
                    <div className="w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center shadow-priceIcon mb-7">
                      <Image src={Check} />
                    </div>
                    <p className="font-bold text-2xl xl:text-lg text-[#FFA25E] mb-6 text-center leading-6">
                      {item.title}
                    </p>
                    <p className="text-base xl:text-sm text-[#463F3A] leading-[18px] text-center">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-7 pb-7 lg:pt-9 lg:pb-14 px-5 lg:px-0 bg-[#F6F6F6]">
        <div className="max-w-[1296px] mx-auto">
          <p className="font-bold text-[27px] lg:text-4xl text-[#605954] text-center mb-7 lg:mb-10">
            GALERIA ZDJĘĆ
          </p>
          {/* <Gallery
            photos={[
              Photo1,
              Photo13,
              Photo30,
              Photo14,
              Photo19,
              Photo21,
              Photo16,
              Photo5,
              Photo9,
            ]}
          /> */}
        </div>
      </div>
      <div className="px-5 xl:px-0 mx-auto max-w-[1090px] flex flex-col items-center pt-20 xl:pt-[110px] pb-16 xl:pb-[150px]">
        <p className="font-bold text-[27px] xl:text-4xl text-[#605954] text-center mb-10">
          Dodatkowe informacje
        </p>
        <ul>
          {informations.map((information, index) => (
            <li key={index} className="flex mb-10">
              <span
                className={`mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full border ${
                  router.query?.target === `new`
                    ? `border-[#FFA25E] bg-[#FFD1B0]`
                    : `border-[#FF8FA3] bg-[#FFD4DC]`
                }`}
              />
              <span className="text-base leading-5 text-[#463F3A] ml-10 lg:ml-3.5">
                {information}
              </span>
            </li>
          ))}
        </ul>
        <PriceList target={target} />
      </div>
      <div className="flex flex-col">
        <div className="order-2 xl:order-1">
          <Club target={target} />
        </div>
        <div className="flex justify-center order-1 xl:order-2 pt-0 pb-16 xl:pt-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
