import Avatar from "@/components/atoms/Avatar/Avatar";
import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";

export default function Home() {
  return (
    <div>
      <div
        id="header"
        className="flex justify-between border-2 border-slate-800 p-4 items-center rounded-lg"
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
          <div
            id="userInfo"
            className="border-2 border-slate-800 rounded-lg p-4 h-1/4"
          >
            <div className="flex items-center space-x-4">
              <div
                id="avatar"
                className="rounded-full w-10 h-10 bg-orange-300"
              ></div>
              <div>오투라인님</div>
            </div>
            <div className="flex-col space-y-2">
              <div className="flex-col mt-4">
                <p>
                  <span className="font-bold text-lg">프리미엄 이용권</span>{" "}
                  사용중
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
            className="border-2 pt-8 flex-col space-y-4 border-slate-800 rounded-lg p-4 h-[calc(75%-1rem)]"
          >
            <div className="text-lg">✨ 대시보드 </div>
            <div className="text-lg">🧑 프로필 관리</div>
            <div className="text-lg">💳 이용권 관리</div>
            <div className="text-lg">📁 내 시험지</div>
            <div className="text-lg">📞 고객센터</div>
          </div>
        </div>
        <div id="content" className="flex-col col-span-3 space-y-4">
          <div id="cardlist" className="flex space-x-2 h-1/4">
            <div
              id="card"
              className="flex flex-col flex-1 border-2 border-slate-400 rounded-lg px-4 py-4"
            >
              <div id="card_header" className="mb-4">
                <span>✨알림</span>
              </div>
              <div id="card_item" className="flex flex-col">
                <span> 쿠폰 선물이 도착했어요 </span>
                <span> 프리미엄 이용권이 구매되었습니다. </span>
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col flex-1 border-2 border-slate-400 rounded-lg px-4 py-4"
            >
              <div id="card_header" className="mb-4">
                <span>✨알림</span>
              </div>
              <div id="card_item" className="flex flex-col">
                <span> 쿠폰 선물이 도착했어요 </span>
                <span> 프리미엄 이용권이 구매되었습니다. </span>
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col flex-1 border-2 border-slate-400 rounded-lg px-4 py-4"
            >
              <div id="card_header" className="mb-4">
                <span>✨알림</span>
              </div>
              <div id="card_item" className="flex flex-col">
                <span> 쿠폰 선물이 도착했어요 </span>
                <span> 프리미엄 이용권이 구매되었습니다. </span>
              </div>
            </div>
          </div>
          <div
            id="content_main"
            className="h-[calc(75%-1rem)] flex flex-col space-y-4 "
          >
            <div id="folder" className="border-2 border-slate-400 rounded-lg">
              <div id="folder_more" className="text-right pt-2 pr-4">
                <span>&gt; 더보기</span>
              </div>
              <div id="folder_list" className="py-8 px-8 flex space-x-8">
                <div id="folder" className="w-28">
                  <div
                    id="folder_content"
                    className="flex flex-col items-center border-2 border-slate-500 h-32 rounded-md"
                  >
                    <span
                      id="plusbutton"
                      className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-end"
                    >
                      +
                    </span>
                    <div className=" text-center">
                      <p>시험지 수</p>
                      <span>10</span>
                    </div>
                  </div>
                  <div id="folder_name" className="text-center">
                    중3 1학기
                  </div>
                </div>
                <div id="folder" className="w-28">
                  <div
                    id="folder_content"
                    className="flex flex-col items-center border-2 border-slate-500 h-32 rounded-md"
                  >
                    <span
                      id="plusbutton"
                      className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-end"
                    >
                      +
                    </span>
                    <div className=" text-center">
                      <p>시험지 수</p>
                      <span>10</span>
                    </div>
                  </div>
                  <div id="folder_name" className="text-center">
                    초등5 1학기
                  </div>
                </div>
                <div id="folder" className="w-28">
                  <div
                    id="folder_content"
                    className="flex flex-col items-center border-2 border-slate-500 h-32 rounded-md"
                  >
                    <span
                      id="plusbutton"
                      className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-end"
                    >
                      +
                    </span>
                    <div className=" text-center">
                      <p>시험지 수</p>
                      <span>10</span>
                    </div>
                  </div>
                  <div id="folder_name" className="text-center">
                    수능대비
                  </div>
                </div>
                <div
                  id="plusbutton"
                  className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-center"
                >
                  +
                </div>
              </div>
            </div>
            <div
              id="testpaper"
              className="flex flex-col space-y-4 py-4 px-4 border-2 border-slate-300 rounded-lg h-full"
            >
              <div id="testpaper_tab" className="flex space-x-8">
                <div className="bg-violet-600 text-white font-bold px-2 py-2 rounded-md">
                  내가 만든 시험지
                </div>
                <div className="bg-slate-400 px-2 py-2 rounded-md">
                  구매한 시험지
                </div>
              </div>
              <div id="testpaper_filter" className="flex justify-between">
                <div className="flex space-x-2">
                  <div className="bg-white text-violet-600 rounded-md px-2 py-2">
                    전체 / 초 / 중 / 고
                  </div>
                  <div className="bg-white text-violet-600 rounded-md px-2 py-2 w-28 text-center">
                    태그
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-white text-violet-600 rounded-md px-2 py-2 w-64 text-center">
                    검색창
                  </div>
                  <div className="bg-violet-600 text-white rounded-md px-2 py-2">
                    시험지 추가하기
                  </div>
                </div>
              </div>
              <div id="testpaper_list_tag" className="grid grid-cols-7 gap-2">
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  선택
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  학년/과목
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  태그
                </div>
                <div className="col-span-2 text-center bg-white text-violet-600 rounded-md px-2 py-2">
                  시험지 이름
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  만든 날짜
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  다운로드
                </div>
              </div>
              <div id="testpaper_list_item" className="grid grid-cols-7 gap-2">
                <div className="bg-white text-violet-600 text-center mx-12 my-2 rounded-md"></div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  초등5학년
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  시험대비
                </div>
                <div className="col-span-2 text-center bg-white text-violet-600 rounded-md px-2 py-2">
                  초등5학년 2학기 기말대비
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  23.05.23
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <span className="bg-white rounded-md px-2 py-2">🖨</span>
                  <span className="bg-white rounded-md px-2 py-2">💾</span>
                  <span className="bg-white rounded-md px-2 py-2">📌</span>
                </div>
              </div>
              <div id="testpaper_list_item" className="grid grid-cols-7 gap-2">
                <div className="bg-white text-violet-600 text-center mx-12 my-2 rounded-md"></div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  초등5학년
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  시험대비
                </div>
                <div className="col-span-2 text-center bg-white text-violet-600 rounded-md px-2 py-2">
                  초등5학년 2학기 기말대비
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  23.05.23
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <span className="bg-white rounded-md px-2 py-2">🖨</span>
                  <span className="bg-white rounded-md px-2 py-2">💾</span>
                  <span className="bg-white rounded-md px-2 py-2">📌</span>
                </div>
              </div>
              <div id="testpaper_list_item" className="grid grid-cols-7 gap-2">
                <div className="bg-white text-violet-600 text-center mx-12 my-2 rounded-md"></div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  초등5학년
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  시험대비
                </div>
                <div className="col-span-2 text-center bg-white text-violet-600 rounded-md px-2 py-2">
                  초등5학년 2학기 기말대비
                </div>
                <div className="bg-white text-violet-600 text-center px-2 py-2 rounded-md">
                  23.05.23
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <span className="bg-white rounded-md px-2 py-2">🖨</span>
                  <span className="bg-white rounded-md px-2 py-2">💾</span>
                  <span className="bg-white rounded-md px-2 py-2">📌</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
