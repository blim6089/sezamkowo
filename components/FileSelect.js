import Image from "next/image";
import File from "@/assets/images/icons/file.svg";

const FileSelect = (props) => {
  return (
    <div className="relative w-full h-[53px] border-b border-b-[#B3B3B3] bg-[#F2F3F3]">
      <input {...props} className="cursor-pointer w-full h-full opacity-0" />
      <div className="cursor-pointer absolute w-full h-full top-0 left-0 px-[18px] flex items-center border border-dotted border-[#B2B2B2] pointer-events-none">
        <Image src={File} />
        <span className="text-base text-[#463F3A] ml-1.5">{props.label}</span>
      </div>
    </div>
  );
};

export default FileSelect;
