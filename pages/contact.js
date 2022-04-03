import Image from "next/image";
import LocationCard from "@/components/LocationCard";
import ContactForm from "@/components/ContactForm";
import Facebook from "@/assets/images/icons/facebook-dark-lg.svg";
import Instagram from "@/assets/images/icons/instagram-dark-lg.svg";

export default function Contact() {
  const locations = [
    {
      id: "new",
      name: "Nowy Wawer",
      color: "#FFA25E",
      description: "Stanisława Miłkowskiego 2a, 04-683 Warszawa",
      phone: "+48 737 306 690",
      email: "zlobek@sezamkowo.waw.pl.",
    },
    {
      id: "old",
      name: "Marysin Wawerski",
      color: "#FF8FA3",
      description: "Sezam 5g, <br /> 04-538 Warszawa",
      phone: "+48 737 309 545",
      email: "zlobek@sezamkowo.waw.pl.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col 2xl:flex-row justify-between max-w-[1640px] mx-auto pt-5 lg:pt-16 pb-10 px-5">
        {locations.map((location) => (
          <div key={location.id} className="mb-6 2xl:mb-0">
            <LocationCard {...location} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center bg-[#F2F3F3] p-5 pb-7">
        <p className="text-lg text-[#463F3A] mb-7 text-center">
          Odwiedź nasze media społecznościowe
        </p>
        <div className="flex items-center">
          <a href="#" className="mx-2">
            <Image src={Facebook} />
          </a>
          <a href="#" className="mx-2">
            <Image src={Instagram} />
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-20 pb-16">
        <ContactForm />
      </div>
    </div>
  );
}
