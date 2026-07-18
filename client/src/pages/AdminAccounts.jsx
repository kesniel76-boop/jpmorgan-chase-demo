import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminSidebar from "../components/admin/layout/AdminSidebar";
import AccountsTable from "../components/admin/accounts/AccountsTable";

function AdminAccounts() {

  if (localStorage.getItem("pcb_admin") !== "true") {

    window.location.href = "/admin-login";

    return null;

  }

  return (

    <AdminLayout>

      <AdminSidebar />

      <main className="flex-1 bg-slate-950 min-h-screen p-8">

        <h1 className="text-4xl font-bold text-white">

          Customer Accounts

        </h1>

        <p className="text-gray-400 mt-2">

          View all registered customer accounts.

        </p>

        <AccountsTable />

      </main>

    </AdminLayout>

  );

}

export default AdminAccounts;