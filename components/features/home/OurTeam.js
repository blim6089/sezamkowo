import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import TeamMember from "./TeamMember";

import Avatar1 from "@/assets/images/team/1.png";
import Avatar2 from "@/assets/images/team/2.png";
import Avatar3 from "@/assets/images/team/3.png";
import Avatar4 from "@/assets/images/team/4.png";
import Avatar5 from "@/assets/images/team/5.png";
import Avatar6 from "@/assets/images/team/6.png";
import Avatar7 from "@/assets/images/team/7.png";
import Avatar8 from "@/assets/images/team/8.png";
import Avatar9 from "@/assets/images/team/9.png";
import ArrowLeft from "@/assets/images/icons/chevron-left.svg";
import ArrowRight from "@/assets/images/icons/chevron-right.svg";

const OurTeam = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
  };

  const sliderRef = useRef();

  const members = [
    {
      name: "Agnieszka Stańczak",
      role: "Właściciela, dyrektor, pedagog",
      description:
        "Zafascynowana Rodzicielstwem Bliskości, postanowiła w swojej pracy z wdrożyć jej zasady. Najważniejsze dla niej jest bezpieczeństwo i spokojny rozwój dziecka. Dba o to, aby każde miało czas, przestrzeń i odpowiednio stworzone warunki do poznawania siebie i rozwijania we włanym tempie. Tak powstało Sezamkowo!",
      avatar: Avatar1,
    },
    {
      name: "Dagmara Rusiak",
      role: "Dyrektor, psycholog, wychowawca",
      description:
        "W pracy z dziećmi najważniejsza jest dla niej relacja – przyjazna, szczera, bezpieczna, pełna ciepła i szacunku. Ma głębokie przekonanie, że otwartość, autentyczna ciekawość, uważność na to cootrzymujemy od dzieci tu i teraz to fundamenty niezbędne do jej umacniania. ",
      avatar: Avatar2,
    },
    {
      name: "Małgorzata Baranowska",
      role: "Kierownik, położna, wychowawca",
      description:
        "Ma w sobie mnóstwo miłości, cierpliwości, ciepła i spokoju. Do każdego małego człowieka podchodzi indywidualnie, z szacunkiem i na zasadach partnerstwa, Jako położna stara się, aby dzieci wiedziały na czym polega zdrowy styl życia. Tłumaczy dlaczego ważne jest mycie rąk, zębów, zdrowe jedzenie czy chodzenie do lekarza.",
      avatar: Avatar3,
    },
    {
      name: "Izabella Cepko",
      role: "Wychowawca",
      description:
        "To osoba z wieloletnim doświadczeniem w opiece nad dziećmi.Zgłębia tajemnice dziecięcego świata tak by widzieć go oczyma dziecka. W pracy dydaktycznej mocny nacisk kładzie na zajęcia ruchowe, taniec, plastykę i sensorykę. W planie dnia jej wychowanków nie brakuje również zajęć wyciszających  i relaksacyjnych. ",
      avatar: Avatar4,
    },
    {
      name: "Beata Kowalczyk",
      role: "Wychowawca",
      description:
        'Ukończyła kurs opiekuna dziecięcego oraz odbyła 80cio godzinne praktyki zawodowe w żłobku z dziećmi w wieku 0,5-3 lat. W toku swojej edukacji, odbyła praktyczne szkolenie z " Bajkoterapii" oraz kurs "Wspaniała relacjxa"',
      avatar: Avatar5,
    },
    {
      name: "Aleksandra Suchecka",
      role: "Wychowawca",
      description:
        "Swoje spotkanie z dziećmi zaczęła od opieki nad siostrzenicami. Aktualnie pragnie łączyć swoją pracęz dziećmi i uczyć się tego jak zaspokajać ich potrzeby i wspierać na każdym etapie ich rozwoju. Praca z dziećmi jest dla niej przyjemnością i polem do zdobywania cennego doświadczenia, które będzie przydatne nie tylko w zawodzie ale również w życiu. Stara się jak najlepiej wykonywać swoją pracę.",
      avatar: Avatar6,
    },
    {
      name: "Basia Gburczyk",
      role: "Instruktor umuzykalniających zajęć Gordonowskich",
      description:
        "Animatorka zajęć umuzykalniających prowadzonych metodą gordonowską. Posiada dyplom ukończenia kursu gordonowskiego w 2011 r., jest członkiem Polskiego Towarzystwa Gordonowskiego z siedzibą w Bydgoszczy. Przez ponad osiem lat samodzielnie prowadziłam najmłodszą, przedprzedszkolną grupę dzieci. W przedszkolu zdobyła doświadczenie podczas pracy ze specjalistami: logopedą, fizjoterapeutą, ",
      avatar: Avatar7,
    },
    {
      name: "Urszula Drewnowska-Płatek",
      role: "Język angielski",
      description: "xxxasass",
      avatar: Avatar8,
    },
    {
      name: "Magdalena Smolak",
      role: "Logopeda",
      description: "xxx",
      avatar: Avatar9,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white pt-[100px] pb-[112px] px-20">
      <p className="font-bold text-4xl text-[#605954] mb-8">
        POZNAJ NASZ ZESPÓŁ
      </p>
      <p className="max-w-[1000px] text-base text-center leading-5 mb-10">
        Naszą kadrę tworzą ludzie z pasją, miłością i sercem do dziećmi. Tworzą
        indywidualne programy, prowadzą i towarzyszą dziecku, pokazują świat i
        uczą go. Traktują każde dziecko indywidualnie, każde prowadzą według
        jego potrzeb i możliwości, podążając za nim. Stale podnoszą kwalifikację
        i z chęcią uczą się nowych rzeczy.
      </p>
      <div className="w-full">
        <Slider {...settings} ref={sliderRef}>
          {members.map((member, index) => (
            <div className="mx-5 py-5 h-full" key={index}>
              <TeamMember {...member} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex mt-5">
        <button className="flex mx-0.5" onClick={() => sliderRef.current.slickPrev()}>
          <Image src={ArrowLeft} />
        </button>
        <button className="flex mx-0.5" onClick={() => sliderRef.current.slickNext()}>
          <Image src={ArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
