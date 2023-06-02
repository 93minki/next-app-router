"use client";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";

const SearchBox = () => {
  return (
    <div className="flex gap-2">
      <Input type="text" value="" placeholder="검색어입력" />
      <Button size="md" isActive onClickHandler={() => console.log("Search!")}>
        검색
      </Button>
    </div>
  );
};
export default SearchBox;
