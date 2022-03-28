const TextField = (props) => {
  return (
    <input
      {...props}
      className="w-full h-[53px] font-roboto outline-none border-b border-b-[#B3B3B3] bg-[#F2F3F3] px-[18px] text-base text-[#463F3A] placeholder:text-[#463F3A]"
    />
  );
};

export default TextField;
