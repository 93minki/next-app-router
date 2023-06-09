type TestPaperProps = {
  paper: {
    grade: string;
    title: string;
    created_at: string;
    tag: string;
  };
};

const TestPaper = ({ paper }: TestPaperProps) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      <input type="checkbox" />
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        {paper.grade}
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        {paper.tag}
      </div>
      <div className="col-span-2 lg:text-base text-sm text-center bg-white text-violet-600 rounded-md px-2 py-2">
        {paper.title}
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        {paper.created_at}
      </div>
      <div className="flex space-x-2 justify-center items-center">
        <span className="bg-white lg:text-base text-xs rounded-md px-2 py-2">
          🖨
        </span>
        <span className="bg-white lg:text-base text-xs rounded-md px-2 py-2">
          💾
        </span>
        <span className="bg-white lg:text-base text-xs rounded-md px-2 py-2">
          📌
        </span>
      </div>
    </div>
  );
};

export default TestPaper;
