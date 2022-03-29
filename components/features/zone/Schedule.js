import Image from "next/image";
import ArrowLine from "@/assets/images/arrow-line.png";

const Schedule = () => {
  const items = [
    {
      label:
        "zbieranie się dzieci, zabawy swobodne w sali, zajęcia indywidualne",
      time: "7:00 - 9:00",
    },
    {
      label: "śniadanie",
      time: "9:00-9:20",
    },
    {
      label: "zajęcia dydaktyczne ",
      time: "9:20-09:50 ",
    },
    {
      label: "zupa",
      time: "10:00-11:30",
    },
    {
      label: "wyjście na dwór",
      time: "11:30-12:00",
    },
    {
      label: "czynności higieniczne, mycie zębów",
      time: "12:30-14:30",
    },
    {
      label:
        "drzemka, odpoczynek, czytanie książek, słuchanie spokojnej muzyki",
      time: "12:00-12:30",
    },
    {
      label: "zajęcia plastyczne",
      time: "14:45-15:15",
    },
    {
      label: "II danie",
      time: "15:15-15:45",
    },
    {
      label: "zajęcia plastyczne",
      time: "16:00-16:30",
    },
    {
      label: "podwieczorek",
      time: "16:30-17:00",
    },
    {
      label: "zabawy ruchowe przy muzyce, zajęcia indywidualne",
      time: "17:00-18:00",
    },
  ];

  return (
    <div className="flex justify-center py-8 bg-[#F6F6F6]">
      <div className="w-full max-w-[670px]">
        <p className="font-bold text-4xl text-[#463F3A] text-center mb-[50px]">
          Plan Dnia
        </p>
        <div className="pl-11 relative">
          <div className="flex absolute top-0 left-0">
            <Image src={ArrowLine} />
          </div>
          {items.map((item, index) => (
            <div className="flex justify-between items-center" key={index}>
              <span className="max-w-[467px] font-medium text-xl text-[#463F3A] mb-5">
                {item.label}
              </span>
              <span className="font-light text-lg text-[#463F3A]">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
