"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  checked?: boolean;
};

export default function CheckButton({ children, checked = false }: Props) {
  const [check, setCheck] = useState(checked ? true : false);
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (check) {
      setStyle((prev) => "bg-blue-200");
    } else {
      setStyle((prev) => "bg-gray-200");
    }
  }, [check]);

  return (
    <button
      className={`p-2 rounded-lg ${style}`}
      onClick={() => setCheck((prev) => !prev)}
    >
      {children}
    </button>
  );
}
