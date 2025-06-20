import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [headerContent, setHeaderContent] = useState(null);
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-6">
      <Header>{headerContent}</Header>

      <main className="mt-4 max-w-full overflow-hidden">
        <Outlet context={{ setHeaderContent }} />
      </main>
    </div>
  );
};

export default DashboardLayout;
