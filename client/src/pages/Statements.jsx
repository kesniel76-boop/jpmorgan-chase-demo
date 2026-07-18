import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";
import StatementTable from "../components/dashboard/statements/StatementTable";

function Statements() {
  return (
    <DashboardLayout>

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <div className="min-h-screen bg-slate-950 p-8">

            <h1 className="text-4xl font-bold text-white">
              Account Statements
            </h1>

            <p className="text-gray-400 mt-2">
              View and search your transaction history.
            </p>

            <StatementTable />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Statements;