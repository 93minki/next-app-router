"use client";

import { useState } from "react";

type Props = {
  children: React.ReactNode;
  isChecked?: boolean;
};

const CheckButton = ({ children, isChecked = false }: Props) => {
  const [check, setCheck] = useState(isChecked ? true : false);

  return (
    <button
      className={`p-2 rounded-lg ${check ? "bg-blue-200" : "bg-gray-200"}`}
      onClick={() => setCheck((prev) => !prev)}
    >
      {children}
    </button>
  );
};

export default CheckButton;
