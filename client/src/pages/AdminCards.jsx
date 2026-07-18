import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminSidebar from "../components/admin/layout/AdminSidebar";
import CardsTable from "../components/admin/cards/CardsTable";

function AdminCards() {

  if (localStorage.getItem("pcb_admin") !== "true") {

    window.location.href = "/admin-login";

    return null;

  }

  return (

    <AdminLayout>

      <AdminSidebar />

      <main className="flex-1 bg-slate-950 min-h-screen p-8">

        <h1 className="text-4xl font-bold text-white">

          Card Management

        </h1>

        <p className="text-gray-400 mt-2">

          Manage customer debit cards.

        </p>

        <CardsTable />

      </main>

    </AdminLayout>

  );

}

export default AdminCards;