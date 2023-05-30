import DashBoardTemplate from "@/components/templates/DashBoard/Dashboard";
import { Suspense } from "react";

const DashboardPage = async () => {
  const res = await fetch("http://localhost:3000/api/user", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return (
    <Suspense fallback={<div>Fetching data...</div>}>
      <DashBoardTemplate userInfo={json} />
    </Suspense>
  );
};

export default DashboardPage;
