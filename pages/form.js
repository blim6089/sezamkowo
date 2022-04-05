import Image from "next/image";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import Checkbox from "@/components/Checkbox";
import Send from "@/assets/images/icons/send.svg";

export default function FormPage() {
  return (
    <div className="px-5 py-[45px] lg:py-[75px]">
      <div className="w-full max-w-[787px] mx-auto">
        <p className="font-bold text-4xl lg:text-5xl text-[#646464] text-center mb-[22px] lg:mb-16 uppercase">
          Formularz zgoszeniowy
        </p>
        <div>
          <div className="mb-[27px]">
            <div className="mb-[15px]">
              <TextField placeholder="Imię (imiona) i nazwisko" />
            </div>
            <div className="mb-[15px]">
              <TextField placeholder="Data urodzenia" />
            </div>
          </div>
          <div className="mb-[37px]">
            <p className="font-roboto font-bold text-base text-[#463F3A] mb-3">
              Adres zamieszkania dziecka
            </p>
            <div className="mb-[15px]">
              <TextField placeholder="Ulica/ Nr. domu" />
            </div>
            <div className="flex -mx-2">
              <div className="w-1/3 mx-2">
                <TextField placeholder="Kod pocztowy" />
              </div>
              <div className="w-2/3 mx-2">
                <TextField placeholder="Miejscowość" />
              </div>
            </div>
          </div>
          <div className="mb-[37px]">
            <p className="font-roboto font-bold text-base text-[#463F3A] mb-3">
              Dane osobowe rodziców/prawnych opiekunów dziecka:
            </p>
            <div className="flex -mx-2 mb-[15px]">
              <div className="w-1/2 mx-2">
                <TextField placeholder="Imię (imiona) i nazwisko matki" />
              </div>
              <div className="w-1/2 mx-2">
                <TextField placeholder="Imię (imiona) i nazwisko ojca" />
              </div>
            </div>
            <div className="mb-[15px]">
              <TextField type="email" placeholder="Adres email opienkuna" />
            </div>
            <div className="mb-[15px]">
              <Checkbox label="dodaj adres email drugiego rodzica/ opiekuna" />
            </div>
            <div className="mb-[15px]">
              <TextField placeholder="Telefon kontaktowy" />
            </div>
            <div className="mb-[15px]">
              <Checkbox label="dodaj telefon kontaktowy drugiego rodzica/ opiekuna" />
            </div>
          </div>
          <div className="mb-[37px]">
            <p className="font-roboto font-bold text-base text-[#463F3A] mb-3">
              Informacje o dziecku i rodzicach/prawnych opiekunach na potrzeby
              rekrutacji (zaznacz odpowiednie informacje)
            </p>
            <div className="mb-[15px]">
              <Checkbox label="dziecko niepełnosprawne, proszę podać rodzaj niepełnosprawności" />
              <Checkbox label="rodzeństwo dziecka uczęszczającego do Niepublicznego Żłobka Sezamkowo" />
              <Checkbox label="dziecko o specjalnych potrzebach opiekuńczo-wychowawczo-pielęgnacyjnych" />
            </div>
          </div>
          <div className="mb-[37px]">
            <p className="font-roboto font-bold text-base text-[#463F3A] mb-3">
              Wybierz okalizacje żłobka
            </p>
            <div className="mb-[15px]">
              <Checkbox label="Nowy Wawer" />
              <Checkbox label="Marysin Wawerski" />
            </div>
          </div>
          <div className="mb-[37px]">
            <p className="font-roboto font-bold text-base text-[#463F3A] mb-3">
              Proponowany pakiet godzinowy:
            </p>
            <div className="mb-[15px]">
              <Checkbox label="Pakiet pełny 7:00 - 17:00" />
              <Checkbox label="Pakiet poranny 7:00 - 12:00" />
              <Checkbox label="Pakiet popołudniowy 7:00 - 12:00" />
            </div>
          </div>
          <div className="mb-[37px]">
            <p className="font-roboto text-base text-[#463F3A] mb-3">
              Proponowany termin rozpoczęcia uczestnictwa mojego dziecka w
              żłobku
            </p>
            <div className="mb-[15px]">
              <TextField type="date" placeholder="Wybierz datę" />
            </div>
            <div className="mb-[15px]">
              <div className="mb-[15px]">
                <Checkbox label="Wyrażam zgodę na przetwarzanie danych osobowych zawartych w formularzu rekrutacyjnym przez Administratora: Niepubliczny Żłobek Sezamkowo Agnieszka Truchan w Warszawie, ul. Sezam 5G, 04-538 Warszawa reprezentowany przez Dyrektora - Agnieszkę Truchan w celu rekrutacji do Niepublicznego Żłobka Sezamkowo w Warszawie, ul. Sezam 5G,04-538 Warszawa." />
              </div>
              <div className="mb-[15px]">
                <Checkbox label="Zapoznałem/ałam się z regulaminem przetwarzania danych osobowych oraz akceptuję jego warunki. Regulamin_przetwarzania_danych.pdf" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button>
              <div className="flex items-center px-10">
                <Image src={Send} />
                <span className="mx-5">Wyślij</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
