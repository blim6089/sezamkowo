import Gallery from "@/components/Gallery";
import LocationGallery from "@/components/features/gallery/LocationGallery";

import Photo2 from "@/assets/images/gallery/2.png";
import Photo4 from "@/assets/images/gallery/4.png";
import Photo6 from "@/assets/images/gallery/6.png";
import Photo16 from "@/assets/images/gallery/16.png";
import Photo17 from "@/assets/images/gallery/17.png";
import Photo18 from "@/assets/images/gallery/18.png";
import Photo20 from "@/assets/images/gallery/20.png";
import Photo22 from "@/assets/images/gallery/22.png";
import Photo25 from "@/assets/images/gallery/25.png";
import Photo27 from "@/assets/images/gallery/27.png";
import Photo28 from "@/assets/images/gallery/28.png";
import Photo29 from "@/assets/images/gallery/29.png";

import LocationPhoto1 from "@/assets/images/gallery/location/1.png";
import LocationPhoto2 from "@/assets/images/gallery/location/2.png";
import LocationPhoto3 from "@/assets/images/gallery/location/3.png";
import LocationPhoto4 from "@/assets/images/gallery/location/4.png";
import LocationPhoto5 from "@/assets/images/gallery/location/5.png";
import LocationPhoto6 from "@/assets/images/gallery/location/6.png";
import LocationPhoto7 from "@/assets/images/gallery/location/7.png";
import LocationPhoto8 from "@/assets/images/gallery/location/8.png";

export default function GalleryPage() {
  return (
    <div>
      <div className="pt-[68px] pb-[35px]">
        <div className="mx-auto max-w-[1596px]">
          <p className="font-bold text-4xl text-[#605954] text-center mb-[30px]">
            GALERIA ZDJĘĆ
          </p>
          <LocationGallery
            photos={[
              LocationPhoto1,
              LocationPhoto2,
              LocationPhoto3,
              LocationPhoto4,
              LocationPhoto1,
              LocationPhoto2,
              LocationPhoto3,
              LocationPhoto4,
            ]}
            title="Nowy Wawer"
            color="#FFA25E"
          />
          <LocationGallery
            photos={[
              LocationPhoto5,
              LocationPhoto6,
              LocationPhoto7,
              LocationPhoto8,
              LocationPhoto5,
              LocationPhoto6,
              LocationPhoto7,
              LocationPhoto8,
            ]}
            title="Marysin Wawerski"
            color="#FF8FA3"
          />
        </div>
      </div>
      <div className="pt-9 pb-[72px] bg-[#F6F6F6]">
        <div className="mx-auto max-w-[1596px]">
          <p className="relative font-bold text-[27px] text-[#605954] mb-[52px]">
            Nasza codzienność
            <span className="absolute w-[273px] h-[1px] bg-[#646464] top-[53px] left-0"></span>
          </p>
          <div className="flex flex-col items-center -m-2">
            <Gallery
              photos={[
                Photo17,
                Photo2,
                Photo18,
                Photo4,
                Photo20,
                Photo22,
                Photo17,
                Photo6,
                Photo25,
              ]}
            />
            <Gallery
              photos={[
                Photo17,
                Photo2,
                Photo27,
                Photo28,
                Photo20,
                Photo6,
                Photo16,
                Photo6,
                Photo29,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
