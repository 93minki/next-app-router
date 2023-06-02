"use client";
interface ButtonProps {
  size: "sm" | "md" | "lg";
  isActive?: true | false;
  rounded?: "sm" | "md" | "lg" | "full";
  onClickHandler?: () => void;
  children: React.ReactNode;
}

const Button = ({
  size = "md",
  isActive = false,
  onClickHandler,
  rounded = "md",
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      className={`p2 text-${size} ${
        isActive ? "bg-blue-200" : "bg-gray-200"
      } rounded-${rounded}`}
    >
      {children}
    </button>
  );
};

export default Button;
