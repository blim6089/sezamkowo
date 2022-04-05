import Link from "next/link";
import Image from "next/image";

import FooterBGImage from "@/assets/images/footer.png";
import Facebook from "@/assets/images/icons/facebook-fill.svg";
import Instagram from "@/assets/images/icons/instagram-fill.svg";

const Footer = () => {
  const links = [
    {
      label: "Nasze Lokalizacja",
      path: "/location/new",
      children: [
        {
          label: "Nowy Wawer",
          path: "/location/new",
        },
        {
          label: "Marysin Wawerski",
          path: "/location/old",
        },
      ],
    },
    {
      label: "Strefa Rodzica",
      path: "/zone",
      children: [
        {
          label: "Organizacja",
          path: "/zone#organization",
        },
        {
          label: "Plan Dnia",
          path: "/zone#schedule",
        },
        {
          label: "Często Zadawane Pytania",
          path: "/zone#questions",
        },
        {
          label: "Dokumenty",
          path: "/zone#document",
        },
      ],
    },
    {
      label: "Zapisy",
      path: "/records",
    },
    {
      label: "Klubik Sezamkowo",
      path: "/club",
      children: [
        {
          label: "Sensoryka",
          path: "/",
        },
        {
          label: "Gordonki",
          path: "/",
        },
      ],
    },
    {
      label: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row justify-between pt-6 px-5 2xl:px-40 pb-[100px] bg-[#FBFBFB] border-t border-t-[#DFA08D]">
      <div className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap mb-5 md:mb-0">
        {links.map((link, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-auto max-w-[143px] md:mr-12"
            >
              <Link
                href={link.path}
                className="font-bold text-lg text-[#646464] mb-4"
              >
                {link.label}
              </Link>
              {link.children && (
                <ul>
                  {link.children?.map((subLink, subIndex) => {
                    return (
                      <li
                        className="text-base text-[#646464] mb-4 hover:underline"
                        key={subIndex}
                      >
                        <Link href={subLink.path}>{subLink.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <div className="shrink-0">
        <p className="uppercase font-bold text-base md:text-lg text-left md:text-right text-[#646464] mb-4 md:mb-2.5">
          kontakt
        </p>
        <div className="flex items-end pb-5 md:pb-2 border-b border-b-[#DFA08D]">
          <div className="w-1/2 md:w-auto flex flex-col items-start md:items-end px-0 md:px-8">
            <span className="font-bold text-base md:text-lg text-[#646464] mb-1.5 md:mb-[18px]">
              Nowy Wawer
            </span>
            <span className="text-sm md:text-base text-[#646464] leading-5 text-left md:text-right mb-1 md:mb-4">
              ul. Miłkowskiego 2a
              <br />
              04-683 Warszawa
            </span>
            <span className="text-sm md:text-lg text-[#646464]">
              +48 737 309 545
            </span>
          </div>
          <div className="w-1/2 md:w-auto flex flex-col items-end md:pl-8">
            <span className="font-bold text-base md:text-lg text-right text-[#646464] mb-1.5 md:mb-[18px]">
              Marysin Wawerski
            </span>
            <span className="text-sm md:text-base text-[#646464] leading-5 text-right mb-1 md:mb-4">
              ul. Sezam 5G
              <br />
              04-538 Warszawa
            </span>
            <span className="text-sm md:text-lg text-right text-[#646464]">
              +48 737 306 690
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end py-2">
          <a
            href="#"
            className="text-sm:text-base text-[#646464] underline mb-6 md:mb-9"
          >
            zlobek@sezamkowo.waw.pl.
          </a>
          <div className="flex items-center mb-[18px] md:mb-3">
            <a
              href="#"
              className="transition brightness-0 opacity-40 hover:opacity-60"
            >
              <Image src={Facebook} />
            </a>
            <a
              href="#"
              className="transition brightness-0 opacity-40 hover:opacity-60 ml-3"
            >
              <Image src={Instagram} />
            </a>
          </div>
          <a
            href="#"
            className="text-[13px] text-sm text-[#646464] hover:text-[#FFA25E] transition underline mb-2"
          >
            Polityka Prywatności
          </a>
          <a
            href="#"
            className="text-[13px] text-sm text-[#646464] hover:text-[#FFA25E] transition underline mb-2"
          >
            Polityka Cookies
          </a>
        </div>
      </div>

      <div className="absolute flex w-full bottom-0 left-0 pointer-events-none">
        <Image src={FooterBGImage} />
      </div>
    </div>
  );
};

export default Footer;
