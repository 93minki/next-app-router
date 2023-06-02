"use client";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import React from "react";

export default function SearchBox() {
  //   const [value, setValue] = useState('');

  return (
    <div className="flex gap-2">
      <Input type="text" value="" placeholder="검색어입력" />
      {/* <input type="text" value="" placeholder="검색어입력하세용" readOnly /> */}
      <Button size="md" active onClick={() => console.log("검색어어어")}>
        검색
      </Button>
    </div>
  );
}
