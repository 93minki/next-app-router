"use client";

import Logo from "@/components/atoms/Logo/Logo";
import HeaderNav from "@/components/molecules/HeaderNav/HeaderNav";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";

const Header = () => {
  return (
    <header className="flex justify-between border-2 border-slate-800 p-4 items-center rounded-lg">
      <Logo />
      <nav>
        <HeaderNav />
      </nav>
      <UserAvatarName avatar="" name="오투라인" />
    </header>
  );
};

export default Header;
