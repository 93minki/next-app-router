import DashBoardTemplate from "@/components/templates/DashBoard/Dashboard";

const DashboardPage = async () => {
  const res = await fetch("http://localhost:3000/api/user");
  const json = await res.json();
  return <DashBoardTemplate userInfo={json} />;
};

export default DashboardPage;
