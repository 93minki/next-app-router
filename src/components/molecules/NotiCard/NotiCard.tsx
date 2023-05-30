import Text from "@/components/atoms/Text/Text";

interface NotiCardProp {
  type: string;
  title: string;
}

const NotiCard = ({ type, title }: NotiCardProp) => {
  return (
    <section className="flex flex-col flex-1 border-2 border-slate-400 rounded-lg px-4 py-4">
      <div className="mb-4">
        <Text>✨{type}</Text>
      </div>
      <div className="flex flex-col">
        <Text> {title} </Text>
      </div>
    </section>
  );
};

export default NotiCard;
