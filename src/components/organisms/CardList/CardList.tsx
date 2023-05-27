import NotiCard from "@/components/molecules/NotiCard/NotiCard";

const CardList = () => {
  return (
    <div className="flex space-x-2 h-1/4">
      <NotiCard />
      <NotiCard />
      <NotiCard />
    </div>
  );
};

export default CardList;
