import Image from "next/image";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

import Email from "@/assets/images/icons/email.svg";
import Phone from "@/assets/images/icons/phone.svg";
import Send from "@/assets/images/icons/send.svg";
import Checkbox from "./Checkbox";

const ContactForm = () => {
  return (
    <div className="w-full max-w-[787px] flex flex-col items-center text-[#463F3A] px-5 xl:px-0">
      <p className="text-[27px] xl:text-4xl mb-6 xl:mb-4 text-center">
        Masz więcej pytań?
      </p>
      <p className="w-full max-w-[658px] text-lg leading-6 text-center mb-5">
        Jeśli masz więcej pytań napisz do nas chętnie odpowiemy na Twoje
        pytania.
      </p>
      <div className="flex flex-col lg:flex-row justify-center mb-6">
        <span className="w-full lg:min-w-[400px] flex items-center justify-center mb-4 lg:mb-0">
          <Image src={Phone} />
          <span className="text-base text-[#463F3A] mx-2">+48 785 900 905</span>
        </span>
        <span className="w-full lg:min-w-[400px] flex items-center justify-center mb-4 lg:mb-0">
          <Image src={Email} />
          <span className="text-base text-[#463F3A] mx-2">
            email <span className="underline">zlobek@sezamkowo.waw.pl.</span>
          </span>
        </span>
      </div>
      <div className="w-full">
        <div className="mb-3.5">
          <TextField placeholder="Imię i nazwisko *" />
        </div>
        <div className="mb-3.5">
          <TextField type="email" placeholder="Adres Email *" />
        </div>
        <div className="mb-3.5">
          <TextField placeholder="Lokalizacja" />
        </div>
        <div className="mb-3.5">
          <Checkbox label="Nowy Wawer" />
          <Checkbox label="Marysin Wawerski" />
        </div>
        <div className="mb-8">
          <TextField multiline={true} placeholder="Wiadomość" />
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
  );
};

export default ContactForm;
