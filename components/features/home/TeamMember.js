import Image from "next/image";

const TeamMember = (props) => {
  return (
    <div className="relative w-[350px] h-full min-h-[420px] flex flex-col items-center rounded-2xl bg-[#F4F3EE] shadow-teamCard px-5 pt-20 mt-[85px]">
      <div className="absolute top-[-85px] left-1/2 -translate-x-1/2">
        <Image src={props.avatar} />
      </div>
      <p className="font-bold text-lg text-[#463F3A] text-center mb-4">
        {props.name}
      </p>
      <p className="h-6 font-light text-sm text-[#463F3A] text-center mb-[18px]">
        {props.role}
      </p>
      <p className="text-[#463F3A] leading-5 text-base text-center">
        {props.description}
      </p>
    </div>
  );
};

export default TeamMember;
