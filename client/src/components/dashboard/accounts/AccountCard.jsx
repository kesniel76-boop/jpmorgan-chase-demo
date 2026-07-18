import { useState } from "react";
import { FaCopy, FaEye, FaEyeSlash } from "react-icons/fa";

import { getCurrentUser } from "../../../services/authService";

function AccountCard() {

  const user = getCurrentUser();

  const [showBalance, setShowBalance] = useState(true);

  const copyAccountNumber = () => {

    navigator.clipboard.writeText(user.accountNumber);

    alert("Account number copied.");

  };

  return (

    <div className="mt-10">

      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Savings Account
            </h2>

            <p className="text-gray-300 mt-2">
              JP Morgan Chase Bank
            </p>

          </div>

          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-white text-2xl"
          >
            {showBalance ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <div className="mt-10">

          <p className="text-gray-400">
            Available Balance
          </p>

          <h1 className="text-5xl font-bold text-green-400 mt-2">

            {showBalance
              ? `${user.currency}${Number(user.balance).toLocaleString()}`
              : "••••••••"}

          </h1>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div>

            <p className="text-gray-400">
              Account Name
            </p>

            <h3 className="text-white text-xl font-semibold mt-2">
              {user.name}
            </h3>

          </div>

          <div>

            <p className="text-gray-400">
              Account Number
            </p>

            <div className="flex items-center gap-3 mt-2">

              <h3 className="text-white text-xl font-semibold">
                {user.accountNumber}
              </h3>

              <button
                onClick={copyAccountNumber}
              >
                <FaCopy className="text-green-400" />
              </button>

            </div>

          </div>

          <div>

            <p className="text-gray-400">
              Customer ID
            </p>

            <h3 className="text-white text-xl font-semibold mt-2">
              {user.customerId}
            </h3>

          </div>

          <div>

            <p className="text-gray-400">
              Account Type
            </p>

            <h3 className="text-white text-xl font-semibold mt-2">
              {user.accountType}
            </h3>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AccountCard;