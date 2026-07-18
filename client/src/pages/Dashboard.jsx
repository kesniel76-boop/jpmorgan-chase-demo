import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";
import DashboardContent from "../components/dashboard/layout/DashboardContent";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <DashboardContent />

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;