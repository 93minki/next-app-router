//@ts-nocheck
import NoticeArea from "@/components/organisms/NoticeArea/NoticeArea";
import SidePanel from "@/components/organisms/SidePanel/SidePanel";
import TestArea from "@/components/organisms/TestPaperArea/TestPaperArea";
import TestFolderArea from "@/components/organisms/TestFolderArea/TestFolderArea";
import DashBoardTemplate from "@/components/templates/DashBoard/Dashboard";
import { cookies } from "next/headers";

export async function generateMetadata({}) {
  return {
    title: "Dashboard",
  };
}

const DashboardPage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt");
  console.log("token?", token);
  return (
    <DashBoardTemplate
      sideArea={<SidePanel />}
      noticeArea={<NoticeArea />}
      testFolderArea={<TestFolderArea />}
      testArea={<TestArea />}
    />
  );
};

export default DashboardPage;
