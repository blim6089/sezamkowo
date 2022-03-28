const Tag = (props) => {
  return (
    <span
      className="flex items-center px-2.5 h-6 border bg-white rounded-full text-sm"
      style={{ borderColor: props.color, color: props.color }}
    >
      {props.label}
    </span>
  );
};

export default Tag;
