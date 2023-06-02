import DashBoardTemplate from "@/components/templates/DashBoard/Dashboard";

export async function generateMetadata({}) {
  return {
    title: "Dashboard",
  };
}

const DashboardPage = () => {
  // data fetching -> template 
  // template 
  return <DashBoardTemplate />;
};

export default DashboardPage;
