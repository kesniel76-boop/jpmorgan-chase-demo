import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";

import VirtualCard from "../components/dashboard/cards/VirtualCard";
import CardControls from "../components/dashboard/cards/CardControls";

function Cards() {

  return (

    <DashboardLayout>

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <div className="bg-slate-950 min-h-screen p-8">

            <h1 className="text-4xl font-bold text-white">
              My Debit Card
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your JP Morgan Chase debit card.
            </p>

            <VirtualCard />

            <CardControls />

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Cards;