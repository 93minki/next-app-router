type Props = {
  size?: "xs" | "sm" | "md" | "lg";
  bold?: "semibold" | "bold" | "normal";
  children: React.ReactNode;
};

const Title = ({ size = "sm", bold = "semibold", children }: Props) => {
  let style;
  if (size === "xs") {
    style = "text-lg";
  } else if (size === "sm") {
    style = "text-xl";
  } else if (size === "lg") {
    style = "text-3xl";
  } else {
    style = "text-2xl";
  }

  if (bold === "semibold") {
    style += " font-semibold";
  } else if (bold === "bold") {
    style += " font-bold";
  } else {
  }

  return <h1 className={` ${style}`}>{children}</h1>;
};

export default Title;
