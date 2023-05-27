import Text from "@/components/atoms/Text/Text";

const NotiCard = () => {
  return (
    <section className="flex flex-col flex-1 border-2 border-slate-400 rounded-lg px-4 py-4">
      <div className="mb-4">
        <Text>✨알림</Text>
      </div>
      <div className="flex flex-col">
        <Text> 쿠폰 선물이 도착했어요 </Text>
        <Text> 프리미엄 이용권이 구매되었습니다. </Text>
      </div>
    </section>
  );
};

export default NotiCard;
