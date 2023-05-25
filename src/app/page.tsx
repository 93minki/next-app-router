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
      <div id="mainContainer" className="grid grid-cols-2  space-x-4 space-y-4">
        <div id="sidebar" className="flex-col border-2 border-slate-800 w-1/4">
          <div id="userInfo">
            <div className="flex items-center space-x-4">
              <div
                id="avatar"
                className="rounded-full w-10 h-10 bg-orange-300"
              ></div>
              <div>오투라인님</div>
            </div>
          </div>
          <div>Item1</div>
          <div>Item2</div>
          <div>Item3</div>
        </div>
        <div
          id="content"
          className="flex-col border-2 border-slate-800 w-3/4"
        ></div>
      </div>
    </div>
  );
}
