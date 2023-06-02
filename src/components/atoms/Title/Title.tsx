type TitleProps = {
  size?: "lg" | "xl" | "2xl" | "3xl";
  bold?: "semibold" | "bold" | "normal";
  children: React.ReactNode;
};

const Title = ({ size = "lg", bold = "semibold", children }: TitleProps) => {
  return <h1 className={`text-${size} font-${bold}`}>{children}</h1>;
};

export default Title;
