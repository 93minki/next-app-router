import Text from "@/components/atoms/Text/Text";

type Props = {
  title: string;
  list: {
    id: string;
    title: string;
  }[];
};

const NoticeCard = ({ title, list }: Props) => {
  // notice 데이터 바인딩
  return (
    <div className="flex flex-col flex-1 border-2 border-slate-400 rounded-lg p-4">
      <div className="mb-4">
        <Text>{title}</Text>
      </div>
      <div className="flex flex-col">
        {list.map((it) => (
          <Text key={it.id}>{it.title}</Text>
        ))}
      </div>
    </div>
  );
};

export default NoticeCard;
