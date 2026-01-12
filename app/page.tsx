import Sidebar from "./components/layout/Sidebar";
import TopBar from "./components/layout/TopBar";
import DashboardHeader from "./components/dashboard/DashboardHeader";
import StatsGrid from "./components/dashboard/StatsGrid";
import TenantList from "./components/dashboard/TenantList";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">
      <Sidebar />

      <main className="w-[85%] flex flex-col gap-4">
        <TopBar />

        <div className="flex-1 bg-[#E5E7EB] rounded-lg p-5 flex flex-col gap-5">
          <DashboardHeader />
          <StatsGrid />

          <div className="grid grid-cols-2 gap-5 flex-1">
            <TenantList title="Overdue Tenants" />
            <TenantList title="Due This Month" />
          </div>
        </div>
      </main>
    </div>
  );
}
