type Props = {
  size?: "sm" | "md" | "lg";
  bold?: "normal" | "semibold" | "bold";
  children: React.ReactNode;
};

const Text = ({ size = "md", bold = "normal", children }: Props) => {
  return (
    <span className={`text-${size} font-${bold} w-full truncate`}>
      {children}
    </span>
  );
};

export default Text;
