interface TextProps {
  // size?: "sm" | "md" | "lg";
  // bold?: boolean;
  // content?: string;
  className?: string;
  children: React.ReactNode;
}
interface sizeTypes {
  [key: string]: string;
}

const Text = ({
  // size = "md",
  // bold = false,
  // content = "text",
  className = "",
  children,
}: TextProps) => {
  const sizeVariant: sizeTypes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return <span className={` ${className} `}>{children}</span>;
};

export default Text;
