import Image from "next/image";
import GoogleMapReact from "google-map-react";
import GoogleMapMarker from "@/assets/images/icons/google-map-marker.svg";
import GoogleMapMarkerBG from "@/assets/images/icons/google-map-marker-bg.svg";
const Marker = () => {
  return (
    <div className="relative inline-flex bg-white">
      <Image src={GoogleMapMarkerBG} />
      <div className="absolute top-2 left-1/2 -translate-x-1/2">
        <Image src={GoogleMapMarker} />
      </div>
    </div>
  );
};

const GoogleMap = (props) => {
  const mapSetting = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="w-[684px] h-[364px] rounded-[33px] overflow-hidden">
      <GoogleMapReact
        defaultCenter={mapSetting.center}
        defaultZoom={mapSetting.zoom}
      >
        <Marker {...props} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
