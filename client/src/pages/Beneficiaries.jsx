import DashboardLayout from "../layouts/DashboardLayout";
import Sidebar from "../components/dashboard/layout/Sidebar";
import Topbar from "../components/dashboard/layout/Topbar";

import BeneficiaryForm from "../components/dashboard/beneficiaries/BeneficiaryForm";
import BeneficiaryList from "../components/dashboard/beneficiaries/BeneficiaryList";

function Beneficiaries() {
  return (
    <DashboardLayout>

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <div className="bg-slate-950 min-h-screen p-8">

            <h1 className="text-4xl font-bold text-white">
              Beneficiaries
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your saved transfer recipients.
            </p>

            <BeneficiaryForm />

            <BeneficiaryList />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Beneficiaries;