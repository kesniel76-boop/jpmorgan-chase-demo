import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

import { useAuth } from "../../../contexts/AuthContext";


function Topbar() {

  const { user } = useAuth();


  return (

    <header className="h-20 bg-white border-b flex items-center justify-between px-6">


      <div>

        <h2 className="text-xl font-semibold text-gray-800">

          Welcome back, {user?.name || "Customer"}

        </h2>

        <p className="text-sm text-gray-500">

          Manage your JP Morgan Chase account securely

        </p>

      </div>



      <div className="flex items-center gap-5">


        <button className="text-gray-500 hover:text-green-600">

          <FaSearch />

        </button>


        <button className="text-gray-500 hover:text-green-600">

          <FaBell />

        </button>



        <div className="flex items-center gap-3">


          <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">

            {user?.name?.charAt(0) || "J"}

          </div>


          <div className="hidden md:block">

            <p className="text-sm font-semibold text-gray-800">

              {user?.name || "JP Customer"}

            </p>


            <p className="text-xs text-gray-500">

              {user?.email || "customer@email.com"}

            </p>

          </div>


        </div>


      </div>


    </header>

  );

}


export default Topbar;