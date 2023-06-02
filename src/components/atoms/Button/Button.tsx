"use client";

type Props = {
  size: "sm" | "md" | "lg";
  active?: true | false;
  onClick?: () => void;
  rounded?: "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
};

const Button = ({
  size = "md",
  active = false,
  onClick,
  rounded = "md",
  children,
}: Props) => {
  let style;
  if (size === "sm") {
    style = "p-2 text-sm";
  } else if (size === "md") {
    style = "p-2 text-md";
  } else if (size === "lg") {
    style = "p-2 text-lg";
  }

  if (active) {
    style += " bg-blue-200";
  } else {
    style += " bg-gray-200";
  }

  return (
    <button onClick={onClick} className={`${style} rounded-${rounded} `}>
      {children}
    </button>
  );
};

export default Button;
