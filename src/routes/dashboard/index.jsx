import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/pages/dashboard/Dashboard";

export const dashboardRoutes = [
  {
    id: "dashboardRoute",
    path: "/",
    element: <DashboardLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  }
];
