import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";
import AccountCard from "../components/dashboard/accounts/AccountCard";

function Accounts() {
  return (
    <DashboardLayout>

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <div className="p-8 bg-slate-950 min-h-screen">

            <h1 className="text-4xl font-bold text-white">
              My Accounts
            </h1>

            <p className="text-gray-400 mt-2">
              View your JP Morgan Chase accounts.
            </p>

            <AccountCard />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Accounts;