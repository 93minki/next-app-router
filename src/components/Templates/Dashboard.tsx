import CardList from "../organisms/CardList/CardList";
import SidePanel from "../organisms/SidePanel/SidePanel";
import TestFolderContainer from "../organisms/TestFolderContainer/TestFolderContainer";
import TestPaperContainer from "../organisms/TestPaperContainer/TestPaperContainer";
import UserMembershipInfo from "../organisms/UserMembershipInfo/UserMembershipInfo";

interface userInfoProps {
  userInfo: {
    name: string;
    subscription: string;
  };
}

const DashBoardTemplate = ({ userInfo }: userInfoProps) => {
  console.log("name", userInfo.name, "subscription", userInfo.subscription);
  return (
    <div className="grid grid-cols-4 h-[100vh] mt-4 gap-3">
      <div className="flex-col col-span-1 space-y-4">
        <UserMembershipInfo />
        <SidePanel />
      </div>
      <div className="flex-col col-span-3 space-y-4">
        <CardList />
        <div className="h-[calc(75%-1rem)] flex flex-col space-y-4 ">
          <TestFolderContainer />
          <TestPaperContainer />
        </div>
      </div>
    </div>
  );
};
export default DashBoardTemplate;
