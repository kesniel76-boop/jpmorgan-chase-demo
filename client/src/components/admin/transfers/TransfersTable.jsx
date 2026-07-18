import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAllTransfers,
  approveTransfer,
} from "../../../services/transferService";

function TransfersTable() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTransfers();
  }, []);

  async function loadTransfers() {
    const data = await getAllTransfers();
    setTransactions(data || []);
  }

  async function approve(id) {
    const result = await approveTransfer(id);

    if (result.success) {
      loadTransfers();
    }
  }

  let filtered = [...transactions];

  if (filter !== "All") {
    filtered = filtered.filter(
      (t) => t.status === filter
    );
  }

  if (search.trim()) {
    filtered = filtered.filter(
      (t) =>
        t.recipient
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        t.reference
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );
  }

  return (
    <div className="mt-10">

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

        <div className="flex flex-col lg:flex-row gap-4 justify-between">

          <input
            type="text"
            placeholder="Search recipient or reference..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="bg-slate-800 rounded-xl px-5 py-3 text-white w-full lg:w-96"
          />

          <select
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            className="bg-slate-800 rounded-xl px-5 py-3 text-white"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Successful</option>
          </select>

        </div>

      </div>

      <div className="mt-6 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="p-4 text-left text-gray-300">
                Reference
              </th>

              <th className="text-left text-gray-300">
                Recipient
              </th>

              <th className="text-left text-gray-300">
                Bank
              </th>

              <th className="text-left text-gray-300">
                Amount
              </th>

              <th className="text-left text-gray-300">
                Status
              </th>

              <th className="text-left text-gray-300">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((t)=>(

              <tr
                key={t.id}
                className="border-t border-slate-800 hover:bg-slate-800/40"
              >

                <td className="p-4 text-white">
                  {t.reference}
                </td>

                <td className="text-white">
                  {t.recipient}
                </td>

                <td className="text-gray-300">
                  {t.bank}
                </td>

                <td className="text-green-400 font-semibold">
                  ${Number(t.amount).toLocaleString()}
                </td>

                <td>

                  {t.status==="Pending" ? (

                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
                      Pending
                    </span>

                  ) : (

                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300">
                      Successful
                    </span>

                  )}

                </td>

                <td>

                  <div className="flex gap-3">

                    {t.status==="Pending" && (

                      <button
                        onClick={()=>approve(t.id)}
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
                      >
                        Approve
                      </button>

                    )}

                    <Link
                      to="/receipt"
                      state={{ transaction:t }}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
                    >
                      Receipt
                    </Link>

                  </div>

                </td>

              </tr>

            ))}

            {filtered.length===0 && (

              <tr>

                <td
                  colSpan="6"
                  className="text-center p-8 text-gray-500"
                >
                  No transfers found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TransfersTable;