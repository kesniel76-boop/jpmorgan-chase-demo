import { useEffect, useState } from "react";

import { getTransactions } from "../services/transactionService";

import PendingTransfersTable from "../components/admin/PendingTransfersTable";
import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminSidebar from "../components/admin/layout/AdminSidebar";

function AdminDashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("pcb_admin") !== "true") {
      window.location.href = "/admin-login";
      return;
    }

    loadTransactions();
  }, []);

  async function loadTransactions() {
    try {
      const data = await getTransactions();

      if (Array.isArray(data)) {
        setTransactions(data);
      } else {
        setTransactions([]);
      }
    } catch (error) {
      console.error("Failed to load transactions:", error);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  }

  const pending = transactions.filter(
    (t) => t.status === "Pending"
  ).length;

  const successful = transactions.filter(
    (t) => t.status === "Successful"
  ).length;

  return (
    <AdminLayout>
      <AdminSidebar />

      <main className="flex-1 p-8 bg-slate-950 min-h-screen">

        <h1 className="text-4xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mt-3">
          Manage JP Morgan Chase customers and transactions.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-gray-400">
              Customers
            </h2>

            <p className="text-4xl font-bold text-green-400 mt-3">
              --
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-gray-400">
              Total Transfers
            </h2>

            <p className="text-4xl font-bold text-blue-400 mt-3">
              {transactions.length}
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

        <div className="mt-10">

          {loading ? (
            <div className="text-center text-gray-400 py-20">
              Loading transactions...
            </div>
          ) : (
            <PendingTransfersTable
              transactions={transactions}
              refreshTransactions={loadTransactions}
            />
          )}

        </div>

      </main>
    </AdminLayout>
  );
}

export default AdminDashboard;