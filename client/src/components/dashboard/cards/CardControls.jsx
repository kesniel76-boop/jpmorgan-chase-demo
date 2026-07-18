import { useState } from "react";
import { getCard, updateCard } from "../../../services/cardService";

function CardControls() {

  const [card, setCard] = useState(getCard());

  const toggleFreeze = () => {

    const updated = {
      ...card,
      frozen: !card.frozen,
    };

    updateCard(updated);

    setCard(updated);

  };

  const updateLimit = (e) => {

    const updated = {
      ...card,
      dailyLimit: Number(e.target.value),
    };

    updateCard(updated);

    setCard(updated);

  };

  const copyNumber = async () => {

    await navigator.clipboard.writeText(card.number);

    alert("Card number copied.");

  };

  return (

    <div className="mt-10 bg-slate-900 rounded-2xl border border-slate-800 p-8">

      <h2 className="text-2xl text-white font-bold">

        Card Controls

      </h2>

      <div className="mt-8 space-y-8">

        <div className="flex justify-between items-center">

          <div>

            <h3 className="text-white">

              Card Status

            </h3>

            <p className="text-gray-400">

              {card.frozen
                ? "Frozen"
                : "Active"}

            </p>

          </div>

          <button
            onClick={toggleFreeze}
            className={`px-6 py-3 rounded-xl font-bold text-white ${
              card.frozen
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >

            {card.frozen
              ? "Unfreeze Card"
              : "Freeze Card"}

          </button>

        </div>

        <div>

          <label className="text-gray-400">

            Daily Spending Limit

          </label>

          <input
            type="number"
            value={card.dailyLimit}
            onChange={updateLimit}
            className="mt-3 w-full bg-slate-800 rounded-xl p-4 text-white"
          />

        </div>

        <button
          onClick={copyNumber}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold"
        >

          Copy Card Number

        </button>

      </div>

    </div>

  );

}

export default CardControls;