import Text from "@/components/atoms/Text/Text";

type NoticeCardProps = {
  type: string;
  title: string;
};

const NoticeCard = ({ type, title }: NoticeCardProps) => {
  return (
    <div className="flex flex-col  border-2 border-slate-400 rounded-lg p-4">
      <div className="mb-4">
        <Text>✨{type}</Text>
      </div>
      <div className="flex flex-col">
        <Text> {title} </Text>
      </div>
    </div>
  );
};

export default NoticeCard;
