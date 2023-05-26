"use client";

import NavButton from "@/components/atoms/NavButton/NavButton";

interface HeaderNavProps {}

const HeaderNav = ({}: HeaderNavProps) => {
  return (
    <ul className="flex space-x-8">
      <NavButton href="/" name="Menu1" />
      <NavButton href="/" name="Menu2" />
    </ul>
  );
};

export default HeaderNav;
