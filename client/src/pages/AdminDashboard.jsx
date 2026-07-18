import { getTransactions } from "../services/transactionService";
import PendingTransfersTable from "../components/admin/PendingTransfersTable";
import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminSidebar from "../components/admin/layout/AdminSidebar";

function AdminDashboard() {

  if (localStorage.getItem("pcb_admin") !== "true") {
    window.location.href = "/admin-login";
    return null;
  }

  const transactions = getTransactions();

  const pending = transactions.filter(
    (t) => t.status === "Pending"
  ).length;

  const successful = transactions.filter(
    (t) => t.status === "Successful"
  ).length;

  return (
    <AdminLayout>

      <AdminSidebar />

      <main className="flex-1 p-8">

        <div className="min-h-screen bg-slate-950">

          <h1 className="text-4xl font-bold text-white">
            Admin Dashboard
          </h1>

          <p className="text-gray-400 mt-3">
            Manage PenCraft Bank customers and transactions.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-gray-400">
                Customers
              </h2>

              <p className="text-4xl font-bold text-green-400 mt-3">
                24
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-gray-400">
                Accounts
              </h2>

              <p className="text-4xl font-bold text-blue-400 mt-3">
                24
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-gray-400">
                Pending Transfers
              </h2>

              <p className="text-4xl font-bold text-yellow-400 mt-3">
                {pending}
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-gray-400">
                Successful Transfers
              </h2>

              <p className="text-4xl font-bold text-green-500 mt-3">
                {successful}
              </p>
            </div>

          </div>

          <PendingTransfersTable />

        </div>

      </main>

    </AdminLayout>
  );
}

export default AdminDashboard;