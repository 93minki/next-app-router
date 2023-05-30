import MoreButton from "@/components/molecules/MoreButton/MoreButton";
import TestFolderList from "../TestFolderList/TestFolderList";

interface TestFolderContainerProps {
  folder: {
    folder1: {
      name: string;
      count: number;
    };
    folder2: {
      name: string;
      count: number;
    };
    folder3: {
      name: string;
      count: number;
    };
  };
}

const TestFolderContainer = ({ folder }: TestFolderContainerProps) => {
  return (
    <div className="border-2 border-slate-400 rounded-lg">
      <MoreButton className="text-right pt-2 pr-4">&gt; 더보기</MoreButton>
      <TestFolderList folder={folder} />
    </div>
  );
};

export default TestFolderContainer;
