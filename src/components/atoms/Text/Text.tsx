type Props = {
  size?: "sm" | "md" | "lg" | "semiLg";
  bold?: "normal" | "semibold" | "bold";
  children: React.ReactNode;
};

const Text = ({ size = "md", bold = "normal", children }: Props) => {
  // return <span className={`w-size-${style} w-full truncate`}>{children}</span>;
  return (
    <span className={`block text-${size} font-${bold} w-full truncate`}>
      {children}
    </span>
  );
};

export default Text;
