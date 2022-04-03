import Image from "next/image";

const TeamMember = (props) => {
  return (
    <div className="relative w-[292px] lg:w-[350px] h-full min-h-[420px] flex flex-col items-center rounded-2xl bg-[#F4F3EE] transition shadow-teamCard hover:shadow-cardHover px-5 pt-[66px] lg:pt-20 mt-[85px]">
      <div className="w-[105px] h-[105px] lg:w-[126px] lg:h-[126px] absolute top-[-67px] lg:top-[-85px] left-1/2 -translate-x-1/2 flex rounded-full shadow-teamCard">
        <Image
          src={props.avatar}
          className="min-w-[105px] min-h-[105px] w-[105px] h-[105px] lg:w-[126px] lg:h-[126px]"
        />
      </div>
      <p className="font-bold text-lg text-[#463F3A] text-center mb-6 lg:mb-4">
        {props.name}
      </p>
      <p className="h-6 font-light text-sm text-[#463F3A] text-center mb-[18px]">
        {props.role}
      </p>
      <p className="text-[#463F3A] leading-5 text-base text-center pb-5">
        {props.description}
      </p>
    </div>
  );
};

export default TeamMember;
