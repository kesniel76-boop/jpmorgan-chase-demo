import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";
import NotificationList from "../components/dashboard/notifications/NotificationList";

function Notifications() {
  return (
    <DashboardLayout>

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <div className="bg-slate-950 min-h-screen p-8">

            <h1 className="text-4xl font-bold text-white">
              Notifications
            </h1>

            <p className="text-gray-400 mt-2">
              Recent alerts and updates.
            </p>

            <NotificationList />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Notifications;