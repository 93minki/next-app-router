import NoticeArea from "@/components/organisms/NoticeArea/NoticeArea";
import SidePanel from "@/components/organisms/SidePanel/SidePanel";
import DashBoardTemplate from "@/components/templates/DashBoard/Dashboard";
import TestFolderArea from "@/components/organisms/TestFolderArea/TestFolderArea";
import TestArea from "@/components/organisms/TestArea/TestArea";

const DashboardPage = async () => {
  // const res = await fetch("http://localhost:3000/api/user");
  // const json = await res.json();

  return (
    // {/* template에는 props로 데이터를 전달. 즉 데이터 바인딩은 페이지에서 해야됨*/}
    // <h1>대시보드</h1>
    <DashBoardTemplate
      sideArea={<SidePanel />}
      mainTopArea={
        /* @ts-expect-error Async Server Component */
        <NoticeArea />
      }
      mainMiddleArea={<TestFolderArea />}
      mainBottomArea={
        /* @ts-expect-error Async Server Component */
        <TestArea />
      }
    />
  );
};

export default DashboardPage;
