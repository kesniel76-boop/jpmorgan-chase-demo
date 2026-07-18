import { useState } from "react";
import { saveBeneficiary } from "../../../services/beneficiaryService";

function BeneficiaryForm() {

  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !bank || !accountNumber) {
      alert("Please complete all fields.");
      return;
    }

    saveBeneficiary({
      name,
      bank,
      accountNumber,
    });

    setName("");
    setBank("");
    setAccountNumber("");

    window.location.reload();
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 rounded-2xl p-6 mt-8 border border-slate-800 space-y-5"
    >

      <input
        type="text"
        placeholder="Beneficiary Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-slate-800 p-4 rounded-xl text-white"
      />

      <input
        type="text"
        placeholder="Bank Name"
        value={bank}
        onChange={(e) => setBank(e.target.value)}
        className="w-full bg-slate-800 p-4 rounded-xl text-white"
      />

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        className="w-full bg-slate-800 p-4 rounded-xl text-white"
      />

      <button
        className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold text-white"
      >
        Save Beneficiary
      </button>

    </form>

  );

}

export default BeneficiaryForm;