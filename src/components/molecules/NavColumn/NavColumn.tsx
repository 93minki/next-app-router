import NavItem from "@/components/atoms/NavItem/NavItem";
import React from "react";

export default function NavColumn() {
  return (
    <nav className="flex flex-col grow gap-5 p-2 bg-slate-300">
      <NavItem href="/">✨ 대시보드</NavItem>
      <NavItem href="/">🧑 프로필 관리</NavItem>
      <NavItem href="/">💳 이용권 관리</NavItem>
      <NavItem href="/">📁 내 시험지</NavItem>
      <NavItem href="/">📞 고객센터</NavItem>
    </nav>
  );
}
