import NoticeCard from "@/components/molecules/NoticeCard/NoticeCard";
import GridLow from "@/components/molecules/GridLow/GridLow";
import { UserInfo, UserInfoProps } from "@/type/userInfo";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";

interface CustomSession extends Session {
  jwt: string;
  userInfo: UserInfo;
}

const NoticeArea = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <GridLow grid={3}>
          <NoticeCard
            type={session.userInfo.notice.coupon.type}
            title={session.userInfo.notice.coupon.title}
          />
          <NoticeCard
            type={session.userInfo.notice.subscription.type}
            title={session.userInfo.notice.subscription.title}
          />
          <NoticeCard
            type={session.userInfo.notice.present.type}
            title={session.userInfo.notice.present.title}
          />
        </GridLow>
      ) : (
        <div>Loading.....</div>
      )}
    </>
  );
};

export default NoticeArea;
