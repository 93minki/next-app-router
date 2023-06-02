import CheckButton from "@/components/atoms/CheckButton/CheckButton";
import SearchBox from "@/components/molecules/SearchBox/SearchBox";
import Text from "@/components/atoms/Text/Text";
import { UserInfoProps } from "@/type/userInfo";
import TestPaper from "@/components/molecules/TestPaper/TestPaper";
import GridLow from "@/components/molecules/GridLow/GridLow";
import FlexLow from "@/components/molecules/FlexLow/FlexLow";

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

const TestPaperArea = async () => {
  const data = await delayFetch("http://localhost:3000/api/user", 200);

  return (
    <div className="flex flex-col gap-2 bg-slate-400">
      <FlexLow>
        <CheckButton isChecked>전체</CheckButton>
        <CheckButton>내가 만든 시험지</CheckButton>
        <CheckButton>구매한 시험지</CheckButton>
      </FlexLow>
      <FlexLow>
        <CheckButton isChecked>전체</CheckButton>
        <CheckButton>초</CheckButton>
        <CheckButton>중</CheckButton>
        <CheckButton>고</CheckButton>
        <SearchBox />
      </FlexLow>

      <GridLow grid={6}>
        <Text bold="semibold">선택</Text>
        <Text bold="semibold">학년/과목</Text>
        <Text bold="semibold">태그</Text>
        <Text bold="semibold">시험지 이름</Text>
        <Text bold="semibold">만든 날짜</Text>
        <Text bold="semibold">다운로드</Text>
      </GridLow>

      {data.paper.map((item) => {
        return <TestPaper paper={item} key={item.title} />;
      })}
    </div>
  );
};

export default TestPaperArea;
