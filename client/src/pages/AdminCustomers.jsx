import CustomerTable from "../components/admin/CustomerTable";
import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminSidebar from "../components/admin/layout/AdminSidebar";

function AdminCustomers() {

  if (localStorage.getItem("pcb_admin") !== "true") {
    window.location.href = "/admin-login";
    return null;
  }

  return (

    <AdminLayout>

      <AdminSidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-white">
          Customer Management
        </h1>

        <p className="text-gray-400 mt-3">
          Manage all customer accounts.
        </p>

        <CustomerTable />

      </main>

    </AdminLayout>

  );

}

export default AdminCustomers;