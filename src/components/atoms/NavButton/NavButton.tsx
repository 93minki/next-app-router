"use client";

import Link from "next/link";

interface NavButtonProps {
  href: string;
  name: string;
}

const NavButton = ({ name, href }: NavButtonProps) => {
  return <Link href={href}>{name}</Link>;
};

export default NavButton;
