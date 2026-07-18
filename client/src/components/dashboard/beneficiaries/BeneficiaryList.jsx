import { getBeneficiaries } from "../../../services/beneficiaryService";
import BeneficiaryCard from "./BeneficiaryCard";

function BeneficiaryList() {

  const beneficiaries = getBeneficiaries();

  return (

    <div className="mt-10 space-y-5">

      {beneficiaries.length === 0 && (

        <div className="bg-slate-900 rounded-2xl p-10 text-center border border-slate-800">

          <h2 className="text-2xl text-white">
            No Beneficiaries Saved
          </h2>

          <p className="text-gray-500 mt-2">
            Save a beneficiary to make future transfers faster.
          </p>

        </div>

      )}

      {beneficiaries.map((beneficiary) => (

        <BeneficiaryCard
          key={beneficiary.id}
          beneficiary={beneficiary}
        />

      ))}

    </div>

  );

}

export default BeneficiaryList;