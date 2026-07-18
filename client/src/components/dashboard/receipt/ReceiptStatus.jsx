function ReceiptStatus({ transaction }) {
  const badgeClass =
    transaction.status === "Successful"
      ? "bg-green-500/20 text-green-400 border border-green-500/30"
      : transaction.status === "Pending"
      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
      : "bg-red-500/20 text-red-400 border border-red-500/30";

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-400 text-sm">
            Transaction Status
          </p>

          <span
            className={`inline-block mt-2 px-4 py-2 rounded-full font-semibold ${badgeClass}`}
          >
            {transaction.status}
          </span>
        </div>

        <div className="text-right">
          <p className="text-gray-400 text-sm">
            Reference Number
          </p>

          <p className="text-green-400 font-mono mt-2">
            {transaction.reference}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">

        <div>
          <p className="text-gray-400 text-sm">
            Date
          </p>

          <p className="text-white mt-1">
            {transaction.date}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Transaction Type
          </p>

          <p className="text-white mt-1">
            Transfer
          </p>
        </div>

      </div>

    </div>
  );
}

export default ReceiptStatus;