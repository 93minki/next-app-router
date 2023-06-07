import Providers from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bop",
  description: "Bank Of Problems",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5 bg-slate-200 h-screen `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
