import Header from "@/components/organisms/Header/Header";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const res = await fetch("http://localhost:3000/api/user");
  const json = await res.json();
  return (
    <>
      <Header userInfo={json} />
      {children}
    </>
  );
}
