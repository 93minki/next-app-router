import DashBoardTemplate from "@/components/templates/DashBoard/Dashboard";

export async function generateMetadata({}) {
  return {
    title: "Dashboard",
  };
}

const DashboardPage = () => {
  return <DashBoardTemplate />;
};

export default DashboardPage;
