import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function FlexColumn({ children }: Props) {
  return (
    <div className="flex flex-col grow gap-5 p-2 bg-slate-300">{children}</div>
  );
}
