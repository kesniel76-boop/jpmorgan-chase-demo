import { useState } from "react";
import ApprovalLoader from "./ApprovalLoader";
import { approveTransaction } from "../../services/transactionService";

function PendingTransfersTable({
  transactions = [],
  refreshTransactions,
}) {
  const [loading, setLoading] = useState(false);

  const pendingTransactions = Array.isArray(transactions)
    ? transactions.filter(
        (transaction) => transaction.status === "Pending"
      )
    : [];

  const handleApprove = async (id) => {
    try {
      setLoading(true);

      const result = await approveTransaction(id);

      if (result?.success) {
        alert("Transfer approved successfully.");

        if (refreshTransactions) {
          await refreshTransactions();
        }
      } else {
        alert(
          result?.message ||
            "Unable to approve transfer."
        );
      }
    } catch (error) {
      console.error(error);
      alert("Server error while approving transfer.");
    } finally {
      setLoading(false);
    }
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
            <th className="p-4 text-left">Reference</th>
            <th className="text-left">Recipient</th>
            <th className="text-left">Bank</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {pendingTransactions.length > 0 ? (
            pendingTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-t border-slate-800"
              >
                <td className="p-4">
                  {transaction.reference}
                </td>

                <td>
                  {transaction.recipient}
                </td>

                <td>
                  {transaction.bank}
                </td>

                <td>
                  $
                  {Number(
                    transaction.amount
                  ).toLocaleString()}
                </td>

                <td>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
                    {transaction.status}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() =>
                      handleApprove(transaction.id)
                    }
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
                colSpan={6}
                className="text-center py-10 text-gray-500"
              >
                No pending transfers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PendingTransfersTable;