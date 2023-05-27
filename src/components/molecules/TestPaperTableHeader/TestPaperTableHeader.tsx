const TestPaperTableHeader = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        선택
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        학년/과목
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        태그
      </div>
      <div className="col-span-2 lg:text-base text-sm text-center bg-white text-violet-600 rounded-md px-2 py-2">
        시험지 이름
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        만든 날짜
      </div>
      <div className="bg-white lg:text-base text-sm text-violet-600 text-center px-2 py-2 rounded-md">
        다운로드
      </div>
    </div>
  );
};
export default TestPaperTableHeader;
