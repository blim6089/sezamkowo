import { useRef } from "react";
import Slider from "react-slick";
import Post from "@/components/Post";

const RecentPosts = (props) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          infinite: true,
          variableWidth: true,
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const sliderRef = useRef();

  return (
    <div className="py-[54px] pb-8 lg:pb-[54px] px-5 xl:px-[140px]">
      <p className="font-bold text-[27px] lg:text-4xl text-[#463F3A] mb-9 text-center">
        Najnowsze posty
      </p>
      <div className="w-full">
        <Slider {...settings} ref={sliderRef}>
          {props.posts.map((post, index) => (
            <div
              className="w-[335px] xl:w-auto flex justify-center py-2 pr-10 2xl:pr-0"
              key={index}
            >
              <Post {...post} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentPosts;
