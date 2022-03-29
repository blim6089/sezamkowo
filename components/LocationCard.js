import Image from "next/image";
import GoogleMapReact from "google-map-react";
import Phone from "@/assets/images/icons/phone.svg";
import Email from "@/assets/images/icons/email.svg";

const LocatinoCard = (props) => {
  const mapSetting = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <div className="flex shadow-locationCard hover:shadow-cardHover transition rounded-2xl bg-white p-[18px] pt-3.5">
      <div className="px-5 py-7">
        <p className="font-bold text-2xl mb-3" style={{ color: props.color }}>
          {props.name}
        </p>
        <p
          className="max-w-[250px] text-base text-[#463F3A] mb-8"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        <p className="flex items-center mb-4">
          <Image src={Phone} />
          <span className="ml-4 text-base text-[#463F3A]">{props.phone}</span>
        </p>
        <p className="flex items-center text-base text-[#463F3A]">
          <Image src={Email} />
          <span className="ml-4 text-base text-[#463F3A] underline">
            {props.email}
          </span>
        </p>
      </div>
      <div className="w-[417px] h-[303px] rounded-2xl overflow-hidden">
        <GoogleMapReact
          defaultCenter={mapSetting.center}
          defaultZoom={mapSetting.zoom}
        />
      </div>
    </div>
  );
};

export default LocatinoCard;
