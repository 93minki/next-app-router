const TestPaperTab = () => {
  return (
    <div className="flex space-x-8">
      <div className="bg-violet-600 lg:text-base text-sm text-white font-bold px-2 py-2 rounded-md">
        내가 만든 시험지
      </div>
      <div className="bg-slate-400 lg:text-base text-sm px-2 py-2 rounded-md">
        구매한 시험지
      </div>
    </div>
  );
};

export default TestPaperTab;
