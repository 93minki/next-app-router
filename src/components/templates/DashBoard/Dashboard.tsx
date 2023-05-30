import { UserInfoProps } from "@/type/userInfo";
import CardList from "../../organisms/CardList/CardList";
import SidePanel from "../../organisms/SidePanel/SidePanel";
import TestFolderContainer from "../../organisms/TestFolderContainer/TestFolderContainer";
import TestPaperContainer from "../../organisms/TestPaperContainer/TestPaperContainer";
import UserMembershipInfo from "../../organisms/UserMembershipInfo/UserMembershipInfo";

const DashBoardTemplate = ({ userInfo }: UserInfoProps) => {
  return (
    <div className="grid grid-cols-4 h-[100vh] mt-4 gap-3">
      <div className="flex-col col-span-1 space-y-4">
        <UserMembershipInfo
          username={userInfo.name}
          subscription={userInfo.subscription}
          point={userInfo.point}
          coupon={userInfo.coupon}
        />
        <SidePanel />
      </div>
      <div className="flex-col col-span-3 space-y-4">
        <CardList
          coupon={userInfo.notice.coupon}
          subsrciption={userInfo.notice.subscription}
          present={userInfo.notice.present}
        />
        <div className="h-[calc(75%-1rem)] flex flex-col space-y-4 ">
          <TestFolderContainer folder={userInfo.folder} />
          <TestPaperContainer paper={userInfo.paper} />
        </div>
      </div>
    </div>
  );
};
export default DashBoardTemplate;
