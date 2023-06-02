"use client";

import UserMembershipInfo from "../UserMembershipInfo/UserMembershipInfo";
import NavColumn from "@/components/molecules/NavColumn/NavColumn";

const SidePanel = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-5">
      {/* @ts-expect-error Server Component */}
      <UserMembershipInfo />
      <NavColumn />
    </div>
  );
};

export default SidePanel;
