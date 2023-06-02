import React from "react";

// props으로 grid컬럼 갯수,  내용 전달받기

type Props = {
  grid: "1" | "3" | "5" | "6";
  children: React.ReactNode;
};

export default function GridLow({ grid = "1", children }: Props) {
  let style = `grid grid-cols-3`;

  return <div className={style}>{children}</div>;
  // return <div className={grid style}>{children}</div>;
  // return <div className="grid col-span ">{children}</div>;
  // return <div className={`grid grid-cols-${grid}`}>{children}</div>;
}
