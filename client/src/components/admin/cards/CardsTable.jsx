import { useState } from "react";
import { getCard, updateCard } from "../../../services/cardService";

function CardsTable() {

  const [card, setCard] = useState(getCard());

  const toggleStatus = () => {

    const updated = {
      ...card,
      frozen: !card.frozen,
    };

    updateCard(updated);

    setCard(updated);

  };

  return (

    <div className="mt-10 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-white">

          Customer Cards

        </h2>

      </div>

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left text-gray-300">
              Customer
            </th>

            <th className="text-left text-gray-300">
              Card Number
            </th>

            <th className="text-left text-gray-300">
              Type
            </th>

            <th className="text-left text-gray-300">
              Expiry
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

          <tr className="border-t border-slate-800 hover:bg-slate-800/40">

            <td className="p-4 text-white">

              {card.holder}

            </td>

            <td className="text-white">

              **** **** **** {card.number.slice(-4)}

            </td>

            <td className="text-gray-300">

              {card.type}

            </td>

            <td className="text-gray-300">

              {card.expiry}

            </td>

            <td>

              {card.frozen ? (

                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full">

                  Frozen

                </span>

              ) : (

                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">

                  Active

                </span>

              )}

            </td>

            <td>

              <button
                onClick={toggleStatus}
                className={`px-4 py-2 rounded-lg text-white font-semibold ${
                  card.frozen
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >

                {card.frozen
                  ? "Unfreeze"
                  : "Freeze"}

              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default CardsTable;