const Document = () => {
  const items = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Formularz rejestracyjny",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  return (
    <div className="flex justify-center pb-[112px] pl-10 pr-5">
      <div className="w-full max-w-[950px]">
        <p className="font-bold text-[27px] lg:text-4xl text-[#463F3A] text-center mb-6 lg:mb-[50px] -ml-5">
          Dokumenty do pobrania
        </p>
        <ul className="list-decimal">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm text-[#463F3A] hover:text-[#FFA25E] mb-6 lg:mb-2 underline cursor-pointer transition"
            >
              <span className="mx-2">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Document;
