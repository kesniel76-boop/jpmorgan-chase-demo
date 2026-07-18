import { getCurrentUser } from "../../../services/authService";

function ReceiptSummary({ transaction }) {
  const user = getCurrentUser();

  const currency = user?.currency || "₦";

  const amount = Number(transaction.amount || 0);

  const transferFee = 0;

  const total = amount + transferFee;

  return (
    <div className="bg-slate-800 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-6">
        Payment Summary
      </h3>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">
            Transaction Type
          </span>

          <span className="text-white font-semibold">
            Bank Transfer
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Amount
          </span>

          <span className="text-white font-semibold">
            {currency}
            {amount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Transfer Fee
          </span>

          <span className="text-green-400 font-semibold">
            {currency}0.00
          </span>
        </div>

        <hr className="border-slate-700" />

        <div className="flex justify-between">

          <span className="text-xl font-bold text-white">
            Total
          </span>

          <span className="text-2xl font-bold text-green-400">
            {currency}
            {total.toLocaleString()}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ReceiptSummary;