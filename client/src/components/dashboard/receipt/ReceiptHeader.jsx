function ReceiptHeader() {
  return (
    <div className="border-b border-slate-700 pb-6 mb-8 text-center">

      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
          PB
        </div>
      </div>

      <h1 className="text-4xl font-bold text-white">
        JP Morgan Chase
      </h1>

      <p className="text-green-400 mt-2">
        Banking Without Limits
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8">
        TRANSFER RECEIPT
      </h2>

    </div>
  );
}

export default ReceiptHeader;