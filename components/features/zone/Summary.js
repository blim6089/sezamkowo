import Image from "next/image";

import Document from "@/assets/images/icons/document.svg";
import Schedule from "@/assets/images/icons/schedule.svg";
import Question from "@/assets/images/icons/question.svg";
import Attachment from "@/assets/images/icons/attachment.svg";

const Summary = () => {
  const items = [
    {
      id: "organization",
      label: "Organizacja",
      icon: Document,
    },
    {
      id: "schedule",
      label: "Plan Dnia",
      icon: Schedule,
    },
    {
      id: "questions",
      label: "Często zadawane pytania",
      icon: Question,
    },
    {
      id: "document",
      label: "Dokumenty",
      icon: Attachment,
    },
  ];

  const handleScroll = (event, id) => {
    event.preventDefault();
    window.scrollTo(
      0,
      document.querySelector(`#${id}`).getBoundingClientRect().top -
        document.querySelector("#header").clientHeight
    );
  };

  return (
    <div className="flex justify-center bg-gradient-to-b from-[#D9B99B25] to-white border-b border-b-[#E0AFA0] px-1 lg:px-5 xl:px-0">
      <div className="max-w-[1537px] w-full flex flex-wrap justify-between pt-[72px] xl:pt-[98px] pb-0 xl:pb-11">
        {items.map((item, index) => (
          <a
            key={index}
            onClick={(e) => handleScroll(e, item.id)}
            href="#"
            className="w-1/2 px-4 xl:px-0 xl:w-auto lg:min-w-[303px] mb-8 xl:mb-0"
          >
            <div className="h-[76px] xl:h-auto relative shadow-locationCard px-1 lg:px-10 hover:shadow-cardHover transition bg-white rounded-2xl group">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 w-9 h-9 xl:w-[68px] xl:h-[68px] rounded-full flex items-center justify-center bg-white shadow-locationCard group-hover:shadow-cardHover transition">
                <Image src={item.icon} className="scale-50 xl:scale-100" />
              </div>
              <p className="font-bold text-sm xl:text-2xl text-[#646464] text-center pt-6 xl:pt-16 xl:pb-5">
                {item.label}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Summary;
