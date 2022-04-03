import Image from "next/image";
import Club from "@/components/Club";
import Checkbox from "components/Checkbox";

import Email from "@/assets/images/icons/email.svg";
import Phone from "@/assets/images/icons/phone.svg";
import Send from "@/assets/images/icons/send.svg";
import TextField from "components/TextField";
import Button from "components/Button";

export default function ClubPage() {
  return (
    <div>
      <Club page={true} />
      <div className="flex justify-center pt-0 lg:pt-14 pb-20 px-5">
        <div className="w-full max-w-[786px]">
          <p className="font-bold text-[27px] lg:text-4xl text-[#463F3A] text-center mb-6">
            Wyślij zgłoszenie
          </p>
          <div className="hidden lg:flex justify-center mb-8">
            <span className="min-w-[400px] flex items-center justify-center">
              <Image src={Phone} />
              <span className="text-base text-[#463F3A] mx-2">
                +48 785 900 905
              </span>
            </span>
            <span className="min-w-[400px] flex items-center justify-center">
              <Image src={Email} />
              <span className="text-base text-[#463F3A] mx-2">
                email{" "}
                <span className="underline">zlobek@sezamkowo.waw.pl.</span>
              </span>
            </span>
          </div>
          <div>
            <div className="mb-4">
              <TextField placeholder="Imię (imiona) i nazwisko dziecka" />
            </div>
            <div className="mb-4">
              <TextField placeholder="Imię i nazwisko opiekuna" />
            </div>
            <div className="mb-4">
              <TextField type="email" placeholder="Adres email" />
            </div>
            <div className="max-w-[330px] mb-4">
              <TextField type="telephone" placeholder="Telefon" />
            </div>
            <div className="flex flex-col items-start pb-3 lg:pb-[54px] border-b border-b-[#999999]">
              <span className="font-bold text-base text-[#463F3A] mb-2 lg:mb-6">
                Zajęcia
              </span>
              <Checkbox label="Gordonki" />
              <Checkbox label="Sensoryka" />
            </div>
            <div className="-mx-[15px] pt-5 lg:pt-8">
              <Checkbox
                classes="mb-5 items-start"
                labelClasses="text-sm leading-6 ml-5"
                label="Wyrażam zgodę na przetwarzanie danych osobowych zawartych w formularzu rekrutacyjnym przez Administratora: Niepubliczny Żłobek Sezamkowo Agnieszka Truchan w Warszawie, ul. Sezam 5G, 04-538 Warszawa reprezentowany przez Dyrektora - Agnieszkę Truchan w celu rekrutacji do Niepublicznego Żłobka Sezamkowo w Warszawie, ul. Sezam 5G,04-538 Warszawa."
              />
              <Checkbox
                classes="mb-14 lg:mb-20 items-start"
                labelClasses="text-sm leading-6 ml-5"
                label="Zapoznałem/ałam się z regulaminem przetwarzania danych osobowych oraz akceptuję jego warunki.  Regulamin_przetwarzania_danych.pdf"
              />
            </div>
            <div className="flex justify-center">
              <Button>
                <div className="flex items-center px-8">
                  <Image src={Send} />
                  <span className="uppercase mx-3">Wyślij</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
