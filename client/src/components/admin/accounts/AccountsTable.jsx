import { getCurrentUser } from "../../../services/authService";

function AccountsTable() {

  const customer = getCurrentUser();

  const accounts = customer
    ? [
        {
          id: customer.customerId || "JPM100001",
          name: customer.name,
          email: customer.email,
          accountNumber: customer.accountNumber,
          accountType: customer.accountType,
          balance: customer.balance,
          status: "Active",
        },
      ]
    : [];

  return (

    <div className="mt-10 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">

          Customer Accounts

        </h2>

      </div>

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left text-gray-300">
              Customer ID
            </th>

            <th className="text-left text-gray-300">
              Name
            </th>

            <th className="text-left text-gray-300">
              Email
            </th>

            <th className="text-left text-gray-300">
              Account Number
            </th>

            <th className="text-left text-gray-300">
              Type
            </th>

            <th className="text-left text-gray-300">
              Balance
            </th>

            <th className="text-left text-gray-300">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {accounts.map((account) => (

            <tr
              key={account.id}
              className="border-t border-slate-800 hover:bg-slate-800/50"
            >

              <td className="p-4 text-white">

                {account.id}

              </td>

              <td className="text-white">

                {account.name}

              </td>

              <td className="text-gray-300">

                {account.email}

              </td>

              <td className="text-gray-300">

                {account.accountNumber}

              </td>

              <td className="text-gray-300">

                {account.accountType}

              </td>

              <td className="text-green-400 font-bold">

                ${Number(account.balance).toLocaleString()}

              </td>

              <td>

                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">

                  {account.status}

                </span>

              </td>

            </tr>

          ))}

          {accounts.length === 0 && (

            <tr>

              <td
                colSpan="7"
                className="text-center p-10 text-gray-500"
              >

                No customer accounts found.

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default AccountsTable;