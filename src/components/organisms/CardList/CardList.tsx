import NotiCard from "@/components/molecules/NotiCard/NotiCard";
import { UserInfoProps } from "@/type/userInfo";

const delayFetch = async (
  url: string,
  delay: number
): Promise<UserInfoProps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url, { cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, delay);
  });
};

const CardList = async () => {
  const data = await delayFetch("http://localhost:3000/api/user", 3000);
  return (
    <div className="flex space-x-2 h-1/4">
      <NotiCard
        type={data.notice.coupon.type}
        title={data.notice.coupon.title}
      />
      <NotiCard
        type={data.notice.subscription.type}
        title={data.notice.subscription.title}
      />
      <NotiCard
        type={data.notice.present.type}
        title={data.notice.present.title}
      />
    </div>
  );
};

export default CardList;
