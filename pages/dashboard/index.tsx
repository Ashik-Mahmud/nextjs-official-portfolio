import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
