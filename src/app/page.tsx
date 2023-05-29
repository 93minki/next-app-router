import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-screen text-center leading-[100vh]">
      <Link href="/dashboard">Click to move Dashboard!</Link>
    </div>
  );
}
