import MuiCheckbox from "@material/react-checkbox";
import "@material/react-checkbox/dist/checkbox.css";

const Checkbox = (props) => {
  return (
    <label className={`flex items-center m-0 p-0 ${props.classes}`}>
      <MuiCheckbox />
      <span
        className={`text-base font-roboto text-[#463F3A] ${props.labelClasses}`}
      >
        {props.label}
      </span>
    </label>
  );
};

export default Checkbox;
