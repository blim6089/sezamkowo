import Image from "next/image";
import PriceList from "@/components/PriceList";
import PatchCheck from "@/assets/images/icons/patch-check.svg";
import PatchCheckSuccess from "@/assets/images/icons/patch-check-success.svg";

export default function Records() {
  const records = [
    {
      title: "Wypełnij formularz rejestracyjny ",
      description:
        "Wypełnij formularz rejestracyjny oraz wpisz wszystkie dane. Następnie prześlij go nam poprzez stronę. Możesz także wypełnić formualrz na miejscu.",
      icon: PatchCheck,
    },
    {
      title: "Przyjdz i zobacz Nasz żłobek",
      description:
        "Po wysłaniu formularza skontaktujemy się z Wami i zaprosimy do obejrzenia żłobka. Odpowiemy na wszystkie pytania i pokażemy miejsce gdzie maluszek będzie spędzał czas. ",
      icon: PatchCheck,
    },
    {
      title: "Podejmij ostateczną decyzję",
      description:
        "Kiedy podejmiesz ostateczną decyzję podpiszemy umowę i powitamy malucha w naszym gronie. W ustalonym czasie rozpoczniemy spokojną adaptację. ",
      icon: PatchCheck,
    },
    {
      title: "Witaj w gronie Sezamkowiczów",
      description:
        "Ciesz sie razem z dzieckiem bogatą ofertą zajęć i profesjonalna opieką. \n \n To wspaniale, że jesteś z Nami! ",
      icon: PatchCheckSuccess,
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-b from-[#E0AFA030] to-white pt-[53px] lg:pt-16 pb-0 lg:pb-12 border-b-0 lg:border-b border-b-[#E0AFA0] px-5">
        <div className="max-w-[1694px] mx-auto flex flex-col items-center">
          <p className="font-bold text-4xl lg:text-5xl text-[#646464] mb-5 lg:mb-6 uppercase">
            Zapisy
          </p>
          <p className="max-w-[1114px] text-lg text-[#464F3A] leading-6 mb-24 text-center">
            Zapewniamy edukację w oparciu o pedagogikę Marii Montessori, Janusza
            Korczaka, metod porozumienia bez przemoc oraz metody projektów.
            Profesjonalną opiekę, edukację i wychowanie dzieci w wieku od 8
            miesięcy do 3 lat w warunkach zbliżonych do warunków domowych.
          </p>
          <div className="-mx-5 flex flex-wrap items-stretch">
            {records.map((record, index) => (
              <div className="w-full lg:w-1/2 xl:w-1/4 px-5 mb-[60px] xl:mb-0" key={index}>
                <div className="h-full flex flex-col items-center bg-white relative shadow-priceIcon rounded-2xl p-5 pb-10 lg:p-[35px] pt-[53px] lg:pt-[60px]">
                  <div className="absolute top-0 -translate-y-1/2 flex items-center justify-center w-[85px] h-[85px] lg:w-[100px] lg:h-[100px] rounded-[50px] shadow-priceIcon bg-white">
                    <Image
                      src={record.icon}
                      className="scale-90 lg:scale-100"
                    />
                  </div>
                  <p className="font-bold text-lg text-[#463F3A] mb-3 leading-6 text-center">
                    {record.title}
                  </p>
                  <p className="text-[15px] lg:text-base text-[#463F3A] leading-5 text-center">
                    {record.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center px-5 pt-0 lg:pt-[84px] pb-14 lg:pb-[112px]">
        <PriceList />
      </div>
    </div>
  );
}
