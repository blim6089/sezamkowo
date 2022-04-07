import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Photo from "@/assets/images/lightbox/1.png";
import Close from "@/assets/images/icons/close.svg";
import ArrowLeft from "@/assets/images/icons/arrow-left.svg";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";

const Lightbox = (props) => {
  const photos = [Photo, Photo, Photo, Photo];
  const sliderRef = useRef();
  const settings = {
    className: "w-full h-full",
    infinite: true,
    slidesToShow: 1,
    arrows: false,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {props.isOpen && (
        <div className="fixed w-screen h-screen top-0 left-0 z-[100]">
          <button
            className="p-1.5 lg:p-3 w-7 lg:w-[46px] w-7 lg:h-[46px] flex justify-center items-center bg-[#FFFFFF90] backdrop-blur-sm rounded-md absolute top-6 lg:top-10 right-4 lg:right-10 z-50"
            onClick={props.onClose}
          >
            <Image src={Close} />
          </button>
          <div className="flex bg-[#FFFFFF90] backdrop-blur-sm rounded-md absolute left-1/2 -translate-x-1/2 bottom-9 p-2 z-50">
            <button
              className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex justify-center items-center mx-0.5"
              onClick={handlePrevious}
            >
              <Image src={ArrowLeft} />
            </button>
            <button
              className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex justify-center items-center mx-0.5"
              onClick={handleNext}
            >
              <Image src={ArrowRight} />
            </button>
          </div>

          <Slider {...settings} ref={sliderRef}>
            <img
              src={Photo.src}
              className="w-screen h-screen object-cover"
              alt=":( Not Found"
            />
            <img
              src={Photo.src}
              className="w-screen h-screen object-cover"
              alt=":( Not Found"
            />
          </Slider>
        </div>
      )}
    </>
  );
};

export default Lightbox;
