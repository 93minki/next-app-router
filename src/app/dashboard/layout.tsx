import Header from "@/components/organisms/Header/Header";
import { authOptions } from "@/lib/auth";
import { UserInfo } from "@/type/userInfo";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface CustomSession extends Session {
  jwt: string;
  user: UserInfo;
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session: CustomSession | null = await getServerSession(authOptions);
  console.log("Dashboard session:", session);
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
}
