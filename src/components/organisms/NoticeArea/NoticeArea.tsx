import FlexLow from "@/components/molecules/FlexLow/FlexLow";
import NoticeCard from "@/components/molecules/NoticeCard/NoticeCard";

type Props = {
  children?: React.ReactNode;
};

const NoticeArea = async ({ children }: Props) => {
  const noticeList = await fetch("http://localhost:3000/api/notice")
    .then((res) => res.json())
    .then((data) => data.data)
    .then((data) => JSON.parse(data));

  return (
    <FlexLow>
      <NoticeCard title="💫알림" list={noticeList} />
      <NoticeCard title="📜공지" list={noticeList} />
      <NoticeCard title="🎸기타" list={noticeList} />
    </FlexLow>
  );
};

export default NoticeArea;
