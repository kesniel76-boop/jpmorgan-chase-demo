import {
  FaChartPie,
  FaUsers,
  FaExchangeAlt,
  FaUniversity,
  FaCreditCard,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function AdminSidebar() {

  return (

    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-green-400">
          JP Morgan Chase
        </h1>

        <p className="text-gray-500 mt-2">
          Administrator
        </p>

      </div>

      <nav className="space-y-2 px-5">

        <Link
          to="/admin"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 text-white"
        >
          <FaChartPie />
          Dashboard
        </Link>

        <Link
          to="/admin/customers"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 text-white"
        >
          <FaUsers />
          Customers
        </Link>

        <Link
          to="/admin/transfers"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 text-white"
        >
          <FaExchangeAlt />
          Transfers
        </Link>

        <Link
          to="/admin/accounts"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 text-white"
        >
          <FaUniversity />
          Accounts
        </Link>

        <Link
          to="/admin/cards"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 text-white"
        >
          <FaCreditCard />
          Cards
        </Link>

        <Link
          to="/admin/settings"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 text-white"
        >
          <FaCog />
          Settings
        </Link>

        <button
          onClick={() => {

            localStorage.removeItem("pcb_admin");

            window.location.href = "/admin-login";

          }}
          className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-red-600 text-white"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </nav>

    </aside>

  );

}

export default AdminSidebar;