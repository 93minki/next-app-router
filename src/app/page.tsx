import Link from "next/link";
import axios from "axios";

async function getMainState() {
  // const axiosRes = await axios.get("/api/main");
  // console.log("axiosRes", axiosRes.data);
  const res = await fetch("http://localhost:3000/api/main");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const mainState = getMainState();
  const resData = await mainState;
  console.log("resData", resData);
  // const res = await fetch("http://localhost:3000/api/main");

  return (
    <div className=" w-full h-screen text-center leading-[100vh]">
      <Link href="/dashboard">Click to move Dashboard!</Link>
    </div>
  );
}
