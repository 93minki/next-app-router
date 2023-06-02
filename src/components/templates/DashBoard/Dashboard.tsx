import { Suspense } from "react";

type Props = {
  sideArea: React.ReactNode;
  mainTopArea: React.ReactNode;
  mainMiddleArea: React.ReactNode;
  mainBottomArea: React.ReactNode;
};

const DashBoardTemplate = ({
  sideArea,
  mainTopArea,
  mainMiddleArea,
  mainBottomArea,
}: Props) => {
  return (
    <div className=" md:flex justify-between my-5 gap-5 ">
      <aside className="md:w-1/4">{sideArea}</aside>
      <main className="flex flex-col grow gap-5">
        <Suspense fallback={<h1>🙀로딩중</h1>}>
          <section>{mainTopArea}</section>
        </Suspense>
        <Suspense fallback={<h1>😭로딩중</h1>}>
          <section>{mainMiddleArea}</section>
        </Suspense>
        <Suspense fallback={<h1>💦로딩중</h1>}>
          <section>{mainBottomArea}</section>
        </Suspense>
      </main>
    </div>
  );
};
export default DashBoardTemplate;
