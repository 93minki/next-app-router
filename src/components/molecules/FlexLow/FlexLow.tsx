type FlexLowProps = {
  children: React.ReactNode;
};

const FlexLow = ({ children }: FlexLowProps) => {
  return <div className="flex gap-5">{children}</div>;
};

export default FlexLow;
