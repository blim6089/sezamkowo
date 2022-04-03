import Image from "next/image";
import Tag from "@/components/Tag";

import Share from "@/assets/images/icons/share.svg";

const Post = (props) => {
  return (
    <div className="max-w-[335px] relative transition shadow-teamCard hover:shadow-cardHover rounded-2xl overflow-hidden">
      <div className="flex">
        <Image src={props.image} />
      </div>
      <div className="p-5 min-h-[233px] pb-[14px] rounded-b-2xl absolute left-0 right-0 bottom-0 bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF50]">
        <div className="flex flex-wrap mb-2">
          {props.categories.map((category, index) => (
            <div key={index} className="px-[5px]">
              <Tag {...category} />
            </div>
          ))}
        </div>
        <p className="font-bold text-lg leading-6 text-[#463F3A] mb-4">
          {props.title}
        </p>
        <p className="absolute text-base text-[#463F3A] leading-5 top-[113px] left-[22px] right-[22px] line-clamp-3">
          {props.description}
        </p>
        <div className="flex justify-between items-center absolute bottom-[14px] left-[22px] right-[22px]">
          <Image src={Share} />
          <span className="text-[13px] text-[#707070]">{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
