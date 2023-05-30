import NotiCard from "@/components/molecules/NotiCard/NotiCard";

interface CardListProps {
  coupon: {
    type: string;
    title: string;
  };
  subsrciption: {
    type: string;
    title: string;
  };
  present: {
    type: string;
    title: string;
  };
}

const CardList = ({ coupon, subsrciption, present }: CardListProps) => {
  return (
    <div className="flex space-x-2 h-1/4">
      <NotiCard type={coupon.type} title={coupon.title} />
      <NotiCard type={subsrciption.type} title={subsrciption.title} />
      <NotiCard type={present.type} title={present.title} />
    </div>
  );
};

export default CardList;
