import NavItem from "@/components/atoms/NavItem/NavItem";
import FlexLow from "@/components/molecules/FlexLow/FlexLow";
import GridLow from "@/components/molecules/GridLow/GridLow";
import TestFolder from "@/components/molecules/TestFolder/TestFolder";

const TestFolderArea = () => {
  return (
    <div>
      {/* <MoreButton className="text-right pt-2 pr-4">&gt; 더보기</MoreButton> */}
      <NavItem href="/">{"> 더보기"}</NavItem>
      <FlexLow>
        <TestFolder />
        <TestFolder />
        <TestFolder />
      </FlexLow>
    </div>
  );
};

export default TestFolderArea;
