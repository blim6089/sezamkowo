const Button = (props) => {
  return (
    <button className="shadow-button rounded-full h-[76px] font-semibold text-xl text-white px-4 lg:px-8 bg-gradient-to-b from-[#FF8171] to-[#FF9863] uppercase">
      {props.children}
    </button>
  );
};

export default Button;
