import { useState } from "react";
import Image from "next/image";
import ArrowDown from "@/assets/images/icons/arrow-down.svg";

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="relative h-[55px] rounded-full px-11 flex items-center bg-white border border-[#C4C4C4] cursor-pointer hover:shadow-locationCard hover:shadow-cardHover transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-[#463F3A]">{props.question}</span>
        <div
          className={`absolute right-5 transition transform ${
            isOpen ? `rotate-180` : `rotate-0`
          }`}
        >
          <Image src={ArrowDown} />
        </div>
      </div>
      {isOpen && (
        <div className="text-base leading-5 text-[#463F3A] px-6 pt-[18px] pb-1.5">
          {props.answer}
        </div>
      )}
    </div>
  );
};

export default Question;
