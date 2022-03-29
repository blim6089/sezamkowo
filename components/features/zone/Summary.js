import Image from "next/image";

import Document from "@/assets/images/icons/document.svg";
import Schedule from "@/assets/images/icons/schedule.svg";
import Question from "@/assets/images/icons/question.svg";
import Attachment from "@/assets/images/icons/attachment.svg";

const Summary = () => {
  const items = [
    {
      label: "Organizacja",
      icon: Document,
    },
    {
      label: "Plan Dnia",
      icon: Schedule,
    },
    {
      label: "Często zadawane pytania",
      icon: Question,
    },
    {
      label: "Dokumenty",
      icon: Attachment,
    },
  ];

  return (
    <div className="flex justify-center bg-gradient-to-b from-[#D9B99B25] to-white border-b border-b-[#E0AFA0]">
      <div className="max-w-[1537px] w-full flex justify-between pt-[98px] pb-11">
        {items.map((item, index) => (
          <div
            className="relative min-w-[303px] px-10 shadow-locationCard hover:shadow-cardHover transition bg-white rounded-2xl"
            key={index}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 w-[68px] h-[68px] rounded-full flex items-center justify-center bg-white shadow-locationCard hover:shadow-cardHover transition">
              <Image src={item.icon} />
            </div>
            <p className="font-bold text-2xl text-[#646464] text-center pt-16 pb-5">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
