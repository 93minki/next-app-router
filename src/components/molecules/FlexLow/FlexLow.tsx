import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function FlexLow({ children }: Props) {
  return <div className="flex gap-5">{children}</div>;
}
