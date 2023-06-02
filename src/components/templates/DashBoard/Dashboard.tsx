import { Suspense } from "react";

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
  // return (
  //   <div className="grid grid-cols-4 h-[100vh] mt-4 gap-3">
  //     <div className="flex-col col-span-1 space-y-4">
  //       <Suspense fallback={<div>MembershipInfo Loading...</div>}>
  //         {/* @ts-expect-error Server Component */}
  //         <UserMembershipInfo />
  //       </Suspense>
  //       <SidePanel />
  //     </div>
  //     <div className="flex-col col-span-3 space-y-4">
  //       <Suspense fallback={<div>CardList Loading...</div>}>
  //         {/* @ts-expect-error Server Component */}
  //         <CardList />
  //       </Suspense>
  //       <div className="h-[calc(75%-1rem)] flex flex-col space-y-4 ">
  //         <Suspense fallback={<div>TestFolder Loading...</div>}>
  //           <TestFolderContainer />
  //         </Suspense>
  //         <Suspense fallback={<div>TestPaper Loading...</div>}>
  //           {/* @ts-expect-error Server Component */}
  //           <TestPaperContainer />
  //         </Suspense>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default DashBoardTemplate;
