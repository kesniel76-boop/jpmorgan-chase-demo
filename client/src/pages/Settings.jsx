import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";

import ProfileSettings from "../components/dashboard/settings/ProfileSettings";
import SecuritySettings from "../components/dashboard/settings/SecuritySettings";

function Settings() {

  return (

    <DashboardLayout>

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <div className="bg-slate-950 min-h-screen p-8">

            <h1 className="text-4xl font-bold text-white">
              Settings
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your JP Morgan Chase account.
            </p>

            <ProfileSettings />
            <SecuritySettings />

            

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Settings;