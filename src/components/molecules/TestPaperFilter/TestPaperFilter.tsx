const TestPaperFilter = () => {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-2">
        <div className="bg-white text-violet-600 lg:text-base text-sm rounded-md px-2 py-2">
          전체 / 초 / 중 / 고
        </div>
        <div className="bg-white text-violet-600 lg:text-base text-sm rounded-md px-2 py-2 w-28 text-center">
          태그
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="bg-white text-violet-600 lg:text-base text-sm rounded-md px-2 py-2 w-64 text-center">
          검색창
        </div>
        <div className="bg-violet-600 text-white lg:text-base text-sm rounded-md px-2 py-2">
          시험지 추가하기
        </div>
      </div>
    </div>
  );
};

export default TestPaperFilter;
