import { Suspense } from "react";
import { useSelector } from "react-redux";

type DashBoardTemplateProps = {
  sideArea: React.ReactNode;
  noticeArea: React.ReactNode;
  testFolderArea: React.ReactNode;
  testArea: React.ReactNode;
};

const DashBoardTemplate = ({
  sideArea,
  noticeArea,
  testFolderArea,
  testArea,
}: DashBoardTemplateProps) => {
  return (
    <div className="md:flex justify-between my-5 gap-5">
      <aside className="md:w-1/4">{sideArea}</aside>
      <main className="flex flex-col grow gap-5">
        <Suspense fallback={<div>Loading...</div>}>
          <section>{noticeArea}</section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>{testFolderArea}</section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>{testArea}</section>
        </Suspense>
      </main>
    </div>
  );
};
export default DashBoardTemplate;
