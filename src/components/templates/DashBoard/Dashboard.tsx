import axios from "axios";
import { Suspense } from "react";
import useSWR from "swr";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

type DashBoardTemplateProps = {
  sideArea: React.ReactNode;
  noticeArea: React.ReactNode;
  testFolderArea: React.ReactNode;
  testArea: React.ReactNode;
};

const DashBoardTemplate = async ({
  sideArea,
  noticeArea,
  testFolderArea,
  testArea,
}: DashBoardTemplateProps) => {
  const response = NextResponse.next();
  console.log("response cookie", response.cookies.get("jwt"));
  const session = await getServerSession(authOptions);
  console.log("session", session);
  // const { data, error } = useSWR("/api/users/me", async (url) => {
  //   const res = await axios.get(`http://localhost:1337${url}`, {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg1OTc5NDk2LCJleHAiOjE2ODg1NzE0OTZ9.LczUZmn46t3_RiLP_mEf9q-aJhxDo-oGk6COWVrAXEU`,
  //     },
  //   });
  //   return res.data;
  // });
  // console.log("data", data);

  const getAPI = await axios.get(
    "http://127.0.0.1:1337/api/users/me"
    // {
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg1OTc5NDk2LCJleHAiOjE2ODg1NzE0OTZ9.LczUZmn46t3_RiLP_mEf9q-aJhxDo-oGk6COWVrAXEU",
    //   },
    // }
  );
  console.log("getAPPI", getAPI.data);

  // let headersList = {
  //   Accept: "*/*",
  //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg1OTU2NTQxLCJleHAiOjE2ODg1NDg1NDF9.wEmtHC7UM1_ATfw93QfNehtWAFHhz9VytkGburlp-Jk",
  // };

  // let rrrrr = await fetch("http://localhost:1337/api/users/me", {
  //   method: "GET",
  // });

  // let data = await rrrrr.text();
  // console.log(data);

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
