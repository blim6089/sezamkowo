import { useEffect, useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";

import Time from "@/assets/images/icons/time.svg";
import Sunrise from "@/assets/images/icons/sunrise.svg";
import Sun from "@/assets/images/icons/sun.svg";
import Sunset from "@/assets/images/icons/sunset.svg";
import HourGlass from "@/assets/images/icons/hourglass.svg";
import Food from "@/assets/images/icons/food.svg";
import SunDanger from "@/assets/images/icons/sun-danger.svg";
import FoodDanger from "@/assets/images/icons/food-danger.svg";

const PriceList = (props) => {
  const [active, setActive] = useState(props.target || "new");

  useEffect(() => {
    setActive(props.target || "new");
  }, [props.target]);

  const data = {
    new: [
      {
        title: "Pakiet poranny",
        time: "7:00-12:00",
        value: "1190 zł.",
        icon: Sunrise,
      },
      {
        title: "Pakiet dzienny",
        time: "7:00-17:00",
        value: "1390 zł.",
        icon: Sun,
      },
      {
        title: "Pakiet popołudniowy",
        time: "12:00-17:00",
        value: "1090 zł.",
        icon: Sunset,
      },
      {
        title: "Pakiet godzinowy",
        time: "7:00-17:00",
        value: "900 zł.",
        icon: HourGlass,
        description:
          "W ramach pakietu zapeiamy (60 h do wykorzystania w miesiącu w godzinach 7:00-17:00)",
      },
      {
        title: "Wyżywienie",
        value: "16 zł./ dzień",
        icon: Food,
      },
    ],
    old: [
      {
        title: "Pakiet dzienny",
        time: "7:00-18:00",
        value: "1650 zł.",
        icon: SunDanger,
        items: {
          title: "W cenie pakietu pełna oferta zajęć dodatkowych:",
          children: [
            "język angielski",
            "zajęcia muzyczne - Gordonki",
            "zajęcia sensoryczne",
            "zajęcia z logopedą",
            "dogoterapia",
          ],
        },
      },
      {
        title: "Wyżywienie",
        value: "16 zł./ dzień",
        icon: FoodDanger,
      },
    ],
  };

  return (
    <div
      className={`${props.target ? `max-w-[883px]` : `max-w-[1227px]`} ${
        active === `new` ? `border-[#FFA25E]` : `border-[#FF8FA3]`
      } w-full shadow-priceList border flex flex-col items-center rounded-[36px] py-8 lg:py-10 px-5 lg:px-20`}
    >
      <p className="font-bold text-4xl text-[#605954] text-center mb-3.5 lg:mb-4">
        Cennik
      </p>
      <p className="text-base text-[#463F3A] text-center mb-4 lg:mb-8">
        Oferujemy różne pakiety, tak by zaspokoić różne potrzeby.
      </p>
      {!props.target && (
        <div className="flex items-center mb-9 lg:mb-[60px]">
          <button
            onClick={() => setActive("new")}
            className={`${
              active === `new`
                ? `bg-[#FFF6EA]`
                : `bg-white opacity-70  border-r-0`
            } font-bold text-lg leading-none md:text-xl text-[#FFA768] min-h-[50px] py-4 lg:py-0 px-4 lg:px-10 border border-[#FFA25E] rounded-l-[50px]`}
          >
            NOWY WAWER
          </button>
          <button
            onClick={() => setActive("old")}
            className={`${
              active === `old`
                ? `border-[#FF8FA3] text-[#FF8FA3] bg-[#FFEFF2]`
                : `bg-white opacity-70 text-[#FFA768]  border-l-0`
            } font-bold text-lg leading-none md:text-xl min-h-[50px] py-4 lg:py-0 px-4 lg:px-10 border border-[#FFA25E] rounded-r-[50px]`}
          >
            MARYSIN WAWERSKI
          </button>
        </div>
      )}
      <div className="w-full mb-4">
        <div>
          {data[active].map((item, index) => (
            <div
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-9"
              key={index}
            >
              <div
                className={`flex ${item.time ? `items-start` : `items-center`}`}
              >
                <div className="w-11 h-11 lg:w-[55px] lg:h-[55px] shrink-0 flex items-center justify-center rounded-full bg-white shadow-priceIcon">
                  <Image src={item.icon} className="scale-75 lg:scale-100" />
                </div>
                <div className="ml-3.5 lg:ml-9 -mt-1.5">
                  <p className="h-[22px] font-bold text-lg lg:text-xl text-[#463F3A]">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="max-w-[520px] text-base text-[#8A817C] mt-2">
                      {item.description}
                    </p>
                  )}
                  {item.items && (
                    <div className="text-base text-[#463F3A] leading-5 mt-3">
                      <p>{item.items.title}</p>
                      <ul>
                        {item.items.children.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.time && (
                    <div className="flex items-center mt-2 lg:mt-4">
                      <Image src={Time} />
                      <span className="text-[15px] lg:text-base text-[#8C8C8C] ml-2">
                        {item.time}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <span className="font-medium text-xl text-[#463F3A] min-w-[140px] self-end text-right lg:text-left">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Button>Wypełnij formularz </Button>
    </div>
  );
};

export default PriceList;
