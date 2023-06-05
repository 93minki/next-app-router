"use client";
import { RootState } from "@/redux/store";
import { User } from "@/redux/store/slice/userSlice";
import { useSelector } from "react-redux";

const UserAvatarName = () => {
  const userInfo = useSelector((state: RootState) => {
    return state.user.userData as User;
  });

  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-full w-10 h-10 bg-orange-300">{}</div>
      <div>{userInfo.username}</div>
    </div>
  );
};

export default UserAvatarName;
