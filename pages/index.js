import Banner from "@/components/features/home/Banner";
import Features from "@/components/features/home/Features";
import Gallery from "@/components/Gallery";
import OurTeam from "@/components/features/home/OurTeam";
import PriceList from "@/components/PriceList";
import RecentPosts from "@/components/features/home/RecentPosts";
import Club from "@/components/Club";

import Photo1 from "@/assets/images/gallery/1.png";
import Photo2 from "@/assets/images/gallery/2.png";
import Photo3 from "@/assets/images/gallery/3.png";
import Photo4 from "@/assets/images/gallery/4.png";
import Photo5 from "@/assets/images/gallery/5.png";
import Photo6 from "@/assets/images/gallery/6.png";
import Photo7 from "@/assets/images/gallery/7.png";
import Photo8 from "@/assets/images/gallery/8.png";
import Photo9 from "@/assets/images/gallery/9.png";

import PostImage1 from "@/assets/images/posts/1.png";
import PostImage2 from "@/assets/images/posts/2.png";
import PostImage3 from "@/assets/images/posts/3.png";
import PostImage4 from "@/assets/images/posts/4.png";

export default function Home() {
  const recentPosts = [
    {
      title: "Wolny wieczór dla Rodziców? Czemu nie!",
      description:
        "Halo halo! \n Czy wiecie, że czasami spotykamy się w żłobku także w weekend?...",
      date: "16 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage1,
    },
    {
      title: "Opieka na wysokim poziomie",
      description:
        "Żłobek to świetne rozwiązanie dla rodziców, aby mieć trochę wolnego czasu lub możliwość spokojne...",
      date: "12 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage2,
    },
    {
      title: "Jesień",
      description:
        "Nasze czwartkowe popołudnie. \n Przyznać się, kto już robił szur szur szur bucikami lub szalał w liściach?...",
      date: "1 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage3,
    },
    {
      title: "Wolny wieczór dla Rodziców? Czemu nie!",
      description:
        "Halo halo! \n Czy wiecie, że czasami spotykamy się w żłobku także w weekend?...",
      date: "25 listopada 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage4,
    },
  ];

  return (
    <div>
      <Banner />
      <Features />
      <OurTeam />
      <div className="flex flex-col items-center bg-[#F6F6F6] py-[30px] px-5 lg:px-40">
        <p className="font-bold text-[27px] lg:text-4xl text-[#605954] mb-[27px] lg:mb-6 text-center">
          GALERIA ZDJĘĆ
        </p>
        <p className="max-w-[884px] text-base text-[#463F3A] leading-5 text-center mb-12">
          Sale są dostosowane do wieku dzieci, wyposażone w certyfikowane
          urządzenia i zabawki. Wnętrza są specjalnie projektowane pod kątem
          rozwoju najmłodszych i inspirowane pomocami stosowanymi przez Marię
          Montessori. Dzieci bawią się i uczą w wybranych przez siebie kącikach
          tematycznych.
        </p>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1280px]">
            <Gallery
              horizontal={true}
              photos={[
                Photo1,
                Photo2,
                Photo3,
                Photo4,
                Photo5,
                Photo6,
                Photo7,
                Photo8,
                Photo9,
              ]}
            />
          </div>
        </div>
        <button className="hidden xl:flex text-lg hover:text-[#FFA25E] transition underline self-end mt-4 px-2">
          ZOBACZ WIĘCEJ
        </button>
      </div>
      <div className="bg-white flex justify-center py-[52px] xl:py-[100px] px-5">
        <PriceList />
      </div>
      <div className="px-5 pt-8 lg:pt-14 pb-6 bg-gradient-to-b from-[#F7EAE6] to-white shadow-one relative z-10">
        <div className="max-w-[1000px] flex flex-col lg:flex-row items-start lg:items-center justify-between mx-auto text-[#463F3A]">
          <div className="max-w-[680px] mb-16 lg:mb-0">
            <p className="font-semibold text-2xl mb-4">Żłobek już otwarty!</p>
            <p className="text-lg mb-3">
              ruszamy 1 stycznia 2022 - więcej informacji wkrótce...
            </p>
            <p className="text-lg leading-6 mb-4">
              Dla rodziców powracających na rynek pracy - dofinansowanie z Unii
              Europejskiej sprawdź czy się kwalifikujesz wypełniając prostą
              ankietę i wyślij do nas na adres{" "}
              <span className="font-medium underline">
                zlobek@sezamkowo.waw.pl
              </span>
            </p>
            <p className="text-lg underline">Kliknij i wypełnij ankietę</p>
          </div>
          <span className="text-4xl self-end lg:self-center">430 zł.</span>
        </div>
      </div>
      <div className="mb-0 xl:mb-[100px]">
        <RecentPosts posts={recentPosts} />
      </div>
      <Club />
    </div>
  );
}
