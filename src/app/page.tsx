import MainPage from "@/components/templates/MainPage/MainPage";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt");
  console.log("token?", token);
  return <MainPage />;
}
