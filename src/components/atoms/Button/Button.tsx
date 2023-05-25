"use client";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  color: "main" | "sub";
  text: string;
  onClickHandler?: () => void;
}

interface sizeTypes {
  [key: string]: string;
}

interface colorTypes {
  [key: string]: string;
}

const Button = ({ size, color, text, onClickHandler }: ButtonProps) => {
  const sizeVariants: sizeTypes = {
    sm: "w-20 h-5",
    md: "w-30 h-10",
    lg: "w-50 h-15",
  };

  const colorVariants: colorTypes = {
    main: "bg-blue-700",
    sub: "bg-blue-200",
  };

  return (
    <button
      onClick={onClickHandler}
      className={`${colorVariants[color]} ${sizeVariants[size]} ml-10  `}
    >
      {text}
    </button>
  );
};

export default Button;
