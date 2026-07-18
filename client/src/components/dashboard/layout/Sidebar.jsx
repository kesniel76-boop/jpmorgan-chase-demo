import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import {
  FaChartPie,
  FaExchangeAlt,
  FaCreditCard,
  FaFileInvoice,
  FaUserFriends,
  FaCog,
  FaSignOutAlt,
  FaWallet,
} from "react-icons/fa";

import { logout } from "../../../services/authService";

const menu = [
  {
    icon: <FaChartPie />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaWallet />,
    title: "Accounts",
    path: "/accounts",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Transfers",
    path: "/transfer",
  },
  {
    icon: <FaCreditCard />,
    title: "Cards",
    path: "/cards",
  },
  {
    icon: <FaFileInvoice />,
    title: "Statements",
    path: "/statements",
  },
  {
    icon: <FaUserFriends />,
    title: "Beneficiaries",
    path: "/beneficiaries",
  }, 
  
  {
    icon: <FaBell />,
    title: "Notifications",
    path: "/notifications",
 },

  {
    icon: <FaCog />,
    title: "Settings",
    path: "/settings",
  },
];

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-2xl font-bold text-green-400">
        JP Morgan Chase
      </h1>

      <p className="text-gray-500 text-sm mt-1">
        Banking Without Limits
      </p>

      <div className="mt-12 space-y-2">

        {menu.map((item) => (

          <Link
            key={item.title}
            to={item.path}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-gray-300 hover:bg-green-500 hover:text-white transition"
          >
            {item.icon}
            {item.title}
          </Link>

        ))}

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>

  );

}

export default Sidebar;