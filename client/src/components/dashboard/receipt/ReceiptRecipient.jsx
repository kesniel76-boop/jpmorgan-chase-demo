function ReceiptRecipient({ transaction }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-5">
        Recipient Information
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-400 text-sm">
            Recipient Name
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {transaction.recipient}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Bank
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {transaction.bank}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Account Number
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {transaction.accountNumber}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Narration
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {transaction.narration || "No narration"}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ReceiptRecipient;