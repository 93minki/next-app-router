"use client";

import { signOut } from "next-auth/react";

const UserAvatarName = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-full w-10 h-10 bg-orange-300">{}</div>
      <div
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        {"오투라인"}
      </div>
    </div>
  );
};

export default UserAvatarName;
