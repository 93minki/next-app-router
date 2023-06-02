import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavItem({ href, children }: Props) {
  return <Link href={href}>{children}</Link>;
}
