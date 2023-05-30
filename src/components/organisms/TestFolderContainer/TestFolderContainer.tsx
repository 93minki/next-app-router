import MoreButton from "@/components/molecules/MoreButton/MoreButton";
import TestFolderList from "../TestFolderList/TestFolderList";
import { Suspense } from "react";

const TestFolderContainer = () => {
  return (
    <div className="border-2 border-slate-400 rounded-lg">
      <MoreButton className="text-right pt-2 pr-4">&gt; 더보기</MoreButton>
      {/* @ts-expect-error Server Component */}
      <TestFolderList />
    </div>
  );
};

export default TestFolderContainer;
