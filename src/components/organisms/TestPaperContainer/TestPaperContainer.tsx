import TestPaperFilter from "@/components/molecules/TestPaperFilter/TestPaperFilter";
import TestPaperTab from "@/components/molecules/TestPaperTab/TestPaperTab";
import TestPaperTableHeader from "@/components/molecules/TestPaperTableHeader/TestPaperTableHeader";
import TestPaperItem from "@/components/molecules/TestPaperItem/TestPaperItem";

interface TestPaperContainerProps {
  paper: {
    paper1: {
      grade: string;
      tag: string;
      title: string;
      created_at: string;
    };
    paper2: {
      grade: string;
      tag: string;
      title: string;
      created_at: string;
    };
    paper3: {
      grade: string;
      tag: string;
      title: string;
      created_at: string;
    };
  };
}

const TestPaperContainer = ({ paper }: TestPaperContainerProps) => {
  return (
    <div className="flex flex-col space-y-4 py-4 px-4 border-2 border-slate-300 rounded-lg h-full">
      <TestPaperTab />
      <TestPaperFilter />
      <TestPaperTableHeader />
      <TestPaperItem paper={paper.paper1} />
      <TestPaperItem paper={paper.paper2}/>
      <TestPaperItem paper={paper.paper3} />
    </div>
  );
};

export default TestPaperContainer;
