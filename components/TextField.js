const TextField = ({ multiline = false, ...props }) => {
  return (
    <>
      {!multiline ? (
        <input
          {...props}
          className="w-full h-[53px] font-roboto outline-none border-b border-b-[#B3B3B3] bg-[#F2F3F3] px-[18px] text-base text-[#463F3A] placeholder:text-[#463F3A]"
        />
      ) : (
        <textarea
          {...props}
          className="w-full h-[198px] font-roboto outline-none border-b border-b-[#B3B3B3] bg-[#F2F3F3] px-[18px] py-2 text-base text-[#463F3A] placeholder:text-[#463F3A]"
        />
      )}
    </>
  );
};

export default TextField;
