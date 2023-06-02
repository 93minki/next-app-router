import React from "react";
import CheckButton from "@/components/atoms/CheckButton/CheckButton";
import SearchBox from "@/components/molecules/SearchBox/SearchBox";
import FlexLow from "@/components/molecules/FlexLow/FlexLow";
import GridLow from "@/components/molecules/GridLow/GridLow";
import Text from "@/components/atoms/Text/Text";
import Input from "@/components/atoms/Input/Input";

type Test = {
  id: string;
  title: string;
  createdAt: string;
  tag: string;
  grade: string;
};

const TestArea = async () => {
  const testlist = await fetch("http://localhost:3000/api/testlist")
    .then((res) => res.json())
    .then((data) => data.data);
  // .then((data) => JSON.parse(data));

  return (
    <div className="flex flex-col gap-2 bg-slate-400">
      {/* 탭 */}
      <FlexLow>
        <CheckButton checked>전체</CheckButton>
        <CheckButton>내가 만든 시험지</CheckButton>
        <CheckButton>구매한 시험지</CheckButton>
      </FlexLow>
      <FlexLow>
        <CheckButton checked>전체</CheckButton>
        <CheckButton>초</CheckButton>
        <CheckButton>중</CheckButton>
        <CheckButton>고</CheckButton>

        <SearchBox />
      </FlexLow>

      <GridLow grid="5">
        <Text bold="semibold">선택</Text>
        <Text bold="semibold">학년</Text>
        <Text bold="semibold">태그</Text>
        <Text bold="semibold">시험지명</Text>
        <Text bold="semibold">생성일</Text>
      </GridLow>

      {testlist.map(({ id, title, createdAt, tag, grade }: Test) => (
        <GridLow key={id} grid="3">
          <Input type="checkbox" />
          <Text>{grade}</Text>
          <Text>{tag}</Text>
          <Text>{title}</Text>
          <Text>{createdAt}</Text>
        </GridLow>
      ))}
    </div>
  );
};

export default TestArea;
