import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default async function LoginPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
