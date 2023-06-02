import React from "react";
import GridLow from "./GridLow/GridLow";
import Input from "../atoms/Input/Input";
import Text from "../atoms/Text/Text";

type Props = {
  grid: string;
  test: {
    id: string;
    title: string;
    createdAt: string;
    tag: string;
    grade: string;
  };
};

export default function TestCard({
  test: { grade, tag, title, createdAt },
  grid,
}: Props) {
  return (
    <GridLow grid={grid}>
      <Input type="checkbox" />
      <Text>{grade}</Text>
      <Text>{tag}</Text>
      <Text>{title}</Text>
      <Text>{createdAt}</Text>
    </GridLow>
  );
}
