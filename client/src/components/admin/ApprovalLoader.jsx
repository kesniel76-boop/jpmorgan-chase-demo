function ApprovalLoader() {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 w-full max-w-md">

        <div className="flex justify-center">

          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

        </div>

        <h2 className="text-2xl text-white font-bold text-center mt-8">
          Approving Transfer
        </h2>

        <p className="text-gray-400 text-center mt-3">
          Connecting to Core Banking System...
        </p>

        <div className="mt-8 w-full bg-slate-800 rounded-full h-3 overflow-hidden">

          <div className="bg-green-500 h-full animate-pulse w-full"></div>

        </div>

      </div>

    </div>
  );
}

export default ApprovalLoader;