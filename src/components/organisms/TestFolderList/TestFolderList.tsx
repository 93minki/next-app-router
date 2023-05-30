import MoreButton from "@/components/molecules/MoreButton/MoreButton";
import TestFolder from "@/components/molecules/TestFolder/TestFolder";

interface TestFolderListProps {
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

const TestFolderList = ({ folder }: TestFolderListProps) => {
  return (
    <div className="py-8 px-8 flex space-x-8">
      <TestFolder content={folder.folder1} />
      <TestFolder content={folder.folder2} />
      <TestFolder content={folder.folder3} />
      <MoreButton className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-center">
        +
      </MoreButton>
    </div>
  );
};

export default TestFolderList;
