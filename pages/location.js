import Image from "next/image";
import Button from "@/components/Button";

import Check from "@/assets/images/icons/circle-check.svg";
import Line from "@/assets/images/line.png";
import MapPin from "@/assets/images/icons/map-pin.svg";
import GoogleMap from "@/components/GoogleMap";
import Gallery from "@/components/Gallery";
import Club from "@/components/Club";

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
  const items = [
    {
      title: "Bogatą ofertę dydaktyczno wychowawczą",
      description:
        "Oferujemy rozwijające zajęcia: sensorykę, zajęcia dydaktyczne, logopedię, język angielski, zajęcia muzyczne, ruchowe i plastyczne.",
      top: 30,
    },
    {
      title: "Profesjonalną opiekę",
      description:
        "Łagodnie i spokojnie przygotowujemy się wspólnie do nowej przygody. Dbamy o troszczymy się o każde dziecko, dbamy o jego rozwój i dobre samopoczucie. ",
      top: 64,
    },
    {
      title: "Zdrowe posiłki",
      description:
        "Posiłki dla dzieci są różnorodne i zbilansowane. Dbamy o to by na ich talerzach nie zabrakło warzyw, owoców, strączków, kasz, nabiału, ryb, ziaren. Kolorowe i zdrowe posiłki zachęcają do próbowania nowych smaków.   ",
      top: 20,
    },
    {
      title: "Wykfalifikowaną kadrę",
      description:
        "Pracujemy z osobami z pasją i przygotowaniem do pracy w żłobku. Mamy w swoim zespole pedagogów, psychologów, położne, logopedów, nauczycieli przedszkola. ",
      top: -30,
    },
    {
      title: "Rodzinną atmosferę",
      description:
        "Tworzymy dzieciom drugi dom, dbamy o siebie wzajemnie, wspieramy się i budujemy zaufanie. Wy, rodzice, dziadkowie, też jesteście częścią Sezamkowa.  ",
      top: 8,
    },
  ];

  return (
    <div>
      <div className="max-w-[1596px] mx-auto">
        <div className="flex justify-between pt-[55px] pb-[95px]">
          <div className="pt-8 max-w-[700px]">
            <p className="font-bold text-5xl text-[#FFA25E] mb-6">Nowy Wawer</p>
            <p className="text-lg text-[#463F3A] leading-6 mb-6">
              Żłobek w otoczeniu kameralnych domków jednorodzinnych, wokół
              spokój i cisza, miejsce otoczone zielenią, nad brzegiem kanałku
              Wawerskiego. Jest to miejsce spokojne, bliskie, pełne dobrych
              relacji.
            </p>
            <div className="flex items-center mb-[50px]">
              <Image src={MapPin} />
              <span className="mx-2 text-base text-[#646464]">
                ul. Miłkowskiego 2a, 04-683 Warszawa
              </span>
            </div>
            <Button>Wypełnij formularz </Button>
          </div>
          <div className="flex">
            <GoogleMap lat={59.955413} lng={30.337844} />
          </div>
        </div>
        <div className="pb-[100px]">
          <p className="font-bold text-4xl text-[#605954] mb-12">
            Co zyskujesz?
          </p>
          <div className="relative">
            <div className="absolute w-[1320px] top-0 left-1/2 -translate-x-1/2">
              <Image src={Line} />
            </div>
            <div className="flex justify-between relative z-10">
              {items.map((item, index) => {
                return (
                  <div
                    className="flex flex-col items-center max-w-[300px]"
                    style={{ marginTop: item.top }}
                    key={index}
                  >
                    <div className="w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center shadow-priceIcon mb-7">
                      <Image src={Check} />
                    </div>
                    <p className="font-bold text-lg text-[#FFA25E] mb-6 text-center leading-6">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#463F3A] leading-[18px] text-center">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-9 pb-16 bg-[#F6F6F6]">
        <div className="max-w-[1296px] mx-auto">
          <p className="font-bold text-4xl text-[#605954] text-center mb-10">
            GALERIA ZDJĘĆ
          </p>
          <Gallery
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
          />
        </div>
      </div>
      <div className="mx-auto max-w-[1090px] flex flex-col items-center pt-[110px] pb-[150px]">
        <p className="text-center">Dodatkowe informacje</p>
        <PriceList target="new" />
      </div>
      <Club target="new" />
    </div>
  );
}
