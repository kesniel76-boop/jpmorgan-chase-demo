import { FaUniversity, FaTrash } from "react-icons/fa";
import { deleteBeneficiary } from "../../../services/beneficiaryService";

function BeneficiaryCard({ beneficiary }) {

  const remove = () => {

    deleteBeneficiary(beneficiary.id);

    window.location.reload();

  };

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex justify-between items-center">

      <div className="flex items-center gap-5">

        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center">

          <FaUniversity className="text-white text-xl" />

        </div>

        <div>

          <h3 className="text-white font-bold text-lg">
            {beneficiary.name}
          </h3>

          <p className="text-gray-400">
            {beneficiary.bank}
          </p>

          <p className="text-gray-500">
            {beneficiary.accountNumber}
          </p>

        </div>

      </div>

      <button
        onClick={remove}
        className="bg-red-500 hover:bg-red-600 p-3 rounded-lg"
      >
        <FaTrash className="text-white" />
      </button>

    </div>

  );

}

export default BeneficiaryCard;