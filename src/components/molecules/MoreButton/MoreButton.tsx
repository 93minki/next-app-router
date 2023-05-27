import Text from "@/components/atoms/Text/Text";

interface MoreButtonProps {
  children: React.ReactNode;
  className: string;
}

const MoreButton = ({children, className}: MoreButtonProps) => {
  return (
    <div className={className}>
      <Text>{children}</Text>
    </div>
  );
};

export default MoreButton;
