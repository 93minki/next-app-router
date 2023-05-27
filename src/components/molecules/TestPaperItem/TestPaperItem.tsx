const TestPaperItem = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      <div className="bg-white text-violet-600 text-center w-8 h-8 rounded-md place-items-center m-auto" />
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        초등5학년
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        시험대비
      </div>
      <div className="col-span-2 lg:text-base text-sm text-center bg-white text-violet-600 rounded-md px-2 py-2">
        초등5학년 2학기 기말대비
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        23.05.23
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

export default TestPaperItem;
