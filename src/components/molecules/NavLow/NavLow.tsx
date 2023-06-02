"use client";

import NavItem from "@/components/atoms/NavItem/NavItem";

interface HeaderNavProps {}

const NavLow = ({}: HeaderNavProps) => {
  return (
    <nav className="flex space-x-8">
      <NavItem href="/">메뉴1</NavItem>
      <NavItem href="/">메뉴2</NavItem>
    </nav>
  );
};

export default NavLow;
