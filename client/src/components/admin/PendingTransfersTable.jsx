import { useState } from "react";
import ApprovalLoader from "./ApprovalLoader";

import {
  getTransactions,
  approveTransaction,
} from "../../services/transactionService";

function PendingTransfersTable() {

  const [, refresh] = useState(0);
  const [loading, setLoading] = useState(false);

  const pendingTransactions = getTransactions().filter(
    (t) => t.status === "Pending"
  );

  const handleApprove = (id) => {

  setLoading(true);

  setTimeout(() => {

    approveTransaction(id);

    refresh((value) => value + 1);

    setLoading(false);

    alert("Transfer Approved Successfully.");

  }, 3000);

};

  return (

    <div className="mt-10 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
      {loading && <ApprovalLoader />}

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">
          Pending Transfers
        </h2>

      </div>

      <table className="w-full text-gray-300">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left">
              Reference
            </th>

            <th className="text-left">
              Recipient
            </th>

            <th className="text-left">
              Bank
            </th>

            <th className="text-left">
              Amount
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {pendingTransactions.length > 0 ? (

            pendingTransactions.map((t) => (

              <tr
                key={t.id}
                className="border-t border-slate-800"
              >

                <td className="p-4">
                  {t.reference}
                </td>

                <td>
                  {t.recipient}
                </td>

                <td>
                  {t.bank}
                </td>

                <td>
                  ${Number(t.amount).toLocaleString()}
                </td>

                <td>

                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">

                    Pending

                  </span>

                </td>

                <td>

                  <button
                    onClick={() => handleApprove(t.id)}
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Approve
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="6"
                className="text-center py-8 text-gray-500"
              >

                No pending transfers.

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default PendingTransfersTable;