"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavItem = ({ href, children }: Props) => {
  return <Link href={href}>{children}</Link>;
};

export default NavItem;
