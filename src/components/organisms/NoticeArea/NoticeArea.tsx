import NoticeCard from "@/components/molecules/NoticeCard/NoticeCard";
import GridLow from "@/components/molecules/GridLow/GridLow";
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
        .then((err) => reject(err));
    }, delay);
  });
};

const NoticeArea = async () => {
  const data = await delayFetch("http://localhost:3000/api/user", 300);

  return (
    <GridLow grid={3}>
      <NoticeCard
        type={data.notice.coupon.type}
        title={data.notice.coupon.title}
      />
      <NoticeCard
        type={data.notice.subscription.type}
        title={data.notice.subscription.title}
      />
      <NoticeCard
        type={data.notice.present.type}
        title={data.notice.present.title}
      />
    </GridLow>
  );
};

export default NoticeArea;
