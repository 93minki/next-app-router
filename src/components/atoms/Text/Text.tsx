interface TextProps {
  size: "sm" | "md" | "lg";
  content: string;
}
interface sizeTypes {
  [key: string]: string;
}

const Text = ({ size, content }: TextProps) => {
  const sizeVariant: sizeTypes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return <span className={`${sizeVariant[size]}`}>{content}</span>;
};

export default Text;
