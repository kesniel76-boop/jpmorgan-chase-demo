import { useAuth } from "../../../contexts/AuthContext";

import BalanceCard from "../cards/BalanceCard";
import QuickActions from "../actions/QuickActions";
import SummaryCards from "../summary/SummaryCards";
import TransactionsTable from "../transactions/TransactionsTable";


function DashboardContent() {

  const { user } = useAuth();


  return (

    <div className="p-8 bg-slate-950 min-h-screen">


      <div className="mb-8">


        <h1 className="text-5xl font-bold text-white">

          Welcome,

          <span className="text-green-400">

            {" "}
            {user?.name || "Customer"}

          </span>

        </h1>



        <p className="text-gray-400 mt-3 text-lg">

          Here's an overview of your banking activity.

        </p>


      </div>



      <BalanceCard user={user} />


      <QuickActions />


      <SummaryCards user={user} />


      <TransactionsTable user={user} />


    </div>

  );

}


export default DashboardContent;