type Props = {
  type: string;
  value?: string;
  placeholder?: string;
};

const Input = ({ type, value = "", placeholder = "" }: Props) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className="p-2"
      readOnly
    />
  );
};

export default Input;
