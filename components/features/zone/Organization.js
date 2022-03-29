import Image from "next/image";
import Check from "@/assets/images/icons/circle-check.svg";

const Organization = () => {
  const items = [
    "Na stałe każda sala wyposażona jest w oczyszczacz powietrza monitorujący stan zanieczyszczenia. Posiadamy wydzielone pomieszczenie, z dala od sal, do odizolowana dziecka w razie podejrzenia zarażenia.",
    "Personel został przeszkolony w zakresie sprawdzania stanu zdrowia swojego i dzieci oraz procedur postępowania w razie podejrzenia zarażenia koronawirusem.",
    "Na stałe została wydzielona w szatni tablica na której dostępne są numery telefonów niezbędne do szybkiego reagowania w razie zagrożenia zarażeniem m.in. telefony do Sanitarnej Stacji Epidemiologicznej, lekarza pierwszego kontaktu, instrukcje mycia i dezynfekcji rak, instrukcja zakładani i zdejmowania maseczki oraz rękawiczek.",
    "W żłobku powstały specjalne dokumenty i procedury postępowania na wypadek zarażenia Covid-19, jesteśmy w stałym kontakcie ze Stacją Sanitarno-Epidemiologiczną aby szybko wdrażać nowe wytyczne i zalecenia sanepidu.",
    "Mamy ogromną nadzieję, że w tej trudnej sytuacji zachowując maksimum ostrożności i higieny, wspólnie z Państwem zapewnimy dzieciom bezpieczne warunki przebywania w żłobku.",
  ];
  return (
    <div className="flex justify-center pt-12 pb-24">
      <div className="max-w-[1375px] flex flex-col">
        <p className="font-bold text-4xl text-[#646464] mb-12 text-center">
          Organizacja
        </p>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex items-start mb-6">
              <div className="w-6 h-6 flex-shrink-0">
                <Image src={Check} />
              </div>
              <span className="ml-[27px] text-base text-[#463F3A]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Organization;
