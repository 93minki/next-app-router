"use client";
import React from "react";

type Props = {
  type: string;
  value?: string;
  placeholder?: string;
};

export default function Input({ type, value = "", placeholder }: Props) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className="p-2"
      readOnly
    />
  );
}
