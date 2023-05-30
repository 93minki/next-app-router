import CardList from "../../organisms/CardList/CardList";
import SidePanel from "../../organisms/SidePanel/SidePanel";
import TestFolderContainer from "../../organisms/TestFolderContainer/TestFolderContainer";
import TestPaperContainer from "../../organisms/TestPaperContainer/TestPaperContainer";
import UserMembershipInfo from "../../organisms/UserMembershipInfo/UserMembershipInfo";
import { Suspense } from "react";

const DashBoardTemplate = () => {
  return (
    <div className="grid grid-cols-4 h-[100vh] mt-4 gap-3">
      <div className="flex-col col-span-1 space-y-4">
        <Suspense fallback={<div>MembershipInfo Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <UserMembershipInfo />
        </Suspense>
        <SidePanel />
      </div>
      <div className="flex-col col-span-3 space-y-4">
        <Suspense fallback={<div>CardList Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <CardList />
        </Suspense>
        <div className="h-[calc(75%-1rem)] flex flex-col space-y-4 ">
          <Suspense fallback={<div>TestFolder Loading...</div>}>
            <TestFolderContainer />
          </Suspense>
          <Suspense fallback={<div>TestPaper Loading...</div>}>
            {/* @ts-expect-error Server Component */}
            <TestPaperContainer />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default DashBoardTemplate;
