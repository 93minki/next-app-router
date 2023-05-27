import TestPaperFilter from "@/components/molecules/TestPaperFilter/TestPaperFilter";
import TestPaperTab from "@/components/molecules/TestPaperTab/TestPaperTab";
import TestPaperTableHeader from "@/components/molecules/TestPaperTableHeader/TestPaperTableHeader";
import TestPaperItem from "@/components/molecules/TestPaperItem/TestPaperItem";

const TestPaperContainer = () => {
  return (
    <div className="flex flex-col space-y-4 py-4 px-4 border-2 border-slate-300 rounded-lg h-full">
      <TestPaperTab />
      <TestPaperFilter />
      <TestPaperTableHeader />
      <TestPaperItem />
      <TestPaperItem />
      <TestPaperItem />
    </div>
  );
};

export default TestPaperContainer;
