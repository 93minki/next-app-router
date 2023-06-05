import Header from "@/components/organisms/Header/Header";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
