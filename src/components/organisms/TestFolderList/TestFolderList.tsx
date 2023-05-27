import MoreButton from "@/components/molecules/MoreButton/MoreButton";
import TestFolder from "@/components/molecules/TestFolder/TestFolder";

const TestFolderList = () => {
  return (
    <div className="py-8 px-8 flex space-x-8">
      <TestFolder />
      <TestFolder />
      <TestFolder />
      <MoreButton className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-center">
        +
      </MoreButton>
    </div>
  );
};

export default TestFolderList;
