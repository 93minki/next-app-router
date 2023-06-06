import axios from "axios";
import { Suspense } from "react";
import useSWR from "swr";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

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
  const response = NextResponse.next();
  console.log(response.cookies.get("jwt"));
  // const { data, error } = useSWR("/api/users/me", async (url) => {
  //   const res = await axios.get(`http://localhost:1337${url}`, {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg1OTc5NDk2LCJleHAiOjE2ODg1NzE0OTZ9.LczUZmn46t3_RiLP_mEf9q-aJhxDo-oGk6COWVrAXEU`,
  //     },
  //   });
  //   return res.data;
  // });
  // console.log("data", data);
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
