import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminSidebar from "../components/admin/layout/AdminSidebar";
import TransfersTable from "../components/admin/transfers/TransfersTable";

function AdminTransfers() {

  if (localStorage.getItem("pcb_admin") !== "true") {

    window.location.href = "/admin-login";

    return null;

  }

  return (

    <AdminLayout>

      <AdminSidebar />

      <main className="flex-1 bg-slate-950 min-h-screen p-8">

        <h1 className="text-4xl font-bold text-white">

          Transfer Management

        </h1>

        <p className="text-gray-400 mt-2">

          Review and approve customer transfers.

        </p>

        <TransfersTable />

      </main>

    </AdminLayout>

  );

}

export default AdminTransfers;