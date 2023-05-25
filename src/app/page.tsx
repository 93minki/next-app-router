import Avatar from "@/components/atoms/Avatar/Avatar";
import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";

export default function Home() {
  return (
    <div>
      <div
        id="header"
        className="flex justify-between border-2 border-slate-800 p-4 items-center"
      >
        <div>Logo</div>
        <div id="menulist" className="flex space-x-4">
          <div>Menu1</div>
          <div>Menu2</div>
        </div>
        <div>My Page</div>
        <div className="flex items-center space-x-4">
          <div
            id="avatar"
            className="rounded-full w-10 h-10 bg-orange-300"
          ></div>
          <div>오투라인님</div>
        </div>
      </div>
      <div id="mainContainer" className="grid grid-cols-4 h-screen mt-4 gap-3">
        <div id="sidebar" className="flex-col col-span-1 space-y-4">
          <div id="userInfo" className="border-2 border-slate-800 p-4 h-1/4">
            <div className="flex items-center space-x-4">
              <div
                id="avatar"
                className="rounded-full w-10 h-10 bg-orange-300"
              ></div>
              <div>오투라인님</div>
            </div>
            <div className="flex-col space-y-2">
              <div className="flex-col mt-4">
                <p className="inline-block">
                  <span className="font-bold text-lg">자유 이용권</span> 사용중
                </p>
                <span className="inline-block text-sm text-gray-400">
                  이용권 유효기간이 7일 남았습니다.
                </span>
              </div>
              <div>
                <p>
                  사용가능한 포인트
                  <span className="ml-2 text-lg font-bold">1300p</span>
                </p>
              </div>
              <div>
                <p>
                  보유중인 쿠폰:
                  <span className="ml-2 text-lg font-bold">5장</span>
                </p>
              </div>
            </div>
          </div>

          <div
            id="itemlist"
            className="border-2 pt-8 flex-col space-y-4 border-slate-800 p-4 h-[calc(75%-1rem)]"
          >
            <div className="text-lg">✨ 대시보드 </div>
            <div className="text-lg">🧑 프로필 관리</div>
            <div className="text-lg">💳 이용권 관리</div>
            <div className="text-lg">📁 내 시험지</div>
            <div className="text-lg">📞 고객센터</div>
          </div>
        </div>
        <div
          id="content"
          className="flex-col border-2 border-slate-800 col-span-3"
        ></div>
      </div>
    </div>
  );
}
