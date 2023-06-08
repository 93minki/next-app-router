import { Suspense } from "react";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import axios from "axios";
import { UserInfo } from "@/type/userInfo";

type DashBoardTemplateProps = {
  sideArea: React.ReactNode;
  noticeArea: React.ReactNode;
  testFolderArea: React.ReactNode;
  testArea: React.ReactNode;
};

interface CustomSession extends Session {
  jwt: string;
  user: UserInfo;
}
const DashBoardTemplate = async ({
  sideArea,
  noticeArea,
  testFolderArea,
  testArea,
}: DashBoardTemplateProps) => {
  const session: CustomSession | null = await getServerSession(authOptions);
  console.log("hello session", session);

  if (session) {
    console.log("session jwt", session.jwt);
    const getAPI = await axios.get("http://127.0.0.1:1337/api/users/me", {
      headers: {
        Authorization: `Bearer ${session.jwt}`,
      },
    });
    console.log("getAPPI", getAPI.data);
  }

  // 1. Authorization에 Bearer 토큰 자동 추가 방법이 있는지 없는지, 있다면 찾아보기 없다면 저렇게 그냥 쓰고 근데 있을듯
  // 2. useSWR 사용해서, // useSession(loading,,,) next-auth 로그인할 때 토큰 정보 가져오기
  // next-auth (Login) -> Dashboard에서 useSWR로 userInfo를 캐싱한다.

  // let headersList = {
  //   Accept: "*/*",
  //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg1OTU2NTQxLCJleHAiOjE2ODg1NDg1NDF9.wEmtHC7UM1_ATfw93QfNehtWAFHhz9VytkGburlp-Jk",
  // };
  // if (session) {
  //   let rrrrr = await fetch("http://127.0.0.1:1337/api/users/me", {
  //     method: "GET",
  //   });

  //   let data = await rrrrr.json();
  //   console.log("fetch data", data);
  // }


  // 카카오 로그인을 하면 id랑, avatar 이미지 같은걸 받아오고
  // 우리 서버에 id같은걸로 요청하면, 우리 서버에서 우리 DB에 데이터 요청

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
