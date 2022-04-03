import Image from "next/image";

import Parent from "@/assets/images/home/parent.svg";
import Football from "@/assets/images/home/football.svg";
import Telescope from "@/assets/images/home/telescope.svg";
import Scale from "@/assets/images/home/scale.svg";

const Features = () => {
  const items = [
    {
      title: "Rodzicielstwo Bliskości",
      description:
        "Szanujemy, pielęgnujemy, podążamy za dzieckiem. Dajemy bliskość, ukojenie, swobodę i przestrzeń na rozwój. ",
      icon: Parent,
    },
    {
      title: "Aktywność",
      description:
        "Jest dla nas bardzo ważna. Lubimy spacery, świeże powietrze, wiemy, że dzieci potrzebują i kochają ruch. ",
      icon: Football,
    },
    {
      title: "Multisensoryka",
      description:
        "Odkrywamy i poznajemy otoczenie wszystkimi zmysłami. Aktywnie doświadczamy świata w jego naturalnej formie.",
      icon: Telescope,
    },
    {
      title: "Spokojna adaptacja",
      description:
        "Łagodnie i spokojnie przygotowujemy się wspólnie do nowej przygody. Przygody w żłobku. ",
      icon: Scale,
    },
  ];
  return (
    <div className="flex flex-wrap justify-between bg-[#F6F6F6] py-5 xl:pt-12 xl:pb-[72px] px-5 2xl:px-[180px]">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full xl:w-1/2 2xl:w-1/4 flex flex-col items-center mb-6 xl:mb-0"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-14 xl:mb-6">
              <Image src={item.icon} />
            </div>
            <p className="font-bold text-2xl text-[#FFA25E] mb-3 xl:mb-6 text-center">
              {item.title}
            </p>
            <p className="text-lg text-[#463F3A] leading-6 text-center">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
