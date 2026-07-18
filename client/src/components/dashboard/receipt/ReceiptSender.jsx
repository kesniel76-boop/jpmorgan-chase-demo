import { getCurrentUser } from "../../../services/authService";

function ReceiptSender() {
  const user = getCurrentUser();

  if (!user) return null;

  return (
    <div className="bg-slate-800 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-5">
        Sender Information
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-400 text-sm">
            Account Name
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {user.name}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Customer ID
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {user.customerId}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Account Number
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {user.accountNumber}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Account Type
          </p>

          <p className="text-white text-lg font-semibold mt-1">
            {user.accountType}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ReceiptSender;